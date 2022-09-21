import { useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Spinner } from '../components';
import ProductosContext from '../context/ProductosProvider';

export const Ingredientes = () => {

    const { ingredientes, eliminarIngrediente, obtenerIngredientes, cargando } = useContext(ProductosContext);

    const navigate = useNavigate();

    const registrarIngrediente = () => {
        navigate('/administrador/ingredientes/registrar')
    };

    useEffect(() => {
        obtenerIngredientes();
    }, [])

    return (
        <>
            {/* {msg && <Alerta mensaje={msg} tipoAlerta={tipoAlerta} />} */}
            <h1 className='py-5 text-center fw-bold text-white bg-dark w-100 '>ADMINISTRA TUS INGREDIENTES</h1>
            {
                cargando ? <Spinner /> : (
                    <>
                        <div className='w-100 container'>
                            <div className='mt-3 table-wrapper-scroll-y my-custom-scrollbar w-100 border'>
                                <table className="table bg-white">
                                    <thead className='text-center table-dark'>
                                        <tr>
                                            <th scope="col">CodIngrediente</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">tipo</th>
                                            <th scope="col">Operaciones</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-center'>
                                        {
                                            ingredientes?.map(ingre => (
                                                <tr key={ingre.codingrediente} className="align-middle">
                                                    <td>{ingre.codingrediente}</td>
                                                    <td>{ingre.nombre}</td>
                                                    <td>{ingre.cantidad}</td>
                                                    <td>{ingre.tipo}</td>
                                                    <td className='d-flex gap-1 justify-content-center'>
                                                        <Link className="btn btn-warning" to={`editar/${ingre.codingrediente}`}>Editar</Link>
                                                        <input type="button" value="Eliminar" className='btn btn-danger' onClick={() => eliminarIngrediente(ingre.id)} />
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className='mt-3 d-flex justify-content-between w-100 flex-sm-row flex-column'>
                                <div>
                                    <h5>¿Desea registrar un Ingrediente?</h5>
                                    <button onClick={registrarIngrediente} className='btn btn-primary mt-1 mb-3 w-sm-auto w-100'>Registrar Ingrediente</button>
                                </div>
                                <div>
                                    <Link to={"/administrador"} className="btn btn-secondary w-100">Volver principal</Link>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

        </>
    )
}
