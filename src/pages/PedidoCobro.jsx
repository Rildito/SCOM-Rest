import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Imagen from '../assets/img/logo.png';
import { Spinner } from '../components';
import PedidoContext from '../context/PedidosProvider';
import { formatearFecha } from '../helpers/formatearFecha';
import { capitalizarPrimeraLetra } from '../helpers/formatearTexto';
export const PedidoCobro = () => {

  const [fechaActual, setFechaActual] = useState('');

  const navigate = useNavigate();
  const { pedidosCobro, setPedidosCobro, clienteCobro, factura, cargando } = useContext(PedidoContext);


  const handleCobrar = () => {
    window.print();
  };

  const handleVolver = () => {
    navigate('/cajero');  
    // window.location.reload();  
    setPedidosCobro([]);
  };
  let total = 0;

  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    setFechaActual(formatearFecha(`${month}-${day}-${year}`));
  }, [])

  if (cargando) return <Spinner />
  return (

    <>
      <div className='w-100 container d-flex align-items-center flex-column container-print'>
        <h2 className='text-primary fw-bold hide-on-print'>VISUALIZACION DE PEDIDO</h2>
        <div className='d-flex flex-sm-row align-items-center justify-content-around w-100 column flex-column'>
          <img src={Imagen} alt="Imagen logo" className='mb-4 d-none d-print-block' style={{
            maxWidth: "10rem"
          }} />

          <p className=''>Nombre Establecimiento: <span className='fw-bold'>Scom Rest</span></p>
          <p>NIT Local: <span className='fw-bold'>1235123</span></p>
          <p>Factura Electronica: <span className='fw-bold'>{factura.codfactura}</span></p>
        </div>

        <div className='d-flex flex-sm-row align-items-center justify-content-around w-100 column flex-column'>
          <p>Nombre Cliente: <span className='fw-bold'>{clienteCobro.nombre}</span></p>
          <p>CI/NIT: <span className='fw-bold'>{clienteCobro.nit}</span></p>
          <p>Fecha: <span className='fw-bold'>{fechaActual}</span></p>
        </div>
        <div className='mt-3 table-wrapper-scroll-y my-custom-scrollbar-usuario w-100'>
          <table className="table bg-white">
            <thead className='text-center table-dark'>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio Unitario</th>
                <th scope="col">Sub Total</th>
                <th scope="col">Id pedido</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {
                pedidosCobro?.map(pedido => {
                  return pedido?.productos.map(producto => {
                    total += (producto.precio * producto.cantidad)
                    return (
                      <tr key={producto.idproducto} className="align-middle">
                        <td>{capitalizarPrimeraLetra(producto.nombre)}</td>
                        <td>{producto.cantidad}</td>
                        <td>{(producto.precio).toFixed(2)} Bs.</td>
                        <td>{(producto.precio * producto.cantidad).toFixed(2)} Bs.</td>
                        <td>{pedido.idpedido}</td>
                      </tr>
                    )
                  })
                })
              }
              <tr>
                <td colSpan={"4"} className="fw-bold">TOTAL: {total.toFixed(2)} Bs.</td>
                <td className='fw-bold'>Cambio: {(total - clienteCobro.monto) > 0 ? (total - clienteCobro.monto).toFixed(2) : ((total - clienteCobro.monto) * -1).toFixed(2)} Bs.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='mt-3 w-100 d-flex justify-content-between'>
          <button onClick={handleCobrar} className='btn btn-primary mt-1 mb-3 w-sm-auto w-100 text-uppercase hide-on-print'>Imprimir</button>
          <button onClick={handleVolver} className='btn btn-primary mt-1 mb-3 w-sm-auto w-100 text-uppercase hide-on-print'>Volver a Pedidos</button>
        </div>
      </div>
    </>
  )
}
