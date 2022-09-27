import { Modal } from 'bootstrap';
import { useEffect, useRef, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';
import ProductosContext from '../context/ProductosProvider';
import Imagen from '../assets/img/bebida.png';
import { capitalizarPrimeraLetra } from '../helpers/formatearTexto';
import PedidoContext from '../context/PedidosProvider';

export function ModalProducto() {
    const { modal, setModal, productoPedido, productoBuscar, ingredienteBuscar } = useContext(ProductosContext);
    const { auth } = useContext(AuthContext);
    const { agregarPedido, pedido } = useContext(PedidoContext);
    const exampleModal = useRef()
    const navigate = useNavigate();

    const [cantidad, setCantidad] = useState(1);
    const [edicion, setEdicion] = useState(false);

    const handleIniciarSesion = () => {
        modal.hide();
        navigate("/login");
    };

    const handlePedirProducto = async () => {

        //agregarPedido({ ...productoPedido, cantidad })
        modal.hide();
    };



    useEffect(() => {
        setModal(
            new Modal(exampleModal.current)
        )
    }, [])

    useEffect(() => {
        console.log(pedido)
        if (pedido?.some(pedidoState => pedidoState.idproducto === productoPedido.idproducto)) {
            const productoEdicion = pedido.find(pedidoState => pedidoState.idproducto === productoPedido.idproducto);
            setEdicion(true);
            setCantidad(productoEdicion.cantidad)
        } else {
            setCantidad(1);
            setEdicion(false);
        }

    }, [productoPedido, pedido])

    return (
        <>

            <div className="modal fade" ref={exampleModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">PEDIDO</h5>
                            <button type="button" className="btn-close" onClick={() => modal.hide()} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {
                                <div className="card border-0 ">
                                    <div className="row g-0">
                                        <div className="col-md-4 d-flex justify-content-center">
                                            <img src={Imagen} className="img-fluid rounded-start" alt="..." style={{
                                                maxHeight: '200px'
                                            }} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title fs-3">{capitalizarPrimeraLetra(productoBuscar.nombre)}</h5>
                                                <p className="card-text fs-3 text-danger">{productoBuscar.precio} Bs.</p>

                                                <h5 className='fw-bold'>INGREDIENTES</h5>
                                                {
                                                    ingredienteBuscar.map(ingrediente => (
                                                        <>
                                                            <p className='mb-0'>{capitalizarPrimeraLetra(ingrediente.nombre)}</p>
                                                        </>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                // auth.ci ? (
                                //     <div className="card border-0 ">
                                //         <div className="row g-0">
                                //             <div className="col-md-4 d-flex justify-content-center">
                                //                 <img src={Imagen} className="img-fluid rounded-start" alt="..." style={{
                                //                     maxHeight: '200px'
                                //                 }} />
                                //             </div>
                                //             <div className="col-md-8">
                                //                 <div className="card-body">
                                //                     <h5 className="card-title fs-3">{capitalizarPrimeraLetra(productoPedido.nombre)}</h5>
                                //                     <p className="card-text fs-3 text-danger">{productoPedido.precio} Bs.</p>
                                //                     <div className='d-flex justify-content-between align-items-center'>
                                //                         <button className='btn btn-warning fw-bold rounded-circle border-dark' onClick={() => setCantidad(cantidad => Math.max(1, cantidad - 1))}>-</button>
                                //                         <p className='fs-3 mb-0'>{cantidad}</p>
                                //                         <button className='btn btn-warning fw-bold rounded-circle border-dark' onClick={() => setCantidad(cantidad => cantidad + 1)}>+</button>
                                //                     </div>
                                //                 </div>
                                //             </div>
                                //         </div>
                                //     </div>) :
                                //     (<p> Si quiere realizar un pedido debe de iniciar sesion</p>)
                            }

                        </div>
                        {/* <div className="modal-footer d-flex justify-content-center">
                            {
                                auth.ci ? (<button type="button" className="btn btn-success text-uppercase" onClick={handlePedirProducto}>{edicion ? 'GUARDAR CAMBIOS' : 'AÑADIR AL PEDIDO'}</button>) : (<button type="button" className="btn btn-danger text-uppercase" onClick={handleIniciarSesion}>INICIAR SESION</button>)
                            }

                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
