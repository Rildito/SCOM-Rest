import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import ProductosContext from '../context/ProductosProvider';
import { Producto, ModalProducto } from './';


export const Productos = () => {

    const { productos } = useContext(ProductosContext);

    return (
        <>
            <h1 className='text-primary fw-semibold text-center mb-5'>NUESTROS PRODUCTOS</h1>
            <div className='row d-flex justify-content-center gap-4 w-100'>
                <Producto />
                <Producto />
                <Producto />
                <Producto />
                <Producto />
                <Producto />
            </div>
            <Link to="" className='btn btn-secondary w-lg-25 w-md-50 w-75 mt-3'>VER MAS</Link>
            <ModalProducto />
        </>
    )
}
