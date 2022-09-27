import { useContext } from 'react';
import Imagen from '../assets/img/bg.jpg';
import ProductosContext from '../context/ProductosProvider';
import { capitalizarPrimeraLetra } from '../helpers/formatearTexto';
export const Producto = ({ producto }) => {

    const { idproducto, nombre, imagen, precio } = producto;
    const { modal, setProductoPedido, obtenerProductoBuscar } = useContext(ProductosContext);

    const handleClick = async producto => {
        //setProductoPedido(producto);
        await obtenerProductoBuscar(producto.idproducto);
        modal.show();
    };

    return (
        <>
            <div style={{ width: "23rem" }} className="col-3 card px-0 rounded"
            >
                <img src={imagen ? imagen : Imagen} alt="iconoProducto" />
                <div className="card-body">
                    <h5 className="card-title text-dark fw-semibold fs-3">{capitalizarPrimeraLetra(nombre)}</h5>
                    <p className='fs-4'>Precio: <span className='fw-bold text-primary'> {precio} Bs.</span></p>
                </div>
                <input type="button" className='btn btn-danger text-uppercase fw-bolder' onClick={() => handleClick(producto)} value="VER MAS" />
            </div>


        </>
    )
}
