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