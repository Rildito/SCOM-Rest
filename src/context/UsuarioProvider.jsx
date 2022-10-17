import { createContext, useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useContext } from "react";
import AuthContext from "./AuthProvider";

const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {

    const navigate = useNavigate();

    //USUARIOS
    const [usuarios, setUsuarios] = useState([]);

    const [usuario, setUsuario] = useState({});
    const [cargando, setCargando] = useState(false);
    const [tipoUsuario, setTipoUsuario] = useState('cliente');

    const [errores, setErrores] = useState([]);

    const { auth, setAuth } = useContext(AuthContext);

    //USUARIO COBRO

    const [usuarioEgresos, setUsuarioEgresos] = useState([]);
    const [cargandoDatos, setCargandoDatos] = useState(false);

    const [opiniones, setOpiniones] = useState([]);
    
    useEffect(() => {
        if (auth.tipoUsuario === 'administrador') {
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
        }

    }, [tipoUsuario, auth]);

    const obtenerUsuarios = async () => {

        setCargando(true);
        try {
            const { data: { data, error } } = await axios.get("https://scom-rest.herokuapp.com/api/usuarios");
            setUsuarios(data);
        } catch (error) {
            console.log(error);
            toast.error('Ocurrio un error inesperado');
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
            console.log(error);
            toast.error('Ocurrio un error inesperado');
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
            console.log(error);
            toast.error('Ocurrio un error inesperado');
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
            console.log(error);
            toast.error('Ocurrio un error inesperado');
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
            console.log(error);
            toast.error('Ocurrio un error inesperado');
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
            console.log(error);
            toast.error('Ocurrio un error inesperado');
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
            setUsuario(data)

        } catch (error) {
            console.log(error);
            navigate('/administrador/usuarios');
            toast.error('Ocurrio un error inesperado');
        } finally {
            setCargando(false);
        }
    };

    const submitUsuario = async (usuario, tipoUsuario) => {
        console.log(usuario, tipoUsuario)
        if (usuario.id) {
            await editarUsuario(usuario, tipoUsuario);
        } else {
            await nuevoUsuario(usuario, tipoUsuario);
        }
    };

    const nuevoUsuario = async (usuario, tipoUsuario) => {

        try {
            setCargando(true);

            const { data: { data, error } } = await axios.post(`https://scom-rest.herokuapp.com/api/${tipoUsuario}`, usuario);
            if (error?.length > 0) {
                setErrores(error);
                return;
            }

            setUsuarios([...usuarios, data]);
            setErrores([]);
            if (auth.tipoUsuario === 'adminitrador') {
                navigate('/administrador/usuarios');
                toast.success('Se creo el usuario correctamente');
            } else {
                setAuth(data)
                navigate('/')
            }
        } catch (error) {
            console.log(error);
            navigate('/administrador/usuarios');
            toast.error('Ocurrio un error inesperado');
        } finally {
            setCargando(false);
        }//TODO: configurar los nombres de usuarios.
    };

    const editarUsuario = async (usuario, tipoUsuario) => {

        try {
            setCargando(true);
            const { data: { data, error } } = await axios.put(`https://scom-rest.herokuapp.com/api/${tipoUsuario}/${usuario.ci}`, usuario); //URL para editar

            if (error.length > 0) {
                setErrores(error);
                return
            }
            console.log(data, "DATA")
            const usuariosActualizados = usuarios.map(us => us.ci !== data.ci ? us : data);

            setUsuarios(usuariosActualizados);
            setErrores([]);
            setUsuario({});

            navigate('/administrador/usuarios');
            toast.success('Se modifico el usuario correctamente');

        } catch (error) {
            console.log(error);
            navigate('/administrador/usuarios');
            toast.error('Ocurrio un error inesperado');
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
            toast.success('Se elimino el usuario correctamente');
        } catch (error) {
            console.log(error);
            navigate('/administrador/usuarios');
            toast.error('Ocurrio un error inesperado');
        } finally {
            setCargando(false);
        }
    };

    const obtenerSalarios = async () => {
        setCargandoDatos(true);

        const urls = ["https://scom-rest.herokuapp.com/api/cajeros", "https://scom-rest.herokuapp.com/api/chefs", "https://scom-rest.herokuapp.com/api/camareros", "https://scom-rest.herokuapp.com/api/administradores"];
        const prueba = await Promise.all(urls.map(async url => {
            const { data: { data, error } } = await axios(url);
            //console.log(...data)
            return data
        }));
        const usuarios = [].concat(prueba[0], prueba[1], prueba[2], prueba[3]);
        setUsuarioEgresos(usuarios)
        setCargandoDatos(false);


    };

    const obtenerUsuarioCobrar = async (ci) => {
        try {
            setCargando(true);
            const { data: { data, error } } = await axios.get(`https://scom-rest.herokuapp.com/api/cliente/${ci}`, {
                responseEncodig: 'utf-8'
            });
            setUsuario(data)
            return data
        } catch (error) {
            console.log(error);
            toast.error('Ocurrio un error inesperado');
            return false
        } finally {
            setCargando(false);
        }
    };

    const obtenerOpiniones = async () => {
        try {
            setCargando(true);
            const { data: { data, error } } = await axios.get(`https://scom-rest.herokuapp.com/api/opiniones`, {
                responseEncodig: 'utf-8'
            });
            setOpiniones(data);
            return data
        } catch (error) {
            console.log(error);
            toast.error('Ocurrio un error inesperado');
            return false
        } finally {
            setCargando(false);
        }
    };
    return (
        <UsuarioContext.Provider value={{
            //Variables
            usuarios,
            usuario,
            cargando,
            tipoUsuario,
            cargandoDatos,
            errores,
            //Functions
            eliminarUsuario,
            submitUsuario,
            obtenerUsuario,
            opiniones,
            obtenerUsuarioCobrar,
            setTipoUsuario,

            setErrores,
            setUsuario,
            //FuncionesParallamarusuarios
            obtenerClientes,
            obtenerCajeros,
            obtenerChefs,
            obtenerSalarios,
            obtenerOpiniones,
            usuarioEgresos

        }}>
            {children}
        </UsuarioContext.Provider>
    )
}


export default UsuarioContext;
