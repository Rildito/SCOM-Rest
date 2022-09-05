import { createContext, useState, useEffect } from "react"
import axios from 'axios';

const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {

    //USUARIOS
    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState({});
    const [cargando, setCargando] = useState(false);
    const [tipoUsuario, setTipoUsuario] = useState('');


    useEffect(() => {
        const obtenerUsuarios = async () => {
            // const { data } = await axios.get("/usuarios/tipoUsuario"); //Url para obtenerUsuarios
            const { data } = await axios.get("../../db.json");
            setUsuarios(data);
        };
        obtenerUsuarios();
    }, []);

    const obtenerUsuario = async id => {
        // const { data } = await axios.get(`/usuarios/${id}&${tipoUsuario}`);
        setCargando(true);
        const { data } = await axios.get(`../../usuario.json`);
        setUsuario(data);
        setCargando(false);
    };

    const submitUsuario = usuario => {

        if (usuario.id) {
            editarUsuario(usuario);
        } else {
            nuevoUsuario(usuario);
        }
    };

    const nuevoUsuario = async usuario => {
        //const { data } = await axios.post('/usuarios', usuario); //URL para crear tipoUsuario
        // setUsuarios([...usuarios, data])
    };

    const editarUsuario = async usuario => {
        // const { data } = await axios.post(`/usuarios/usuarios/${usuario.ci}&${tipoUsuario},usuario`); //URL para editar
        const usuariosActualizados = usuarios.filter(usuario => usuario.ci !== ci ? usuario : data);
        setUsuarios(usuariosActualizados);
    };


    const eliminarUsuario = async ci => {
        // const { data } = await axios.delete(`/usuarios/${usuario.ci}&tipoUsuario`); //URL para editar
        const usuariosActualizados = usuarios.filter(usuario => usuario.ci !== ci);
        setUsuarios(usuariosActualizados);
    };

    const obtenerUsuarioGeneral = async (tipoUsuario) => {
        //const { data } = await axios.get(`/usuarios`, tipoUsuario);
        //setUsuarios(data);
    };

    return (
        <UsuarioContext.Provider value={{
            //Variables
            usuarios,
            usuario,
            cargando,
            tipoUsuario,

            //Functions
            eliminarUsuario,
            submitUsuario,
            obtenerUsuario,
            setTipoUsuario,
            obtenerUsuarioGeneral

        }}>
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioContext;
