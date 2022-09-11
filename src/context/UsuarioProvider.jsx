import { createContext, useState, useEffect } from "react"
import axios from 'axios';

const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {

    //USUARIOS
    const [usuarios, setUsuarios] = useState([]);

    const [usuario, setUsuario] = useState({});
    const [cargando, setCargando] = useState(false);
    const [tipoUsuario, setTipoUsuario] = useState('');

    //alerta
    const [alerta, setAlerta] = useState(true);
    const [mensaje, setMensaje] = useState({});

    useEffect(() => {

        if (tipoUsuario === 'cliente') {
            obtenerClientes();
        }

        if (tipoUsuario === 'cajero') {
            obtenerClientes();
        }

        if (tipoUsuario === '') {
            obtenerUsuarios();
        }

    }, [tipoUsuario]);

    const obtenerUsuarios = async () => {
        const { data } = await axios.get("https://scom-rest.herokuapp.com/api/usuarios");
        setUsuarios(data);
    };

    const obtenerClientes = async () => {
        setCargando(true);
        const { data } = await axios.get("https://scom-rest.herokuapp.com/api/clientes")
        setUsuarios(data);
        setCargando(false);
    }

    const obtenerCajeros = async () => {
        setCargando(true);
        const { data } = await axios.get("https://scom-rest.herokuapp.com/api/cajeros")
        setUsuarios(data);
        setCargando(false);
    }

    const obtenerUsuario = async (ci, tipoUsuario) => {
        setCargando(true);
        const { data } = await axios.get(`https://scom-rest.herokuapp.com/api/${tipoUsuario}/${ci}`);
        setUsuario(data);
        console.log(data);
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

        const { response, data, errores } = await axios.post(`https://scom-rest.herokuapp.com/api/${tipoUsuario}`, usuario);
        // console.log(data);

        if (tipoUsuario === '') {
            setUsuarios([...usuarios, data]);
        }

        if (tipoUsuario === 'cliente') {
            setUsuarios([...usuarios, data]);
        }

        if (tipoUsuario === 'cajero') {
            setUsuarios([...usuarios, data]);
        }

        setAlerta({
            mensaje:'Se creo el usuario correctamente',
            tipoAlerta:'primary'
        })

    };

    const editarUsuario = async (usuario, tipoUsuario) => {

        console
        const { data } = await axios.put(`https://scom-rest.herokuapp.com/api/${tipoUsuario}/${usuario.ci}`, usuario); //URL para editar

        let usuariosActualizados;
        if (tipoUsuario === '') {
            usuariosActualizados = usuarios.filter(usuario => usuario.ci !== ci ? usuario : data);
        }

        if (tipoUsuario === 'cliente') {
            usuariosActualizados = usuarios.filter(usuario => usuario.ci !== ci ? usuario : data);

        }

        if (tipoUsuario === 'cajero') {
            usuariosActualizados = usuarios.filter(usuario => usuario.ci !== ci ? usuario : data);
        }

        setUsuarios(usuariosActualizados);

    };


    const eliminarUsuario = async (ci, tipoUsuario) => {

        const { data } = await axios.delete(`https://scom-rest.herokuapp.com/api/${tipoUsuario}/${usuario.ci}`); //URL para editar
        let usuariosActualizados;
        console.log(data);
        if (tipoUsuario === '') {
            usuariosActualizados = usuarios.filter(usuario => usuario.ci !== ci);
        }

        if (tipoUsuario === 'cliente') {
            usuariosActualizados = usuarios.filter(usuario => usuario.ci !== ci);
        }

        if (tipoUsuario === 'cajero') {
            usuariosActualizados = usuarios.filter(usuario => usuario.ci !== ci);
        }
        setUsuario(usuariosActualizados);

    };


    return (
        <UsuarioContext.Provider value={{
            //Variables
            usuarios,
            usuario,
            cargando,
            tipoUsuario,
            alerta,

            //Functions
            eliminarUsuario,
            submitUsuario,
            obtenerUsuario,
            setTipoUsuario,
            setAlerta,
            //FuncionesParallamarusuarios
            obtenerClientes,
            obtenerCajeros

        }}>
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioContext;
