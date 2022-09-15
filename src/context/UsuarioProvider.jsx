import { createContext, useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {

    const navigate = useNavigate();

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

        if (tipoUsuario === 'camarero') {
            obtenerCamareros();
        }

        if (tipoUsuario === 'chef') {
            obtenerChefs();
        }

        if (tipoUsuario === 'administrador') {
            obtenerAdministradores();
        }

        if (tipoUsuario === '') {
            obtenerUsuarios();
        }

        //TODO:Aumentar si hay nuevos usuarios

    }, [tipoUsuario]);

    const obtenerUsuarios = async () => {

        setCargando(true);
        try {
            const { data: { data, error } } = await axios.get("https://scom-rest.herokuapp.com/api/usuarios");
            setUsuarios(data);
        } catch (error) {
            setCargando(false);
            setUsuarios([]);
            mostrarAlerta('Ocurrio un error', 'danger');
        } finally {
            setCargando(false);
        }
    }

    const obtenerClientes = async () => {
        setCargando(true);
        try {
            const { data: { data, error } } = await axios.get("https://scom-rest.herokuapp.com/api/clientes");
            setUsuarios(data);
        } catch (error) {
            setCargando(false);
            setUsuarios([]);
            mostrarAlerta('Ocurrio un error', 'danger');
        } finally {
            setCargando(false);
        }
    }

    const obtenerCajeros = async () => {

        setCargando(true);
        try {
            const { data: { data, error } } = await axios.get("https://scom-rest.herokuapp.com/api/cajeros");
            setUsuarios(data);
        } catch (error) {
            setCargando(false);
            setUsuarios([]);
            mostrarAlerta('Ocurrio un error', 'danger');
        } finally {
            setCargando(false);
        }
    }

    const obtenerChefs = async () => {
        setCargando(true);
        try {
            const { data: { data, error } } = await axios.get("https://scom-rest.herokuapp.com/api/chefs");
            setUsuarios(data);
        } catch (error) {
            setCargando(false);
            setUsuarios([]);
            mostrarAlerta('Ocurrio un error', 'danger');
        } finally {
            setCargando(false);
        }

    }

    const obtenerCamareros = async () => {
        setCargando(true);
        try {
            const { data: { data, error } } = await axios.get("https://scom-rest.herokuapp.com/api/camareros")
            setUsuarios(data);
        } catch (error) {
            setCargando(false);
            setUsuarios([]);
            mostrarAlerta('Ocurrio un error', 'danger');
        } finally {
            setCargando(false);
        }
    }

    const obtenerAdministradores = async () => {
        setCargando(true);
        try {
            const { data: { data, error } } = await axios.get("https://scom-rest.herokuapp.com/api/administradores")
            setUsuarios(data);
        } catch (error) {
            setCargando(false);
            setUsuarios([]);
            mostrarAlerta('Ocurrio un error', 'danger');
        } finally {
            setCargando(false);
        }
    }

    const obtenerUsuario = async (ci, tipoUsuario) => {
        try {
            setCargando(true);
            const { data: { data, error } } = await axios.get(`https://scom-rest.herokuapp.com/api/${tipoUsuario}/${ci}`, {
                responseEncodig: 'utf-8'
            });
            setUsuario(data);

        } catch (error) {
            mostrarAlerta('Ocurrio un error', 'danger');
        } finally {
            setCargando(false);
        }
    };

    const submitUsuario = async (usuario, tipoUsuario) => {

        if (usuario.id) {
            await editarUsuario(usuario, tipoUsuario);
        } else {
            await nuevoUsuario(usuario, tipoUsuario);
        }
    };

    const nuevoUsuario = async (usuario, tipoUsuario) => {

        try {
            setCargando(true);
            console.log(usuario);
            const { data: { data, error } } = await axios.post(`https://scom-rest.herokuapp.com/api/${tipoUsuario}`, usuario);

            if (error?.length > 0) {
                setErrores(error);
                return
            }
            setUsuarios([...usuarios, data]);
            setErrores([]);
            navigate('/administrador/usuarios');
            mostrarAlerta('Se creo el usuario correctamente', 'primary');
        } catch (error) {
            mostrarAlerta('Ocurrio un error', 'danger');
        } finally {
            setCargando(false);
        }
    };

    const editarUsuario = async (usuario, tipoUsuario) => {

        try {
            setCargando(true);
            const { data: { data, error } } = await axios.put(`https://scom-rest.herokuapp.com/api/${tipoUsuario}/${usuario.ci}`, usuario); //URL para editar

            if (error.length > 0) {
                setErrores(error);
                return
            }
            const usuariosActualizados = usuarios.map(us => us.ci !== data.ci ? us : data);

            setUsuarios(usuariosActualizados);
            setErrores([]);
            setUsuario({});
            navigate('/administrador/usuarios');
            mostrarAlerta('Se modifico el usuario correctamente', 'primary');
        } catch (error) {
            mostrarAlerta('Ocurrio un error', 'danger');
        } finally {
            setCargando(false);
        }


    };


    const eliminarUsuario = async (ci, tipoUsuario) => {

        try {
            setCargando(true);
            const { data: { data, error } } = await axios.delete(`https://scom-rest.herokuapp.com/api/${tipoUsuario}/${ci}`);
            if (error?.length > 0) {
                setErrores(error);
                return
            }
            const usuariosActualizados = usuarios.filter(usuario => usuario.ci !== ci);
            setUsuarios(usuariosActualizados);
            setErrores([]);
            navigate('/administrador/usuarios');
            mostrarAlerta('Se elimino el usuario correctamente', 'danger');
        } catch (error) {
            mostrarAlerta('Ocurrio un error', 'danger');
        } finally {
            setCargando(false);
        }


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
            setErrores,
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
