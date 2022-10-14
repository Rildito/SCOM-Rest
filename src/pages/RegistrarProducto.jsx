import { useContext } from 'react';
import { FormularioProducto } from '../components';
import ProductosContext from '../context/ProductosProvider';


export const RegistrarProducto = () => {

    return (
        <div className='w-100 d-flex justify-content-center flex-column vh-100'>
            <h1 className='py-5 text-center fw-bold text-white bg-dark mb-0 d-block'>REGISTRAR PRODUCTO</h1>
            <div className='border shadow-lg bg-white rounded-3 d-flex align-items-center justify-content-center h-100'>
                <FormularioProducto />
            </div>

        </div>
    );
}
