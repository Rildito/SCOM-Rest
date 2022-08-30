import { createContext, useState, useEffect} from "react"
import axios from 'axios';

const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {

    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState({});
    const [cargando, setCargando] = useState(false);


    useEffect(() => {
        const obtenerUsuarios = async () => {
            // const { data } = await axios.get("/usuarios"); //Url para obtenerUsuarios
            const { data } = await axios.get("../../db.json");
            setUsuarios(data);
        };

        obtenerUsuarios();
    }, []);

    const obtenerUsuario = async id => {
        // const { data } = await axios.get(`/usuarios/${id}`);
        setCargando(true);
        const { data } = await axios.get(`../../usuario.json`);
        setUsuario(data);
        setCargando(false);
    };
    const submitUsuario = usuario => {
        console.log(usuario);
        if (usuario.id) {
            editarUsuario(usuario);
        } else {
            nuevoUsuario(usuario);
        }
    };

    const nuevoUsuario = async usuario => {

        // const { data } = await axios.post('/usuarios', usuario); //URL para crear
        // setUsuarios([...usuarios, data])
    };

    const editarUsuario = async usuario => {
        // const { data } = await axios.post(`/usuarios/${usuario.ci}`, usuario); //URL para editar
        // setUsuarios([...usuarios, data])
    };

    const eliminarUsuario = async ci => {
        // const { data } = await axios.delete(`/usuarios/${usuario.ci}`); //URL para editar
        const usuariosActualizados = usuarios.filter(usuario => usuario.ci !== ci);
        setUsuarios(usuariosActualizados);
    };

    return (
        <UsuarioContext.Provider value={{
            //Variables
            usuarios,
            usuario,
            cargando,
            //Functions
            eliminarUsuario,
            submitUsuario,
            obtenerUsuario

        }}>
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioContext;
