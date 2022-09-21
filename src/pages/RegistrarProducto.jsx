import { Link, useParams } from 'react-router-dom';
import { FormularioProducto } from '../components';


export const RegistrarProducto = () => {

    return (
        <div className='w-100 d-flex justify-content-center flex-column'>
            <h1 className='py-5 text-center fw-bold text-white bg-dark mb-0 d-block'>REGISTRAR PRODUCTO</h1>
            <div className='border shadow-lg bg-white rounded-3 h-auto d-flex align-items-center justify-content-center pb-4'>
                <FormularioProducto />
            </div>

        </div>
    );
}
