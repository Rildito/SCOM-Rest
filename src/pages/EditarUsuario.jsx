import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react'
import { FormularioUsuario } from '../components/FormularioUsuario';
import UsuarioContext from '../context/UsuarioProvider';
import { Spinner } from '../components/Spinner';

export const EditarUsuario = () => {

    const { ci, usuario } = useParams();
    const { obtenerUsuario, cargando } = useContext(UsuarioContext);

    useEffect(() => {
        if (usuario === '') {
            obtenerUsuario(ci, 'usuario');
        }

        if (usuario === 'cliente') {
            obtenerUsuario(ci,'cliente')
        }

        if (usuario === 'cajero') {
            obtenerUsuario(ci, 'cajero')
        }
    }, [usuario]);

    if (cargando) return <Spinner />;

    return (
        <>
            <h1 className='py-5 text-center fw-bold text-white bg-dark w-100 '>EDITAR {usuario.toUpperCase()}</h1>
            <div className='w-md-50 w-75 p-md-4 p-3 border shadow-lg bg-white rounded-3 my-5'>
                <div className='row'>
                    <FormularioUsuario />
                </div>
            </div>

        </>
    );
}
