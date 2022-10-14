import { useContext } from 'react';
import { ModalCobro, Spinner } from '../components';
import ProductosContext from '../context/ProductosProvider';
import { useNavigate, useParams } from 'react-router-dom';
import PedidosContext from '../context/PedidosProvider';
import { useEffect } from 'react';
import { capitalizarPrimeraLetra } from '../helpers/formatearTexto';

export const PedidoInformacion = () => {

    const navigate = useNavigate();
    const { modalCobro } = useContext(ProductosContext);
    const { pedidosCobro, cargando, setPedidosBuscados, setValue } = useContext(PedidosContext);

    let total = 0;

    const handleCobrar = () => {
        modalCobro.show();
    };

    const handleAgregarOtroPedido = () => {
        setPedidosBuscados([]);
        setValue('');
        navigate('/cajero');
    };

    if (cargando) {
        return <Spinner />
    }
    return (
        <>
            <div className='w-100 container d-flex align-items-center flex-column'>
                <h2 className='text-primary fw-bold'>INFORMACION DE PEDIDO</h2>
                {/* <p className='text-muted'>Fecha de pedido: {formatearFecha(pedidoSeleccionado.data.fecha)}</p> */}
                <div className='mt-3 table-wrapper-scroll-y my-custom-scrollbar-usuario w-100 border'>
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
                                <td colSpan={"5"} className="fw-bold">TOTAL: {total.toFixed(2)} Bs.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='mt-3 w-100 d-flex justify-content-center gap-2'>
                    <div>
                        <button onClick={handleCobrar} className='btn btn-primary mt-1 mb-3 w-sm-auto w-100 text-uppercase'>Realizar Cobro</button>
                    </div>

                    <div>
                        <button onClick={handleAgregarOtroPedido} className='btn btn-primary mt-1 mb-3 w-sm-auto w-100 text-uppercase'>Adjuntar otro pedido</button>
                    </div>
                </div>
            </div>
            <ModalCobro />
        </>
    )
}
