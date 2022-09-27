import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Alerta, FormularioProducto, Spinner } from '../components';
import ProductosContext from '../context/ProductosProvider';


export const EditarProducto = () => {

    const { alerta, obtenerProducto, cargando } = useContext(ProductosContext);
    const { idproducto, tipoProducto } = useParams();
    const { msg, tipoAlerta } = alerta;

    useEffect(() => {
        if (tipoProducto === 'platillo') {
            obtenerProducto(idproducto, 'platillo');
        }

        if (tipoProducto === 'bebida') {
            obtenerProducto(ci, 'bebida')
        }

    }, [tipoProducto]);

    if (cargando) return <Spinner />

    return (
        <div className='w-100 d-flex justify-content-center flex-column vh-100'>
            {msg && <Alerta mensaje={msg} tipoAlerta={tipoAlerta} />}
            <h1 className='py-5 text-center fw-bold text-white bg-dark mb-0 d-block'>EDITAR PRODUCTO</h1>
            <div className='border shadow-lg bg-white rounded-3 d-flex align-items-center justify-content-center h-100'>
                <FormularioProducto />
            </div>

        </div>
    );
}
