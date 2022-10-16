import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductosContext from '../context/ProductosProvider';
import { Producto, ModalProducto, Spinner } from '.';

export const ProductosPreview = ({ enlace }) => {

    const { productos, cargando } = useContext(ProductosContext);
    const navigate = useNavigate();
    const handleClick = () => {
        window.scrollTo({
            top: 0
        });
        navigate('productos');
    };

    return (
        <div className='bg-white-gradient w-100 d-flex flex-column align-items-center shadow px-0 mt-3'>
            <h1 className='fw-bold text-center my-4 ' ref={enlace}>NUESTROS PRODUCTOS</h1>

            {
                cargando ? <>
                
                    <Spinner sinAltura={true}/>
                    <p className='text-center'>Obteniendo productos...</p>
               
                </> : <>
                    <div className='row d-flex justify-content-center gap-4 w-100 flex-wrap'>
                        {
                            productos.slice(0, 3).map(producto => (
                                <Producto key={producto.idproducto} producto={producto} />
                            ))
                        }
                    </div>
                    <button className='btn btn-success w-lg-25 w-md-50 w-75 my-4' onClick={handleClick}>VER MAS</button>
                </>
            }

            <ModalProducto />
        </div>
    )
}
