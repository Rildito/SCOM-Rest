
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Spinner } from '../components';
import ProductosContext from '../context/ProductosProvider';
import { capitalizarPrimeraLetra } from '../helpers/formatearTexto';

export const ProductosAdministrador = () => {

    const navigate = useNavigate();
    // const { usuarios, setTipoUsuario, tipoUsuario, cargando, setErrores, setUsuario } = useContext(UsuarioContext);

    const { productos, setTipoProducto, tipoProducto, cargando, setProducto, setErrores, eliminarProducto } = useContext(ProductosContext);

    const registrarProducto = () => {
        setErrores([]);
        navigate(`/administrador/productos/registrar`)
    };

    useEffect(() => {
        setProducto({});
    }, []);



    return (

        <>
            <h1 className='py-sm-5 py-3 text-center fw-bold text-white bg-dark w-100'>ADMINISTRA TUS PRODUCTOS</h1>

            <div className='w-100 container-md'>
                <div className="enlaces mb-2 d-md-flex justify-content-between mt-3 p-sm-0 px-1">
                    <div className='d-flex flex-md-row flex-column gap-md-0 gap-2'>

                        <input type="button" className={`btn ${tipoProducto === 'bebida' ? 'btn-primary' : 'btn-outline-primary'} me-sm-2 w-100 w-sm-auto `} value="BEBIDAS" onClick={() => setTipoProducto('bebida')} />


                        <input type="button" className={`btn ${tipoProducto === 'platillo' ? 'btn-secondary' : 'btn-outline-secondary'} me-sm-2 w-100 w-sm-auto`} value="PLATILLOS" onClick={() => setTipoProducto('platillo')} />

                    </div>


                    {/* <Link className='btn btn-primary mt-md-0 mt-2 w-md-auto w-100' to="imagenes" >Administrar Imagenes</Link> */}
                    <div className=''>
                        <input type="button" name="" className={`btn ${tipoProducto === '' ? 'btn-info' : 'btn-outline-info'} w-100 mt-md-0 mt-2`} value="TODOS LOS PRODUCTOS" onClick={() => setTipoProducto('')} />
                    </div>
                </div>

                {
                    cargando ? <Spinner /> : (
                        <>
                            <div className='mt-3 table-wrapper-scroll-y my-custom-scrollbar-usuario border'>
                                <table className="table bg-white">
                                    <thead className='text-center table-dark'>
                                        <tr>
                                            <th scope="col">Id Producto</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Precio</th>
                                            {
                                                (tipoProducto === '' && <th scope="col">Tipo de producto</th>)
                                            }
                                            <th scope="col">Estado</th>
                                            {
                                                (tipoProducto === 'platillo' && (
                                                    <>
                                                        <th scope="col">Stock</th>
                                                    </>
                                                ))
                                            }

                                            {
                                                (tipoProducto === 'bebida' && (
                                                    <>
                                                        <th scope="col">Grado Alcoholico</th>
                                                    </>
                                                ))
                                            }

                                            {
                                                (tipoProducto !== '' && <th scope="col">Operaciones</th>)
                                            }

                                        </tr>
                                    </thead>
                                    <tbody className='text-center'>

                                        {
                                            (tipoProducto === '' && (productos?.map(producto => (
                                                <tr key={producto.idproducto} className="align-middle">
                                                    <th scope='row'>{producto.idproducto}</th>
                                                    <td>{capitalizarPrimeraLetra(producto.nombre)}</td>
                                                    <td>{producto.precio} Bs.</td>
                                                    <td>{producto.tipoProducto}</td>
                                                    <td>{producto.estado}</td>
                                                </tr>
                                            )
                                            )))
                                        }
                                        {
                                            (tipoProducto === 'platillo' && (productos?.map(producto => {

                                                if (producto.estado === 'habilitado') return (
                                                    <tr key={producto.idproducto} className="align-middle">
                                                        <th scope='row'>{producto.idproducto}</th>
                                                        <td>{capitalizarPrimeraLetra(producto.nombre)}</td>
                                                        <td>{producto.precio} Bs.</td>
                                                        <td>{producto.estado}</td>
                                                        <td>{producto.stock}</td>
                                                        <td className='d-flex gap-2 justify-content-center'>
                                                            <Link to={`/administrador/productos/editar/${producto.idproducto}&platillo`} className='btn btn-warning' onClick={() => setErrores([])}>Editar</Link>
                                                            <input type="button" name="eliminar" value="Eliminar" className='btn btn-danger' onClick={() => eliminarProducto(producto.idproducto, 'platillo')} />

                                                        </td>
                                                    </tr>
                                                )
                                            })))
                                        }
                                        {
                                            (tipoProducto === 'bebida' && (productos?.map(producto => {
                                                if (producto.estado === 'habilitado') return (
                                                    <tr key={producto.idproducto} className="align-middle">
                                                        <th scope='row'>{producto.idproducto}</th>
                                                        <td>{capitalizarPrimeraLetra(producto.nombre)}</td>
                                                        <td>{producto.precio} Bs.</td>
                                                        <td>{producto.estado}</td>
                                                        <td>{producto.gradoAlcoholico}</td>
                                                        <td className='d-flex gap-2 justify-content-center'>
                                                            <Link to={`/administrador/productos/editar/${producto.idproducto}&bebida`} className='btn btn-warning' onClick={() => setErrores([])}>Editar</Link>
                                                            <input type="button" name="eliminar" value="Eliminar" className='btn btn-danger' onClick={() => eliminarProducto(producto.idproducto, 'bebida')} />

                                                        </td>
                                                    </tr>
                                                )
                                            })))
                                        }


                                    </tbody>
                                </table>
                            </div>

                            <div className='mt-3 d-flex justify-content-between flex-sm-row flex-column'>
                                <div>
                                    {
                                        tipoProducto !== '' && (
                                            <button onClick={registrarProducto} className='btn btn-primary mt-1 mb-3 w-sm-auto w-100'>Registrar {tipoProducto}</button>
                                        )
                                    }

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