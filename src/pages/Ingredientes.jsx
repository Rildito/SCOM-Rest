import { useNavigate, Link } from 'react-router-dom';

export const Ingredientes = () => {

    // const { ingredientes, eliminarIngrediente } = useContext(IngredienteContext);
    const navigate = useNavigate();
    const ingredientes = [];

    const registrarIngrediente = () => {
        navigate('/administrador/ingredientes/registrar')
    };

    return (
        <>
            <h1 className='py-5 text-center fw-bold text-white bg-dark w-100 '>ADMINISTRA TUS INGREDIENTES</h1>
            <div className='w-100 container'>
                <div className='mt-3 table-wrapper-scroll-y my-custom-scrollbar-usuario w-100'>
                    <table className="table bg-white border">
                        <thead className='text-center table-dark'>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Unidad</th>
                                <th scope="col">Costo</th>
                                <th scope="col">Operaciones</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                ingredientes?.map(ingre => (
                                    <tr key={ingre.codIngrediente} className="align-middle">
                                        <td>{ingre.Nombre}</td>
                                        <td>{ingre.Categoria}</td>
                                        <td>{ingre.Unidad}</td>
                                        <td>{ingre.Costo}</td>
                                        <td className='d-flex gap-1 justify-content-center'>
                                            <Link className="btn btn-warning" to={`editar/${ingre.Nombre}`}>Editar</Link>
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
                        <h5>¿Desea registrar un Ingrediente?</h5>
                        <button onClick={registrarIngrediente} className='btn btn-primary mt-1 mb-3 w-sm-auto w-100'>Registrar Ingrediente</button>
                    </div>
                    <div>
                        <Link to={"/administrador"} className="btn btn-secondary">Volver principal</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
