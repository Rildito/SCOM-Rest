import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../components';
import IngredientesContext from '../context/IngredientesProvider';

export const Solicitudes = () => {

    const { suministrar, obtenerSolicitudes, solicitudes, cargando } = useContext(IngredientesContext);

    const navigate = useNavigate();

    const volverPantalla = () => {
        navigate('/administrador');
    };

    const suministrarIngrediente = (codIngrediente) => {
        suministrar(codIngrediente);
    };

    useEffect(() => {
        obtenerSolicitudes();
    }, [])

    if (cargando) return <>
        <Spinner />
        <p className='text-center'>Obteniendo solicitudes...</p>
    </>
    return (
        <>
            <h1 className="text-center w-100 bg-primary bg-dark text-white p-5 fw-bolder">
                SOLICITUDES DE MATERIA PRIMA
            </h1>
            <button className='btn btn-success mt-2 w-md-auto w-100' onClick={volverPantalla}>Volver a pantalla principal</button>
            <div className='mt-3 table-wrapper-scroll-y my-custom-scrollbar-usuario border w-md-75 w-100'>
                <table className="table bg-white">
                    <thead className='text-center table-dark'>
                        <tr>
                            <th scope="col">Cod Ingrediente</th>
                            <th scope="col">Nombre de Ingrediente</th>
                            <th scope="col">Tipo de ingrediente</th>
                            <th scope="col">SUMINISTRAR</th>

                        </tr>
                    </thead>
                    <tbody className='text-center'>

                        {
                            solicitudes?.map(ingrediente => {
                                if (ingrediente.cantidad < 50) return (
                                    <tr key={ingrediente.codingrediente} className="align-middle">
                                        <th scope='row'>{ingrediente.codingrediente}</th>
                                        <td>{ingrediente.nombre}</td>
                                        <td>{ingrediente.tipo}</td>
                                        <td><button className='btn btn-primary' onClick={() => suministrarIngrediente(ingrediente.codingrediente)}>SUMINISTRAR</button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}
