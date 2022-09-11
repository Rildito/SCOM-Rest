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
            const { data } = await axios.get("https://scom-rest.herokuapp.com/api/usuarios");
            setUsuarios(data);
        };
        obtenerUsuarios();
    }, []);

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

        // const { data } = await axios.post(`https://scom-rest.herokuapp.com/api/${tipoUsuario}`, usuario); //URL para crear tipoUsuario
        console.log(usuario);
        await axios.post(`https://scom-rest.herokuapp.com/api/cliente`, 
            {
                "ci": 12412,
                "nombreUsuario": "enrique",
                "contraseña": "12345",
                "fechaNacimiento": "2000-02-24",
                "nombre": "jose",
                "apellidoPaterno": "flores",
                "apellidoMaterno": "quisbert",
                "estado": "habilitado",
                "nit": "123456",
                "email": "jiucp@gmail.com"
            }
            
        ); //URL para crear tipoUsuario
        console.log("ENVIO CORRECTAMENTE");
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

    console.log(data);

};

const editarUsuario = async (usuario, tipoUsuario) => {

    const { data } = await axios.put(`https://scom-rest.herokuapp.com/api/${tipoUsuario}/${usuario.ci}`); //URL para editar

    let usuariosActualizados;
    if (tipoUsuario === '') {
        usuariosActualizados = usuarios.filter(usuario => usuario.ci !== ci ? usuario : data);
    }

    if (tipoUsuario === 'cliente') {
        usuariosActualizados = clientes.filter(usuario => usuario.ci !== ci ? usuario : data);

    }

    if (tipoUsuario === 'cajero') {
        usuariosActualizados = cajeros.filter(usuario => usuario.ci !== ci ? usuario : data);
    }

    setUsuarios(usuariosActualizados);
    console.log(data);
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

        //Functions
        eliminarUsuario,
        submitUsuario,
        obtenerUsuario,
        setTipoUsuario,

        //FuncionesParallamarusuarios
        obtenerClientes,
        obtenerCajeros

    }}>
        {children}
    </UsuarioContext.Provider>
)
}

export default UsuarioContext;
