import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Spinner } from '../components';
import AuthContext from '../context/AuthProvider';
import IngredientesContext from '../context/IngredientesProvider';

export const SolicitarMateria = () => {

    const { ingredientes, pedirMateria, cargando2, cargando } = useContext(IngredientesContext);

    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);

    const pedir = (codIngrediente) => {
        // navigate('/administrador/ingredientes/registrar')
        pedirMateria(codIngrediente, auth.ci)
    };


    if (cargando) return <>
        <Spinner />;
        <p className='text-center'>Obteniendo ingredientes...</p>
    </>

    return (
        <>
            <div className='w-100 container'>
                <h3 className='text-center text-primary fw-bold fs-1'>PEDIR MATERIA PRIMA</h3>
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
                                ingredientes?.map(ingre => {
                                    if (ingre.cantidad <= 20) {
                                        return (
                                            <tr key={ingre.codingrediente} className="align-middle">
                                                <td>{ingre.codingrediente}</td>
                                                <td>{ingre.nombre}</td>
                                                <td className='fw-bold'>{ingre.cantidad}</td>
                                                <td>{ingre.tipo}</td>
                                                <td className='d-flex gap-1 justify-content-center'>
                                                    <input type="button" value="Pedir" className='btn btn-primary' onClick={() => pedir(ingre.codingrediente)} disabled={cargando2 ? true : false} />
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>)

}


