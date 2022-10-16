import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import IngredientesContext from '../context/IngredientesProvider';

export const Solicitudes = () => {

    const { suministrar } = useContext(IngredientesContext);

    const navigate = useNavigate();

    const volverPantalla = () => {
        navigate('/administrador');
    };

    const ingredientesSolicitados = [
        {
            codIngrediente: 1,
            nombre: 'Chuño'
        }
    ]
    return (
        <>
            <h1 className="text-center w-100 bg-primary bg-dark text-white p-5 fw-bolder">
                SOLICITUDES DE MATERIA PRIMA
            </h1>
            <button className='btn btn-success mt-2 w-md-auto w-100' onClick={volverPantalla}>Volver a pantalla principal</button>
            <div className='mt-3 table-wrapper-scroll-y my-custom-scrollbar-usuario border w-100'>
                <table className="table bg-white">
                    <thead className='text-center table-dark'>
                        <tr>
                            <th scope="col">Cod Ingrediente</th>
                            <th scope="col">Nombre de Ingrediente</th>
                            <th scope="col">SUMINISTRAR</th>

                        </tr>
                    </thead>
                    <tbody className='text-center'>

                        {
                            ingredientesSolicitados?.map(ingrediente => (
                                <tr key={ingrediente.codIngrediente} className="align-middle">
                                    <th scope='row'>{ingrediente.codIngrediente}</th>
                                    <td>{ingrediente.nombre}</td>
                                    <td><button className='btn btn-primary' onClick={()=>suministrar(ingrediente.codIngrediente)}>SUMINISTRAR</button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}
