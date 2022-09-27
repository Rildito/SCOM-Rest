import { useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Alerta, Spinner } from '../components';
import IngredientesContext from '../context/IngredientesProvider';

export const SolicitarMateria = () => {

    const { ingredientes, pedirMateria, alerta, cargando } = useContext(IngredientesContext);

    const navigate = useNavigate();

    const pedir = () => {
        navigate('/administrador/ingredientes/registrar')
    };

    const { msg, tipoAlerta } = alerta;
    // if (cargando) return <Spinner />;

    return (
        <>
            {
                msg && <Alerta mensaje={msg} tipoAlerta={tipoAlerta} />
            }

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
                <div className='mt-3 d-flex justify-content-between w-100 flex-sm-row flex-column'>
                    <div>
                        <Link to={"/chef"} className="btn btn-secondary w-100">Volver a pedidos</Link>
                    </div>
                </div>
            </div>
        </>)

}


