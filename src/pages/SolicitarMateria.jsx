import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import IngredientesContext from '../context/IngredientesProvider';

export const SolicitarMateria = () => {

    const { ingredientes, pedirMateria, cargando } = useContext(IngredientesContext);

    const navigate = useNavigate();

    const pedir = () => {
        navigate('/administrador/ingredientes/registrar')
    };


    if (cargando) return <Spinner />;

    return (
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
                                        <td className='fw-bold'>{ingre.cantidad}</td>
                                        <td>{ingre.tipo}</td>
                                        <td className='d-flex gap-1 justify-content-center'>
                                            <input type="button" value="Pedir" className='btn btn-primary' onClick={() => pedirMateria(ingre.codingrediente)} />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>)

}


