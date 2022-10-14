
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FormularioUsuario } from '../components/FormularioUsuario';
import AuthContext from '../context/AuthProvider';

export const RegistrarUsuario = () => {

    const { usuario } = useParams();
    const { auth } = useContext(AuthContext);
    return (
        <>
            <h1 className='py-5 text-center fw-bold text-white bg-dark w-100 '>
                {
                    auth.ci
                        ? (
                            //{`REGISTRAR ${usuario.toUpperCase()}`}
                            `REGISTRAR ${usuario.toUpperCase()}`
                        )
                        : 'REGISTRATE'
                }
            </h1>
            <div className='w-md-50 w-100 p-md-4 p-3 border shadow-lg bg-white rounded-3 my-3'>
                <FormularioUsuario />
            </div>
        </>
    );
}
