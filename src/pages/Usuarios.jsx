import { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UsuarioContext from '../context/UsuarioProvider';

export const Usuarios = () => {

    const navigate = useNavigate();
    const { usuarios, setTipoUsuario, tipoUsuario, eliminarUsuario, obtenerUsuarioGeneral } = useContext(UsuarioContext);

    const elegirTipoUsuario = (e) => {
        e.preventDefault();
        obtenerUsuarioGeneral(e.target.name);
        setTipoUsuario(e.target.name);
    };

    const registrarUsuario = () => {
        setTipoUsuario('');
        navigate('/administrador/registrar')
    };

    return (
        <>

            <h1 className='py-5 text-center fw-bold text-white bg-dark w-100'>ADMINISTRA TUS USUARIOS</h1>
            <div className="enlaces mb-2 d-flex justify-content-between mt-3 w-100 px-5">
                <div>
                    <input type="button" name="cliente" href="usuarioLista.php?usuario=chef" className="btn btn-primary me-sm-2 " value="IR LISTA DE CLIENTES" onClick={elegirTipoUsuario} />
                    <input type="button" name="chef" href="usuarioLista.php?usuario=chef" className="btn btn-secondary me-sm-2" value="IR LISTA DE CHEFS" onClick={elegirTipoUsuario} />
                    <input type="button" name="cajero" href="usuarioLista.php?usuario=chef" className="btn btn-success me-sm-2" value="IR LISTA DE CAJEROS" onClick={elegirTipoUsuario} />
                    <input type="button" name="camarero" href="usuarioLista.php?usuario=chef" className="btn btn-warning" value="IR LISTA DE CAMAREROS" onClick={elegirTipoUsuario} />
                </div>

                <div>
                    <input type="button" href="usuarioLista.php" name="general" className="btn btn-info" value="TODOS LOS USUARIOS" onClick={elegirTipoUsuario} />
                </div>
            </div>

            <div className='mt-3'>
                <table className="table bg-white">
                    <thead className='text-center table-dark'>
                        <tr>
                            <th scope="col">CI</th>
                            <th scope="col">nombreUsuario</th>
                            <th scope="col">nombre</th>
                            <th scope="col">apellido Paterno</th>
                            <th scope="col">apellido Materno</th>
                            <th scope="col">Edad</th>
                            {
                                (tipoUsuario === 'cliente' ? (
                                    <>
                                        <th scope="col">NIT</th>
                                        <th scope="col">Email</th>
                                    </>
                                ) : null)
                            }

                            {
                                (tipoUsuario === 'chef' ? (
                                    <>
                                        <th scope="col">FechaContratacion</th>
                                        <th scope="col">Salario</th>
                                        <th scope="col">Especialidad</th>
                                    </>
                                ) : null)
                            }

                            {
                                (tipoUsuario === 'camarero' || tipoUsuario === 'cajero' ? (
                                    <>
                                        <th scope="col">FechaContratacion</th>
                                        <th scope="col">Salario</th>
                                    </>
                                ) : null)
                            }

                            <th scope="col">Operaciones</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            usuarios?.map(usuario => (
                                <tr key={usuario.ci} className="align-middle">
                                    {
                                        (usuario.tipoUsuario === 'cliente' && tipoUsuario === 'cliente' ? (
                                            <>
                                                <th scope='row'>{usuario.ci}</th>
                                                <td>{usuario.nombreUsuario}</td>
                                                <td>{usuario.nombre}</td>
                                                <td>{usuario.apellidoPaterno}</td>
                                                <td>{usuario.apellidoMaterno}</td>
                                                <td>{usuario.edad}</td>
                                                <td>{usuario.nit}</td>
                                                <td>{usuario.email}</td>
                                                <td className='d-flex gap-2'>
                                                    <Link to={`/administrador/editar/${usuario.ci}&${usuario.tipoUsuario}`} className='btn btn-warning' >Editar</Link>
                                                    <input type="button" name="eliminar" value="Eliminar" className='btn btn-danger' onClick={() => eliminarUsuario(usuario.ci)} />
                                                    {/* tipoUsuario preguntar */}
                                                </td>
                                            </>
                                        ) : null)
                                    }

                                    {
                                        (tipoUsuario === 'chef' && usuario.tipoUsuario === 'chef' ? (
                                            <>
                                                <th scope='row'>{usuario.ci}</th>
                                                <td>{usuario.nombreUsuario}</td>
                                                <td>{usuario.nombre}</td>
                                                <td>{usuario.apellidoPaterno}</td>
                                                <td>{usuario.apellidoMaterno}</td>
                                                <td>{usuario.edad}</td>
                                                <td>{usuario.fechaContratacion}</td>
                                                <td>{usuario.salario}</td>
                                                <td>{usuario.especialidad}</td>
                                                <td className='d-flex gap-2'>
                                                    <Link to={`/administrador/editar/${usuario.ci}&${usuario.tipoUsuario}`} className='btn btn-warning' >Editar</Link>
                                                    <input type="button" name="eliminar" value="Eliminar" className='btn btn-danger' onClick={() => eliminarUsuario(usuario.ci)} />
                                                    {/* tipoUsuario preguntar */}
                                                </td>
                                            </>
                                        ) : null)
                                    }

                                    {
                                        (tipoUsuario === 'cajero' && usuario.tipoUsuario === 'cajero' ? (
                                            <>
                                                <th scope='row'>{usuario.ci}</th>
                                                <td>{usuario.nombreUsuario}</td>
                                                <td>{usuario.nombre}</td>
                                                <td>{usuario.apellidoPaterno}</td>
                                                <td>{usuario.apellidoMaterno}</td>
                                                <td>{usuario.edad}</td>
                                                <td>{usuario.fechaContratacion}</td>
                                                <td>{usuario.salario}</td>
                                                <td className='d-flex gap-2'>
                                                    <Link to={`/administrador/editar/${usuario.ci}&${usuario.tipoUsuario}`} className='btn btn-warning' >Editar</Link>
                                                    <input type="button" name="eliminar" value="Eliminar" className='btn btn-danger' onClick={() => eliminarUsuario(usuario.ci)} />
                                                    {/* tipoUsuario preguntar */}
                                                </td>
                                            </>
                                        ) : null)
                                    }
                                    {
                                        (tipoUsuario === 'camarero' && usuario.tipoUsuario === 'camarero') ?
                                            <>
                                                <th scope='row'>{usuario.ci}</th>
                                                <td>{usuario.nombreUsuario}</td>
                                                <td>{usuario.nombre}</td>
                                                <td>{usuario.apellidoPaterno}</td>
                                                <td>{usuario.apellidoMaterno}</td>
                                                <td>{usuario.edad}</td>
                                                <td>{usuario.fechaContratacion}</td>
                                                <td>{usuario.salario}</td>
                                                <td className='d-flex gap-2'>
                                                    <Link to={`/administrador/editar/${usuario.ci}&${usuario.tipoUsuario}`} className='btn btn-warning' >Editar</Link>
                                                    <input type="button" name="eliminar" value="Eliminar" className='btn btn-danger' onClick={() => eliminarUsuario(usuario.ci)} />
                                                    {/* tipoUsuario preguntar */}
                                                </td>
                                            </> : null
                                    }

                                    {
                                        (tipoUsuario === '' || tipoUsuario === 'general' ?
                                            <>
                                                <th scope='row'>{usuario.ci}</th>
                                                <td>{usuario.nombreUsuario}</td>
                                                <td>{usuario.nombre}</td>
                                                <td>{usuario.apellidoPaterno}</td>
                                                <td>{usuario.apellidoMaterno}</td>
                                                <td>{usuario.edad}</td>
                                                <td className='d-flex gap-2'>
                                                    <Link to={`/administrador/editar/${usuario.ci}&${usuario.tipoUsuario}`} className='btn btn-warning' >Editar</Link>
                                                    <input type="button" name="eliminar" value="Eliminar" className='btn btn-danger' onClick={() => eliminarUsuario(usuario.ci)} />
                                                    {/* tipoUsuario preguntar */}
                                                </td>
                                            </> : null)
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <button onClick={registrarUsuario} className='btn btn-primary'>¿Desea registrar un Usuario?</button>

        </>
    )
}
