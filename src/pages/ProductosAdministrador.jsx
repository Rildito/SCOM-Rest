import { useNavigate, Link } from 'react-router-dom';

export const ProductosAdministrador = () => {

    // const { ingredientes, eliminarIngrediente } = useContext(IngredienteContext);
    const navigate = useNavigate();
    const mesas = [];

    const registrarProducto = () => {
        navigate('/administrador/productos/registrar')
    };

    return (
        <>
            <h1 className='py-5 text-center fw-bold text-white bg-dark w-100 '>ADMINISTRA TUS PRODUCTOS</h1>
            <div className='w-100 container d-flex justify-content-center flex-column align-items-center'>
                <div className='mt-3 table-wrapper-scroll-y my-custom-scrollbar-usuario w-75'>
                    <table className="table bg-white border">
                        <thead className='text-center table-dark'>
                            <tr>
                                <th scope="col">NroMesa</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Color</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                mesas?.map(mesa => (
                                    <tr key={mesa.nroMesa} className="align-middle">
                                        <td>{mesa.nroMesa}</td>
                                        <td>{mesa.estado}</td>
                                        <td>{mesa.color}</td>
                                        <td className='d-flex gap-1 justify-content-center'>
                                            <Link className="btn btn-warning" to={`editar/${mesa.Nombre}`}>Editar</Link>
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
                        <h5>¿Desea registrar un producto?</h5>
                        <button onClick={registrarProducto} className='btn btn-primary mt-1 mb-3 w-sm-auto w-100'>Registrar Mesa</button>
                    </div>
                    <div>
                        <Link to={"/administrador"} className="btn btn-secondary w-100">Volver principal</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
