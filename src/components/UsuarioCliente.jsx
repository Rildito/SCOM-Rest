import React from 'react'

export const UsuarioCliente = ({ usuario }) => {
    return (
        usuario.tipoUsuario === 'cliente' &&
        <tr key={usuario.ci} className="align-middle">
            <th scope='row'>{usuario.ci}</th>
            <td>{usuario.nombreUsuario}</td>
            <td>{usuario.nombre}</td>
            <td>{usuario.apellidoPaterno}</td>
            <td>{usuario.apellidoMaterno}</td>
            <td>{usuario.edad}</td>
            {
                (tipoUsuario === 'cliente' ? (
                    <>
                        <td>{usuario.nit}</td>
                        <td>{usuario.email}</td>
                    </>
                ) : null)
            }

            {
                (tipoUsuario === 'chef' ? (
                    <>
                        <td>{usuario.fechaContratacion}</td>
                        <td>{usuario.salario}</td>
                        <td>{usuario.especialidad}</td>
                    </>
                ) : null)
            }

            {
                (tipoUsuario === 'cajero' || tipoUsuario === 'camarero' ? (
                    <>
                        <td>{usuario.fechaContratacion}</td>
                        <td>{usuario.salario}</td>
                    </>
                ) : null)
            }

            <td className='d-flex gap-2'>
                <Link to={`/administrador/editar/${usuario.ci}&${usuario.tipoUsuario}`} className='btn btn-warning' >Editar</Link>
                <input type="button" name="eliminar" value="Eliminar" className='btn btn-danger' onClick={() => eliminarUsuario(usuario.ci)} />

            </td>
        </tr>
    )
}
