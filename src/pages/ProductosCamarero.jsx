import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ModalProducto, Producto } from '../components';
import ProductosContext from '../context/ProductosProvider';
import AuthContext from '../context/AuthProvider';

export const ProductosCamarero = () => {

    const navigate = useNavigate();

    const { productos } = useContext(ProductosContext);
    const { auth } = useContext(AuthContext);
    const { idPedido } = useParams();

    const handleClick = () => {
        navigate(`/camarero/${idPedido}`);
    };

    useEffect(() => {

    }, [])

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className='d-flex justify-content-md-around w-100 mb-3 gap-2 flex-md-row flex-column'>
                <h1 className='text-primary fw-semibold text-center w-100'>NUESTROS PRODUCTOS</h1>
                <button className='btn btn-primary flex-shrink-1' onClick={handleClick}>IR A PEDIDO</button>
            </div>

            <div className='row d-flex justify-content-center gap-4 w-100 flex-wrap mb-3'>
                <Producto />
                <Producto />
                <Producto />
                <Producto />
                <Producto />
            </div>
            <ModalProducto />
        </div >
    )
}
