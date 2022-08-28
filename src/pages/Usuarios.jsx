import { useContext, useEffect } from 'react'

import { Link } from 'react-router-dom';
import UsuarioContext from '../context/UsuarioProvider';

export const Usuarios = () => {

    const { usuarios , eliminarUsuario } = useContext(UsuarioContext);

    return (
        <>
            <h1 className='py-5 text-center fw-bold text-white bg-dark w-100 '>ADMINISTRA TUS USUARIOS</h1>
            <div className='container bg-light vh-100 p-5 table-responsive rounded-2 mt-3'>
                <table className="table bg-white">
                    <thead className='text-center table-dark'>
                        <tr>
                            <th scope="col">CI</th>
                            <th scope="col">NIT</th>
                            <th scope="col">nombreUsuario</th>
                            <th scope="col">nombre</th>
                            <th scope="col">apellido Paterno</th>
                            <th scope="col">apellido Materno</th>
                            <th scope="col">Edad</th>
                            <th scope="col">Email</th>
                            <th scope="col">Operaciones</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            usuarios?.map(usuario => (
                                <tr key={usuario.ci} className="align-middle">
                                    <th scope='row'>{usuario.ci}</th>
                                    <td>{usuario.nit}</td>
                                    <td>{usuario.nombreUsuario}</td>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.apellidoPaterno}</td>
                                    <td>{usuario.apellidoMaterno}</td>
                                    <td>{usuario.edad}</td>
                                    <td>{usuario.email}</td>
                                    <td className='d-flex gap-1 justify-content-center'>
                                        <Link className="btn btn-warning" to={`editar/${usuario.ci}`}>Editar</Link>
                                        <input type="button" value="Eliminar" className='btn btn-danger' onClick={() => eliminarUsuario(usuario.ci)} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
