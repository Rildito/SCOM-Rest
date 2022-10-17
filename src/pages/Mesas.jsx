import { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Spinner } from '../components';
import IngredientesContext from '../context/IngredientesProvider';

export const Mesas = () => {

    // const { ingredientes, eliminarIngrediente } = useContext(IngredienteContext);
    const navigate = useNavigate();
    const { mesas, cargando, eliminarMesa, obtenerMesas } = useContext(IngredientesContext);

    const registrarMesa = () => {
        navigate('/administrador/mesas/registrar')
    };

    // useEffect(()=>{
    //     obtenerMesas();
    // },[])

    // if (cargando) return <>
    //     <Spinner />;
    //     <p className='text-center'>Obteniendo mesas...</p>
    // </>
    return (
        <>

            <h1 className='py-5 text-center fw-bold text-white bg-dark w-100 '>ADMINISTRA TUS MESAS</h1>
            <div className='w-100 container d-flex justify-content-center flex-column align-items-center'>
                {
                    cargando ? <Spinner /> : (
                        <div className='mt-3 table-wrapper-scroll-y my-custom-scrollbar-usuario w-100'>
                            <table className="table bg-white border">
                                <thead className='text-center table-dark'>
                                    <tr>
                                        <th scope="col">NroMesa</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Ci Camarero</th>
                                        <th scope="col">Id Pedido</th>
                                        <th scope="col">Operaciones</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    {
                                        mesas?.map(mesa => (
                                            <tr key={mesa.nroMesa} className="align-middle">
                                                <td>{mesa.nroMesa}</td>
                                                <td>{mesa.estado}</td>
                                                <td>{mesa.ciCamarero}</td>
                                                <td>{mesa.idpedido}</td>
                                                <td className='d-flex gap-1 justify-content-center'>
                                                    <Link className="btn btn-warning" to={`editar/${mesa.nroMesa}`}>Editar</Link>
                                                    <input type="button" value="Eliminar" className='btn btn-danger' onClick={() => eliminarMesa(mesa.nroMesa)} />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                }

                <div className='mt-3 d-flex justify-content-between w-100 flex-sm-row flex-column'>
                    <div>
                        <h5>¿Desea registrar una Mesa?</h5>
                        <button onClick={registrarMesa} className='btn btn-primary mt-1 mb-3 w-sm-auto w-100'>Registrar Mesa</button>
                    </div>
                    <div>
                        <Link to={"/administrador"} className="btn btn-secondary w-100">Volver principal</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
