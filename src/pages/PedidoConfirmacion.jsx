import { useContext } from 'react';
import { ModalCobro, Spinner } from '../components';
import ProductosContext from '../context/ProductosProvider';
import { useNavigate, useParams } from 'react-router-dom';
import PedidosContext from '../context/PedidosProvider';
import { useEffect } from 'react';
import { capitalizarPrimeraLetra } from '../helpers/formatearTexto';
import { formatearFecha, obtenerFechaActual } from '../helpers/formatearFecha';

export const PedidoConfirmacion = () => {

  const navigate = useNavigate();
  const { modalCobro } = useContext(ProductosContext);
  const { pedidoSeleccionado, obtenerPedido, cargando, confirmarPedido, cancelarPedido } = useContext(PedidosContext);
  const { idPedido } = useParams();

  const agregarProducto = () => {
    navigate('productos');
  };

  useEffect(() => {
    obtenerPedido(idPedido);
  }, []);

  if (cargando) {
    return <Spinner />
  }
  return (
    <>
      <div className='w-100 container d-flex align-items-center flex-column'>
        <h2 className='text-primary fw-bold text-center'>CONFIRMACION DE PEDIDO</h2>
        <p className='text-muted'>Fecha de pedido: {obtenerFechaActual()}</p>
        <div className='d-md-flex justify-content-between w-100'>
          <div className='d-flex flex-md-row flex-column gap-2'>
            <button className='btn btn-success' onClick={confirmarPedido}>CONFIRMAR</button>
            <button className='btn btn-danger' onClick={() => cancelarPedido(pedidoSeleccionado.idPedido)}>CANCELAR</button>
          </div>
          {/* <button className='btn btn-primary w-md-auto w-100 mt-md-0 mt-2' onClick={agregarProducto}>AGREGAR MAS PRODUCTOS</button> */}
        </div>
        <div className='mt-3 table-wrapper-scroll-y my-custom-scrollbar-usuario w-100 border'>
          <table className="table bg-white">
            <thead className='text-center table-dark'>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio Unitario</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {
                pedidoSeleccionado.productos?.map(producto => {
                  return (
                    <tr key={producto.idProducto} className="align-middle">
                      <td>{capitalizarPrimeraLetra(producto.nombre)}</td>
                      <td>{producto.cantidad}</td>
                      <td>{(producto.precio).toFixed(2)} Bs.</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <ModalCobro />
    </>
  )
}
