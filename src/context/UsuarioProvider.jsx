import { createContext, useState, useEffect } from "react"
import axios from 'axios';

const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {

    //USUARIOS
    const [usuarios, setUsuarios] = useState([]);

    const [usuario, setUsuario] = useState({});
    const [cargando, setCargando] = useState(false);
    const [tipoUsuario, setTipoUsuario] = useState('cliente');

    //alerta
    const [alerta, setAlerta] = useState({});
    const [errores, setErrores] = useState([]);

    useEffect(() => {

        if (tipoUsuario === 'cliente') {
            obtenerClientes();
        }

        if (tipoUsuario === 'cajero') {
            obtenerCajeros();
        }

        if (tipoUsuario === '') {
            obtenerUsuarios();
        }

        //TODO:Aumentar si hay nuevos usuarios

    }, [tipoUsuario]);

    const obtenerUsuarios = async () => {

        setCargando(true);
        try {
            const { data } = await axios.get("https://scom-rest.herokuapp.com/api/usuarios");
            setUsuarios(data.data);
        } catch (error) {
            setCargando(false);
            console.log(error);
        } finally {
            setCargando(false);
        }
    }

    const obtenerClientes = async () => {
        setCargando(true);
        try {
            const { data } = await axios.get("https://scom-rest.herokuapp.com/api/clientes");
            setUsuarios(data.data);
        } catch (error) {
            setCargando(false);
            console.log(error);
        } finally {
            setCargando(false);
        }
    }

    const obtenerCajeros = async () => {

        setCargando(true);
        try {
            const { data } = await axios.get("https://scom-rest.herokuapp.com/api/cajeros");
            setUsuarios(data.data);
        } catch (error) {
            setCargando(false);
            console.log(error);
        } finally {
            setCargando(false);
            }
    }

    const obtenerChefs = async () => {
        setCargando(true);
        try {
            const { data } = await axios.get("https://scom-rest.herokuapp.com/api/chefs");
            setUsuarios(data.data);
        } catch (error) {
            setCargando(false);
            console.log(error);
        } finally {
            setCargando(false);
        }

    }

    const obtenerCamareros = async () => {
        setCargando(true);
        const { data } = await axios.get("https://scom-rest.herokuapp.com/api/camareros")
        setUsuarios(data);
        setCargando(false);
    }



    const obtenerUsuario = async (ci, tipoUsuario) => {
        setCargando(true);
        const { data, error } = await axios.get(`https://scom-rest.herokuapp.com/api/${tipoUsuario}/${ci}`);
        setUsuario(data.data);
        setCargando(false);
    };

    const submitUsuario = (usuario, tipoUsuario) => {

        if (usuario.id) {
            editarUsuario(usuario, tipoUsuario);
        } else {
            nuevoUsuario(usuario, tipoUsuario);
        }
    };

    const nuevoUsuario = async (usuario, tipoUsuario) => {

        setCargando(true);
        const { data, error } = await axios.post(`https://scom-rest.herokuapp.com/api/${tipoUsuario}`, usuario);
        console.log("DATA")
        console.log(data);
        console.log("ERROR")
        console.log(error);

        if (error?.length > 0) {
            setCargando(false);
            setErrores(error);
            return
        }

        if (tipoUsuario === '') {
            setUsuarios([...usuarios, data.data]);
        }

        if (tipoUsuario === 'cliente') {
            setUsuarios([...usuarios, data.data]);
        }

        if (tipoUsuario === 'cajero') {
            setUsuarios([...usuarios, data.data]    );
        }
        setCargando(false);
        mostrarAlerta('Se creo el usuario correctamente', 'primary');

    };

    const editarUsuario = async (usuario, tipoUsuario) => {

        setCargando(true);
        const { data, error } = await axios.put(`https://scom-rest.herokuapp.com/api/${tipoUsuario}/${usuario.ci}`, usuario); //URL para editar
        //console.log(data.data);
        if (error?.length > 0) {
            setCargando(false);
            setErrores(error);
            return
        }


        let usuariosActualizados;

        if (tipoUsuario === '') {
            usuariosActualizados = usuarios.map(us => us.ci !== data.ci ? us : data.data);
        }

        if (tipoUsuario === 'cliente') {
            usuariosActualizados = usuarios.map(us => us.ci !== data.ci ? us : data.data);

        }

        if (tipoUsuario === 'cajero') {
            usuariosActualizados = usuarios.map(us => us.ci !== data.ci ? us : data.data);
        }

        setUsuarios(usuariosActualizados);
        setCargando(false);
        mostrarAlerta('Se modifico el usuario correctamente', 'primary');

    };


    const eliminarUsuario = async (ci, tipoUsuario) => {

        const { data, error } = await axios.delete(`https://scom-rest.herokuapp.com/api/${tipoUsuario}/${ci}`);
        console.log(data);
        if (error?.length > 0) {
            setCargando(false);
            setErrores(error);
            return
        }

        let usuariosActualizados;
        if (tipoUsuario === '') {
            usuariosActualizados = usuarios.filter(usuario => usuario.ci !== ci);
        }

        if (tipoUsuario === 'cliente') {
            usuariosActualizados = usuarios.filter(usuario => usuario.ci !== ci);
        }

        if (tipoUsuario === 'cajero') {
            usuariosActualizados = usuarios.filter(usuario => usuario.ci !== ci);
        }

        setUsuarios(usuariosActualizados);
        mostrarAlerta('Se elimino el usuario correctamente', 'danger');



    };

    const mostrarAlerta = (mensaje, tipoAlerta) => {
        setAlerta({
            msg: mensaje,
            tipoAlerta
        })

        setTimeout(() => {
            setAlerta({});
        }, 3000)
    }
    return (
        <UsuarioContext.Provider value={{
            //Variables
            usuarios,
            usuario,
            cargando,
            tipoUsuario,
            alerta,
            errores,
            //Functions
            eliminarUsuario,
            submitUsuario,
            obtenerUsuario,
            setTipoUsuario,
            setAlerta,
            //FuncionesParallamarusuarios
            obtenerClientes,
            obtenerCajeros,
            obtenerChefs

        }}>
            {children}
        </UsuarioContext.Provider>
    )
}


export default UsuarioContext;
