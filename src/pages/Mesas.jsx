import { useNavigate, Link } from 'react-router-dom';

export const Mesas = () => {

    // const { ingredientes, eliminarIngrediente } = useContext(IngredienteContext);
    const navigate = useNavigate();
    const mesas = [];

    const registrarMesa = () => {
        navigate('/administrador/mesas/registrar')
    };

    return (
        <>
            <h1 className='py-5 text-center fw-bold text-white bg-dark w-100 '>ADMINISTRA TUS MESAS</h1>
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
                <div className='mt-3 d-flex justify-content-between w-100 px-5'>
                    <div>
                        <h5>¿Desea registrar una Mesa?</h5>
                        <button onClick={registrarMesa} className='btn btn-primary mt-1 mb-3 w-sm-auto w-100'>Registrar Mesa</button>
                    </div>
                    <div>
                        <Link to={"/administrador"} className="btn btn-secondary">Volver principal</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
