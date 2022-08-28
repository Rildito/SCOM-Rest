import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react'
import { FormularioUsuario } from '../components/FormularioUsuario';
import UsuarioContext from '../context/UsuarioProvider';
import { Spinner } from '../components/Spinner';

export const EditarUsuario = () => {

    const { ci } = useParams();
    const { obtenerUsuario, cargando } = useContext(UsuarioContext);

    useEffect(() => {
        obtenerUsuario(ci);
    }, []);

    if (cargando) return <Spinner />;

    return (
            <div className='w-md-50 w-75 p-md-4 p-3 border shadow-lg bg-white rounded-3 my-5'>
                <h1 className='text-center fw-normal fs-3'>Editar Usuario</h1>
                <div className='row'>
                    <FormularioUsuario />
                </div>
            </div>
    );
}
