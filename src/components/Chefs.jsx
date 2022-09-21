import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UsuarioContext from '../context/UsuarioProvider'
import { obtenerEdad } from '../helpers/formatearFecha';

export const Chefs = () => {

    const { usuarios, eliminarUsuario, setErrores } = useContext(UsuarioContext);
    return (
        <>
            {
                usuarios?.map(usuario => (
                    <tr key={usuario.ci} className="align-middle">

                        <th scope='row'>{usuario.ci}</th>
                        <td>{usuario.nombreUsuario}</td>
                        <td>{usuario.nombre} {usuario.apellidoPaterno} {usuario.apellidoMaterno}</td>
                        <td>{obtenerEdad(usuario.fechaNacimiento)}</td>
                        <td>{usuario.fechaContratacion}</td>
                        <td>{usuario.salario} Bs.</td>
                        <td>{usuario.especialidad}</td>
                        <td className='d-flex gap-2 justify-content-center'>
                            <Link to={`/administrador/editar/${usuario.ci}&chef`} className='btn btn-warning' onClick={() => setErrores([])}>Editar</Link>
                            <input type="button" name="eliminar" value="Eliminar" className='btn btn-danger' onClick={() => eliminarUsuario(usuario.ci, 'cajero')} />

                        </td>
                    </tr>
                ))
            }
        </>
    )
}