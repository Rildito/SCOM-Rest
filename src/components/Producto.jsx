import { useContext } from 'react';
import Imagen from '../assets/img/bg.jpg';
import AuthContext from '../context/AuthProvider';
import ProductosContext from '../context/ProductosProvider';
import { capitalizarPrimeraLetra } from '../helpers/formatearTexto';
export const Producto = ({ producto }) => {

    const { nombre, imagen, precio } = producto;
    const { modal, obtenerProductoBuscar, cargando2 } = useContext(ProductosContext);
    const { auth } = useContext(AuthContext);

    const handleClick = async producto => {
        //setProductoPedido(producto);
        if (auth.ci) {
            await obtenerProductoBuscar(producto.idproducto, producto.tipoProducto);
        }
        modal.show();
    };

    return (
        <>
            <div style={{ width: "23rem" }} className="col-3 card px-0 rounded"
            >
                <img src={imagen ? imagen : Imagen} alt="iconoProducto" style={{ height: "230px" }} />
                <div className="card-body bg-card">
                    <h5 className="card-title fw-semibold fs-3">{capitalizarPrimeraLetra(nombre)}</h5>
                    <p className='fs-4 mb-0'>Precio: <span className='fw-bold text-success'> {precio} Bs.</span></p>
                </div>
                <input type="button" className='btn btn-warning text-uppercase fw-bolder' onClick={() => handleClick(producto)} value="VER MAS" disabled={cargando2 ? true : false} />
            </div>


        </>
    )
}
