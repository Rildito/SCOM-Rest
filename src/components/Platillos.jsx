import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProductosContext from '../context/ProductosProvider';
import { obtenerEdad } from '../helpers/formatearFecha';

export const Platillos = () => {

    const { productos, eliminarProducto, setErrores } = useContext(ProductosContext);

    return (
        <>
            {
                usuarios?.map(usuario => (
                    <tr key={usuario.ci} className="align-middle">

                        <th scope='row'>{usuario.ci}</th>
                        <td>{usuario.nombreUsuario}</td>
                        <td>{usuario.nombre} {usuario.apellidoPaterno} {usuario.apellidoMaterno}</td>
                        <td>{obtenerEdad(usuario.fechaNacimiento)}</td>
                        <td>{usuario.NIT}</td>
                        <td>{usuario.email}</td>
                        <td className='d-flex gap-2 justify-content-center'>
                            <Link to={`/administrador/editar/${usuario.ci}&cliente`} className='btn btn-warning' onClick={() => setErrores([])}>Editar</Link>
                            <input type="button" name="eliminar" value="Eliminar" className='btn btn-danger' onClick={() => eliminarUsuario(usuario.ci, 'cliente')} />

                        </td>
                    </tr>
                ))
            }
        </>
    )
}
