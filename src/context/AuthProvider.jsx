import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({});

    const autenticarUsuario = async ({ email, password }) => {
        // const { data } = await axios.post("usuarios/perfil", { email, password }); //URL para autenticar
        const { data } = await axios.post("localhost:4000/usuarios", { email, password }); //URL para autenticar
        setAuth(data);
    };
    // const [cargando, setCargando] = useState(true);
    // useEffect(() => {
    //     const autenticarUsuario = async () => {
    //         try {
    //             const {data} = axios.get()
    //         } catch (error) {

    //         }
    //     };
    // }, []);

    return (
        <AuthContext.Provider value={{
            //Variables
            auth,

            //Functions
            autenticarUsuario
        }}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthContext;