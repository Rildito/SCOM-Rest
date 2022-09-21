import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [cargando, setCargando] = useState(false);
    const [errores, setErrores] = useState([]);
    const [auth, setAuth] = useState({});

    const autenticarUsuario = async ({ nombreUsuario, password }) => {
        // const { data } = await axios.post("usuarios/perfil", { email, password }); //URL para autenticar

        try {
            setCargando(true);
            const { data: { data, error } } = await axios.post("https://scom-rest.herokuapp.com/api/login", {
                user: nombreUsuario,
                password
            }); //URL para autenticar

            if (error?.length > 0) {
                setErrores(error);
                setCargando(false);
                return
            }
            setErrores([]);
            setAuth(data);
            navigate('/');

        } catch (error) {
            // console.log(error);
        } finally {
            setCargando(false);
        }

    };

    return (
        <AuthContext.Provider value={{
            //Variables
            auth,
            cargando,
            errores,
            //Functions
            autenticarUsuario,
            setAuth,
            setErrores
        }}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthContext;