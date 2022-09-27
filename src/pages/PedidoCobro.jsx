import { useNavigate, useParams } from 'react-router-dom'
import Imagen from '../assets/img/logo.png';
import { formatearFecha } from '../helpers/formatearFecha';
export const PedidoCobro = () => {

  const navigate = useNavigate();
  const { idPedido } = useParams();

  const productos = [
    {
      codProducto: 1,
      nombre: 'Charquekan',
      cantidad: 2,
      precio: 70
    },

  ];

  const handleCobrar = () => {
    window.print();
    navigate('/cajero')
  };

  let total = 0;

  return (

    <>
      <div className='w-100 container d-flex align-items-center flex-column container-print'>
        <h2 className='text-primary fw-bold hide-on-print'>VISUALIZACION DE PEDIDO</h2>
        <div className='d-flex flex-sm-row align-items-center justify-content-around w-100 column flex-column'>
          <img src={Imagen} alt="Imagen logo" className='mb-4 d-none d-print-block' style={{
            maxWidth: "10rem"
          }} />

          <p className=''>Nombre Establecimiento: <span className='fw-bold'>Scom Rest</span></p>
          <p>NIT Local: <span className='fw-bold'>12412512</span></p>
          <p>Factura Electronica: <span className='fw-bold'>125125</span></p>
        </div>

        <div className='d-flex flex-sm-row align-items-center justify-content-around w-100 column flex-column'>
          <p>Nombre Cliente: <span className='fw-bold'>Jorge Perer Sandoval</span></p>
          <p>CI/NIT: <span className='fw-bold'>12412</span></p>
          <p>Fecha: <span className='fw-bold'>{formatearFecha('2022/09/27')}</span></p>
        </div>
        <div className='mt-3 table-wrapper-scroll-y my-custom-scrollbar-usuario w-100'>
          <table className="table bg-white">
            <thead className='text-center table-dark'>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio Unitario</th>
                <th scope="col">Sub Total</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {
                productos?.map(producto => {
                  total += (producto.precio * producto.cantidad)
                  return (
                    <tr key={producto.codProducto} className="align-middle">
                      <td>{producto.nombre}</td>
                      <td>{producto.cantidad}</td>
                      <td>{producto.precio} Bs.</td>
                      <td>{producto.precio * producto.cantidad} Bs.</td>
                    </tr>
                  )
                }
                )
              }
              <tr>
                <td colSpan={"4"}>TOTAL: {total} Bs.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='mt-3 w-100 d-flex justify-content-between'>
          <button onClick={handleCobrar} className='btn btn-primary mt-1 mb-3 w-sm-auto w-100 text-uppercase hide-on-print'>Imprimir</button>
        </div>
      </div>
    </>
  )
}
