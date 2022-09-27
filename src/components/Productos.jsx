import React from 'react'
import { useContext } from 'react'
import ProductosContext from '../context/ProductosProvider'
import { Producto } from '../components'
export const Productos = () => {

    const { productos } = useContext(ProductosContext);

    return (
        <>
            {
                productos.map(producto => (
                    <Producto key={producto.idproducto} producto={producto} />
                ))
            }

        </>
    )
}
