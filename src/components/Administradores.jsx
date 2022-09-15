import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UsuarioContext from '../context/UsuarioProvider'
import { obtenerEdad } from '../helpers/formatearFecha';

export const Administradores = () => {

    const { usuarios, eliminarUsuario, setErrores } = useContext(UsuarioContext);

    return (
        <>
            {
                usuarios?.map(usuario => (
                    <tr key={usuario.ci} className="align-middle">

                        <th scope='row'>{usuario.ci}</th>
                        <td>{usuario.nombreUsuario}</td>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.apellidoPaterno}</td>
                        <td>{usuario.apellidoMaterno}</td>
                        <td>{obtenerEdad(usuario.fechaNacimiento)}</td>
                        <td className='d-flex gap-2'>
                            <Link to={`/administrador/editar/${usuario.ci}&administrador`} className='btn btn-warning' onClick={() => setErrores([])}>Editar</Link>
                            <input type="button" name="eliminar" value="Eliminar" className='btn btn-danger' onClick={() => eliminarUsuario(usuario.ci, 'cliente')} />

                        </td>
                    </tr>
                ))
            }
        </>
    )
}