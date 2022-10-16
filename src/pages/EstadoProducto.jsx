import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductosContext from '../context/ProductosProvider';
import Imagen from '../assets/img/img1.jpg';
import { capitalizarPrimeraLetra } from '../helpers/formatearTexto';
import { Spinner } from '../components';
import { toast } from 'react-toastify';

export const EstadoProducto = () => {

    const { productos, editarEstadoProducto, cargando } = useContext(ProductosContext);

    const handleChangeEstado = async producto => {
        let productoActualizado;

        const estado = producto.estado === 'habilitado' ? 'deshabilito' : 'habilito';

        if (estado === 'deshabilito') {
            productoActualizado = {
                ...producto,
                estado: 'deshabilitado'
            };
        } else {
            productoActualizado = {
                ...producto,
                estado: 'habilitado'
            };
        }
        if (editarEstadoProducto(productoActualizado)) {
            toast.success(`Se ${estado} el producto correctamente`);
        }
    };

    if (cargando) return <Spinner />
    
    return (
        <div className='container-md'>
            {/* <div className='d-flex justify-content-md-between my-4 flex-wrap justify-content-center gap-2'>
                <h3 className='fs-1 text-primary text-center my-0'>ADMINISTRAR IMAGENES</h3>
                <Link className="btn btn-primary" to="/administrador/productos">Volver a ventana productos</Link>
            </div> */}
            <h3 className='fs-1 text-primary text-center mb-3'>DES/HABILITAR PRODUCTOS</h3>
            <div className='d-flex flex-wrap gap-3 justify-content-center mb-4'>

                {
                    productos.map(producto => (
                        <div className="card" style={{ width: '18rem' }} key={producto.idproducto}>
                            <img src={producto.imagen ? producto.imagen : Imagen} className="card-img-top" alt="imagenProducto" style={{height:'200px'}}/>
                            <div className="card-body">
                                <h5 className="card-title fs-3 fw-bold text-success">{capitalizarPrimeraLetra(producto.nombre)}</h5>
                                <p className="card-text fs-4 text-danger fw-semibold">{producto.precio} Bs.</p>
                                <button type='button' onClick={() => handleChangeEstado(producto)} className="btn btn-warning w-100 text-uppercase fw-bold" disabled={cargando ? true : false}>{
                                    producto.estado === 'habilitado' ? 'DESHABILITAR' : 'HABILITAR'
                                }</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
