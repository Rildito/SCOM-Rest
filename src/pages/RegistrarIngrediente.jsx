import { useContext } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FormularioIngrediente } from '../components';
import ProductosContext from '../context/ProductosProvider';


export const RegistrarIngrediente = () => {
    const { codingrediente } = useParams();
    const { obtenerIngrediente } = useContext(ProductosContext);
    useEffect(() => {
        if (codingrediente) {
            obtenerIngrediente(codingrediente);
        }
    }, [])
    return (
        <div className='w-100 vh-100 d-flex justify-content-center flex-column'>
            <h1 className='py-5 text-center fw-bold text-white bg-dark mb-0 d-block'>{codingrediente ? 'EDITAR' : 'REGISTRAR'} INGREDIENTE</h1>
            <div className='border shadow-lg bg-white rounded-3 h-100 d-flex align-items-center justify-content-center'>
                <FormularioIngrediente />
            </div>

        </div>
    );
}
