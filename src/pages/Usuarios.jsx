
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Administradores, Alerta, Cajeros, Camareros, Chefs, Clientes, Spinner } from '../components';
import UsuarioContext from '../context/UsuarioProvider';
import { obtenerEdad } from '../helpers/formatearFecha';

export const Usuarios = () => {

    const navigate = useNavigate();
    const { usuarios, setTipoUsuario, tipoUsuario, cargando, alerta, setErrores } = useContext(UsuarioContext);

    const elegirTipoUsuario = (e) => {
        e.preventDefault();
        setTipoUsuario(e.target.name);
    };

    const registrarUsuario = () => {
        setErrores([]);
        navigate(`/administrador/registrar/${tipoUsuario}`)
    };

    const { msg, tipoAlerta } = alerta

    return (

        <>
            {msg && <Alerta mensaje={msg} tipoAlerta={tipoAlerta} />}
            <h1 className='py-sm-5 py-3 text-center fw-bold text-white bg-dark w-100'>ADMINISTRA TUS USUARIOS</h1>

            <div className='w-100 container-md'>
                <div className="enlaces mb-2 d-md-flex justify-content-between mt-3 p-sm-0 px-1">
                    <div className='d-flex flex-md-row flex-column gap-md-0 gap-2'>

                        <input type="button" name="cliente" href="usuarioLista.php?usuario=chef" className={`btn ${tipoUsuario === 'cliente' ? 'btn-primary' : 'btn-outline-primary'} me-sm-2 w-100 w-sm-auto `} value="CLIENTES" onClick={elegirTipoUsuario} />


                        <input type="button" name="chef" href="usuarioLista.php?usuario=chef" className={`btn ${tipoUsuario === 'chef' ? 'btn-secondary' : 'btn-outline-secondary'} me-sm-2 w-100 w-sm-auto`} value="CHEFS" onClick={elegirTipoUsuario} />


                        <input type="button" name="cajero" href="usuarioLista.php?usuario=chef" className={`btn ${tipoUsuario === 'cajero' ? 'btn-success' : 'btn-outline-success'} me-sm-2 w-100 w-sm-auto`} value="CAJEROS" onClick={elegirTipoUsuario} />


                        <input type="button" name="camarero" href="usuarioLista.php?usuario=chef" className={`btn ${tipoUsuario === 'camarero' ? 'btn-warning' : 'btn-outline-warning'} me-sm-2 w-100 w-sm-auto`} value="CAMAREROS" onClick={elegirTipoUsuario} />

                        <input type="button" name="administrador" href="usuarioLista.php?usuario=administrador" className={`btn ${tipoUsuario === 'administrador' ? 'btn-secondary' : 'btn-outline-secondary'} me-sm-2 w-100 w-sm-auto`} value="ADMINISTRADORES" onClick={elegirTipoUsuario} />
                    </div>

                    <div className=''>
                        <input type="button" href="usuarioLista.php" name="" className={`btn ${tipoUsuario === '' ? 'btn-info' : 'btn-outline-info'} w-100 mt-md-0 mt-2`} value="TODOS LOS USUARIOS" onClick={elegirTipoUsuario} />
                    </div>
                </div>

                {
                    cargando ? <Spinner /> : (
                        <>
                            <div className='mt-3 table-wrapper-scroll-y my-custom-scrollbar-usuario border'>
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
                                                (tipoUsuario === 'cliente' && (
                                                    <>
                                                        <th scope="col">NIT</th>
                                                        <th scope="col">Email</th>
                                                    </>
                                                ))
                                            }

                                            {
                                                (tipoUsuario === 'chef' && (
                                                    <>
                                                        <th scope="col">FechaContratacion</th>
                                                        <th scope="col">Salario</th>
                                                        <th scope="col">Especialidad</th>
                                                    </>
                                                ))
                                            }

                                            {
                                                (tipoUsuario === 'camarero' || tipoUsuario === 'cajero' ? (
                                                    <>
                                                        <th scope="col">FechaContratacion</th>
                                                        <th scope="col">Salario</th>
                                                    </>
                                                ) : null)
                                            }

                                            {
                                                (tipoUsuario !== '' && <th scope="col">Operaciones</th>)
                                            }

                                        </tr>
                                    </thead>
                                    <tbody className='text-center'>
                                        {
                                            (tipoUsuario === 'cliente' && <Clientes />)

                                        }

                                        {
                                            (tipoUsuario === 'cajero' && <Cajeros />)

                                        }
                                        {
                                            (tipoUsuario === 'camarero' && <Camareros />)

                                        }

                                        {
                                            (tipoUsuario === 'chef' && <Chefs />)
                                        }

                                        {
                                            (tipoUsuario === 'administrador' && <Administradores />)
                                        }

                                        {
                                            (tipoUsuario === '' && (usuarios?.map(usuario => (
                                                <tr key={usuario.ci} className="align-middle">
                                                    <th scope='row'>{usuario.ci}</th>
                                                    <td>{usuario.nombreUsuario}</td>
                                                    <td>{usuario.nombre}</td>
                                                    <td>{usuario.apellidoPaterno}</td>
                                                    <td>{usuario.apellidoMaterno}</td>
                                                    <td>{obtenerEdad(usuario.fechaNacimiento)}</td>
                                                </tr>
                                            ))))
                                        }


                                    </tbody>
                                </table>
                            </div>

                            <div className='mt-3 d-flex justify-content-between flex-sm-row flex-column'>
                                <div>
                                    <h5 className='text-sm-start'>¿Desea registrar un usuario?</h5>
                                    <button onClick={registrarUsuario} className='btn btn-primary mt-1 mb-3 w-sm-auto w-100'>Registrar Usuario</button>
                                </div>
                                <div>
                                    <Link to={"/administrador"} className="btn btn-secondary mb-sm-0 mb-3 w-100">Volver principal</Link>
                                </div>
                            </div>
                        </>
                    )
                }

            </div>
        </>
    )
}
