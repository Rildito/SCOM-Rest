import { Modal } from 'bootstrap';
import { useState } from 'react';
import { useEffect, useRef, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';
import PedidoContext from '../context/PedidosProvider';
import ProductosContext from '../context/ProductosProvider';
import UsuarioContext from '../context/UsuarioProvider';

export function ModalCobro({ total }) {

    const [confirmado, setConfirmado] = useState(false);
    //COBRO
    const [nombre, setNombre] = useState('');
    const [nit, setNit] = useState('');
    const [monto, setMonto] = useState(0);
    const [ci, setCi] = useState('');
    const [error, setError] = useState('');

    const { modalCobro, setModalCobro } = useContext(ProductosContext);
    const { setClienteCobro, crearFactura, pedidosCobro, errores, cambiarEstadoPedido } = useContext(PedidoContext);
    const { auth } = useContext(AuthContext);
    const { obtenerUsuarioCobrar, cargando, usuario } = useContext(UsuarioContext);

    const exampleModal = useRef()
    const navigate = useNavigate();

    const handleClick = async () => {
        setError('');

        if (!confirmado) {
            if (ci === '') {
                setError('El ci del cliente es obligatorio')
                return
            }

            const usuarioCobrar = await obtenerUsuarioCobrar(ci);
            if (Object.keys(usuarioCobrar).length > 0) {
                setConfirmado(true);
                setNit(usuarioCobrar.NIT);
                setNombre(usuarioCobrar.nombre);
            }else {
                setError('No se encontro el cliente')
                return
            }
        }

        if (confirmado) {


            if ([monto].includes('') || monto === 0) {
                setError('El monto es obligatorio')
                return
            }

            if (Number(monto) < Number(total)) {
                setError('El monto recibido no puede ser menor a el monto a pagar');
                return
            }

            
            setClienteCobro({ //TODO: Pedir URL para cambiar estado del producto, hablar eso de las facturas.
                nombre,
                nit,
                monto
            })
  

            //CREAR FACTURA
            // CAMBIAR ESTADO A PEDIDOS

            const codfactura = (Math.random() + '').substring(2, 9);

            await crearFactura(codfactura, String(auth.ci), usuario.ci);

            const idPedidos = pedidosCobro.map(pedidoState => pedidoState.idpedido);
            cambiarEstadoPedido(idPedidos, codfactura)
            navigate(`cobro`);

            modalCobro.hide(); //REALIZAR PROCESO DE COBRO
            setConfirmado(false);
        }






    };

    useEffect(() => {
        setModalCobro(
            new Modal(exampleModal.current)
        )
    }, [])

    return (
        <>
            <div className="modal fade" ref={exampleModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">PROCESO DE PAGO</h5>
                            <button type="button" className="btn-close" onClick={() => modalCobro.hide()} aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                            <div className="mb-3">

                                {error && <p key={error} className="w-100 p-2 mb-1 bg-danger rounded text-white">{error}</p>}

                                {
                                    errores.map(error => (
                                        <p key={error} className="w-100 p-2 mb-1 bg-danger rounded text-white">{error}</p>
                                    ))
                                }

                                {
                                    confirmado ? (
                                        <>
                                            <label htmlFor="nit" className="form-label">NIT</label>
                                            <input type="text" id="nit" name="nit" className="form-control" value={nit} onChange={e => setNit(e.target.value)} />

                                            <label htmlFor="nombre" className="form-label mt-2">Nombre</label>
                                            <input type="text" className="form-control" id="nombre" value={nombre} onChange={e => setNombre(e.target.value)} />

                                            <p className='mt-2 mb-0'>Monto a pagar: <span className='fw-bold'>{total} Bs.</span></p>

                                            <label htmlFor="monto" className="form-label mt-2">Monto recibido:</label>
                                            <input type="number" className="form-control" id="monto" value={monto} onChange={e => setMonto(e.target.value)} step={0.01} min="0" />
                                        </>

                                    ) : (
                                        <>
                                            <label htmlFor="ci" className="form-label fw-bold">Ci cliente</label>
                                            <input type="text" id="ci" name="ci" className="form-control" value={ci} onChange={e => setCi(e.target.value)} />
                                        </>
                                    )
                                }
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            {/* <button type="button" className="btn btn-secondary" onClick={() => modal.hide()}>Close</button> */}
                            <button type="button" className="btn btn-primary text-uppercase" onClick={handleClick} disabled={cargando ? true : false}>{`${confirmado ? 'CONFIRMAR COBRO' : 'BUSCAR CLIENTE'}`}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
