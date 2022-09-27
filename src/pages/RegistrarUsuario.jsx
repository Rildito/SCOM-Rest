
import { useParams } from 'react-router-dom';
import { FormularioUsuario } from '../components/FormularioUsuario';

export const RegistrarUsuario = () => {

    const { usuario } = useParams();
    
    return (
        <>
            <h1 className='py-5 text-center fw-bold text-white bg-dark w-100 '>REGISTRAR {usuario.toUpperCase()}</h1>
            <div className='w-md-50 w-75 p-md-4 p-3 border shadow-lg bg-white rounded-3 my-3'>
                <FormularioUsuario />
            </div>
        </>
    );
}
