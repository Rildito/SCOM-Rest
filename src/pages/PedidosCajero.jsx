import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import PedidoContext from '../context/PedidosProvider';
import { useEffect } from 'react';
import { Spinner } from '../components';

export const PedidosCajero = () => {

    const navigate = useNavigate();
    const { pedidosBuscados, pedidosCajero, setPedidoSeleccionado, obtenerPedidosCobro, pedidosCobro, cargando, setErrores } = useContext(PedidoContext);

    const handleagregarProducto = (idPedido) => {
        obtenerPedidosCobro(idPedido);
        navigate('pedidos');
    };

    useEffect(() => {
        setPedidoSeleccionado({});
        setErrores([]);
    }, [])

    if (cargando) return <Spinner />
    return (
        <>
            <h2 className='fs-1 mb-4 text-primary fw-bold text-center'>PEDIDOS</h2>

            <div className='px-md-5 px-0'>
                {
                    (pedidosBuscados.length > 0 ? (
                        pedidosBuscados.map(pedido => {

                            if (!(pedidosCobro.some(pedidoState => pedidoState.idpedido === pedido.idpedido)) && pedido.estado === 'entregado') {
                                return (
                                    <button onClick={() => handleagregarProducto(pedido.idpedido)} className='w-100 bg-warning-gradient p-4 justify-content-start btn text-start mb-3' key={pedido.idpedido}>

                                        <div className='d-flex justify-content-between flex-md-row flex-column'>

                                            <div>
                                                <h4 className='text-danger fw-bold'>Codigo de pedido: {pedido.idpedido}</h4>
                                                <p className='mb-0'>Cod factura: <span className='fw-bold'>{pedido.codfactura}</span></p>

                                                <p className='mb-0'>Ci camarero: <span className='fw-bold'>{pedido.ciCamarero}</span></p>

                                                <p className='mb-0'>Ci Chef: <span className='fw-bold'>{pedido.ciChef}</span></p>

                                                <p>ESTADO: <span className='fw-bold'>{pedido.estado}</span></p>
                                                <p className='text-muted mb-0'>Fecha: {pedido.fecha}</p>
                                            </div>
                                        </div>
                                    </button>
                                )
                            }
                        })

                    ) : (
                        pedidosCajero?.length > 0 ? 
                        pedidosCajero?.map(pedido => {
                            if (!(pedidosCobro.some(pedidoState => pedidoState.idpedido === pedido.idpedido)) && pedido.estado === 'entregado') {
                                return (
                                    <button onClick={() => handleagregarProducto(pedido.idpedido)} className='w-100 bg-warning-gradient p-4 justify-content-start btn text-start mb-3' key={pedido.idpedido}>

                                        <div className='d-flex justify-content-between flex-md-row flex-column'>

                                            <div>
                                                <h4 className='text-danger fw-bold'>Codigo de pedido: {pedido.idpedido}</h4>
                                                <p className='mb-0'>Cod factura: <span className='fw-bold'>{pedido.codfactura}</span></p>

                                                <p className='mb-0'>Ci camarero: <span className='fw-bold'>{pedido.ciCamarero}</span></p>

                                                <p className='mb-0'>Ci Chef: <span className='fw-bold'>{pedido.ciChef}</span></p>

                                                <p>ESTADO: <span className='fw-bold'>{pedido.estado}</span></p>
                                                <p className='text-muted mb-0'>Fecha: {pedido.fecha}</p>
                                            </div>
                                        </div>
                                    </button>
                                )
                            }
                        }) : (<p className='text-center'>No hay pedidos que mostrar</p>)
                        ))
                    }
                </div >
            </>
        )
    }
    

                        //         <button onClick={() => handleagregarProducto(pedido.idpedido)} className='w-100 bg-warning-gradient p-4 justify-content-start btn text-start mb-3' key={pedido.idpedido}>

                        //             <div className='d-flex justify-content-between flex-md-row flex-column'>

                        //                 <div>
                        //                     <h4 className='text-danger fw-bold'>Codigo de pedido: {pedido.idpedido}</h4>
                        //                     <p className='mb-0'>Cod factura: <span className='fw-bold'>{pedido.codfactura}</span></p>

                        //                     <p className='mb-0'>Ci camarero: <span className='fw-bold'>{pedido.ciCamarero}</span></p>

                        //                     <p className='mb-0'>Ci Chef: <span className='fw-bold'>{pedido.ciChef}</span></p>

                        //                     <p>ESTADO: <span className='fw-bold'>{pedido.estado}</span></p>
                        //                     <p className='text-muted mb-0'>Fecha: {pedido.fecha}</p>
                        //                 </div>

                        //                 {/* <div>
                        //                     <h4 className='text-danger fw-bold'>Codigo de pedido: {pedido.idpedido}</h4>
                        //                     <p className='mb-0'>Productos pedidos: {''}
                        //                         <span className='fw-bold'>
                        //                             {/* {
                        //                                 pedido?.productos.map(producto => {
                        //                                     total += producto.precio;
                        //                                     return (
                        //                                         producto.nombre
                        //                                     )
                        //                                 })

                        //                             } 
                        //                         </span>
                        //                     </p>
                        //                     <p className='mb-0'>Precio total:
                        //                         <span className='fw-bold'>
                        //                             Total {' '}{total.toFixed(2)} {' '}Bs.
                        //                         </span>
                        //                     </p>
                        //                 </div>
                        //                 <div>
                        //                     <p className='mb-0'>Nombre Cliente: <span className='fw-bold'>Luis Barra Paredes</span></p>
                        //                     <p>CI: <span className='fw-bold'>8441659</span></p>
                        //                 </div> */}
                        //             </div>
                        //         </button>
                        //     ))
                        // ))
