import { Link } from 'react-router-dom';
import { useState } from 'react'
import { FormularioUsuario } from '../components/FormularioUsuario';

export const RegistrarUsuario = () => {

    return (
        <>
            <div className='w-md-50 w-75 p-md-4 p-3 border shadow-lg bg-white rounded-3 my-3'>
                <h1 className='text-center fw-normal fs-3'>Registrar Usuario</h1>
                <FormularioUsuario />
            </div>
            <nav className="w-100 d-flex justify-content-center w-md-50 w-75">
                <Link
                    className="text-decoration-none text-dark mb-4"
                    to="/"
                >¿Ya tienes una cuenta? Inicia Sesion</Link>
            </nav>
        </>
    );
}
