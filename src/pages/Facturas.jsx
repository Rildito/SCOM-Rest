import { useEffect } from 'react';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../components';
import UsuarioContext from '../context/UsuarioProvider';


export const Facturas = () => {

    const { cargando, obtenerFacturas, facturas } = useContext(UsuarioContext);

    const navigate = useNavigate();

    const volverPantalla = () => {
        navigate('/administrador');
    };

    useEffect(()=>{
        obtenerFacturas();
    },[])

    if (cargando) return (
        <>
            <Spinner />
            <p className='text-center'>Obteniendo facturas de usuarios...</p>
        </>
    )
    return (
        <>
            <h1 className="text-center w-100 bg-primary bg-dark text-white p-5 fw-bolder">
                FACTURAS
            </h1>
            <button className='btn btn-success mt-2 w-md-auto w-100' onClick={volverPantalla}>Volver a pantalla principal</button>
            <div className='mt-3 table-wrapper-scroll-y my-custom-scrollbar-usuario border w-md-75 w-100'>
                <table className="table bg-white">
                    <thead className='text-center table-dark'>
                        <tr>
                            <th scope="col">Cod factura</th>
                            <th scope="col">Ci Cajero</th>
                            <th scope="col">Ci Cliente</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>

                        {
                            facturas?.map(factura => (
                                <tr key={factura.codfactura} className="align-middle">
                                    <th scope='row'>{factura.codfactura}</th>
                                    <td>{factura.ciCajero}</td>
                                    <td>{factura.ciCliente}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}
