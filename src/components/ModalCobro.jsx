import { Modal } from 'bootstrap';
import { useState } from 'react';
import { useEffect, useRef, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';
import PedidoContext from '../context/PedidosProvider';
import ProductosContext from '../context/ProductosProvider';

export function ModalCobro() {

    //COBRO
    const [nombre, setNombre] = useState('');
    const [nit, setNit] = useState('');
    const [monto, setMonto] = useState(0);
    const [error, setError] = useState('');
    const [montoPagar, setMontoPagar] = useState(0);

    const { modalCobro, setModalCobro } = useContext(ProductosContext);
    const { setClienteCobro, crearFactura, pedidosCobro, errores, cambiarEstadoPedido } = useContext(PedidoContext);
    const { auth } = useContext(AuthContext);

    const exampleModal = useRef()
    const navigate = useNavigate();

    const { idPedido } = useParams();


    const handleClick = async () => {
        setError('');
        console.log('click')
        
        if ([nombre, nit, monto].includes('') || monto === 0) {
            setError('Todos los campos son obligatorios')
            return
        }
        
        pedidosCobro.map(pedido => {
            let total = 0;
            pedido?.productos.map(producto => {
                total += (producto.precio * producto.cantidad)
            })
            setMontoPagar(total);
        })

        console.log(montoPagar, "MONOTPAGR");
        console.log(Number(monto), "MOTNO");

        if (montoPagar > Number(monto)) {
            setError('El monto ingresado no es correcto')
            return
        }

        modalCobro.hide(); //REALIZAR PROCESO DE COBRO

        setClienteCobro({ //TODO: Pedir URL para cambiar estado del producto, hablar eso de las facturas.
            nombre,
            nit,
            monto
        })


        //CREAR FACTURA
        // CAMBIAR ESTADO A PEDIDOS

        const codfactura = (Math.random() + '').substring(2, 9);

        await crearFactura(codfactura, String(auth.ci), nit);

        const idPedidos = pedidosCobro.map(pedidoState => pedidoState.idpedido);
        cambiarEstadoPedido(idPedidos, codfactura)
        navigate(`cobro`);

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

                                <label htmlFor="nit" className="form-label">NIT</label>
                                <input type="text" id="nit" name="nit" className="form-control" value={nit} onChange={e => setNit(e.target.value)} />

                                <label htmlFor="exampleInputEmail1" className="form-label mt-2">Nombre</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={nombre} onChange={e => setNombre(e.target.value)} />

                                <label htmlFor="exampleInputEmail1" className="form-label mt-2">Monto</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={monto} onChange={e => setMonto(e.target.value)} step={0.01} min="0" />
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            {/* <button type="button" className="btn btn-secondary" onClick={() => modal.hide()}>Close</button> */}
                            <button type="button" className="btn btn-primary text-uppercase" onClick={handleClick}>CONFIRMAR COBRO</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
