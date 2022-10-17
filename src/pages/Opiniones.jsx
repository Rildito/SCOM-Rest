import { useEffect } from 'react';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../components';
import UsuarioContext from '../context/UsuarioProvider';


export const Opiniones = () => {

    const { opiniones, cargando, obtenerOpiniones } = useContext(UsuarioContext);

    const navigate = useNavigate();

    const volverPantalla = () => {
        navigate('/administrador');
    };

    useEffect(()=>{
        obtenerOpiniones();
    },[])

    if (cargando) return (
        <>
            <Spinner />
            <p className='text-center'>Obteniendo opiniones de usuarios...</p>
        </>
    )
    return (
        <>
            <h1 className="text-center w-100 bg-primary bg-dark text-white p-5 fw-bolder">
                OPINIONES
            </h1>
            <button className='btn btn-success mt-2 w-md-auto w-100' onClick={volverPantalla}>Volver a pantalla principal</button>
            <div className='mt-3 table-wrapper-scroll-y my-custom-scrollbar-usuario border w-md-75 w-100'>
                <table className="table bg-white">
                    <thead className='text-center table-dark'>
                        <tr>
                            <th scope="col">Nombre Completo</th>
                            <th scope="col">Email</th>
                            <th scope="col">Comentario</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>

                        {
                            opiniones?.map(opinion => (
                                <tr key={opinion.idOpinion} className="align-middle">
                                    <th scope='row'>{`${opinion.nombre} ${opinion.apellido}`}</th>
                                    <td>{opinion.email}</td>
                                    <td>{opinion.mensaje}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}
