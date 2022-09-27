import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductosContext from '../context/ProductosProvider';
import { Producto, ModalProducto } from '.';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductosPreview = ({ enlace }) => {

    const { productos } = useContext(ProductosContext);
    const navigate = useNavigate();
    const handleClick = () => {
        window.scrollTo({
            top: 0
        });
        navigate('productos');
    };

    return (
        <>
            <h1 className='text-primary fw-semibold text-center mb-5' ref={enlace}>NUESTROS PRODUCTOS</h1>
            <div className='row d-flex justify-content-center gap-4 w-100 flex-wrap'>
                {
                    productos.slice(0, 3).map(producto => (
                        <Producto key={producto.idproducto} producto={producto} />
                    ))
                }
            </div>
            <button className='btn btn-secondary w-lg-25 w-md-50 w-75 mt-4' onClick={handleClick}>VER MAS</button>
            <ModalProducto />
            <ToastContainer />
        </>
    )
}
