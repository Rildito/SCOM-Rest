import { Link, useParams } from 'react-router-dom';
import { FormularioMesa } from '../components';


export const RegistrarMesa = () => {

    return (
        <div className='w-100 vh-100 d-flex justify-content-center flex-column'>
            <h1 className='py-5 text-center fw-bold text-white bg-dark mb-0 d-block'>REGISTRAR MESA</h1>
            <div className='border shadow-lg bg-white rounded-3 h-100 d-flex align-items-center justify-content-center'>
                <FormularioMesa />
            </div>

        </div>
    );
}
