import React from 'react'
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Spinner } from '../components';
import PedidoContext from '../context/PedidosProvider';
import Imagen from '../assets/img/logo.png';

import { capitalizarPrimeraLetra } from '../helpers/formatearTexto';
import UsuarioContext from '../context/UsuarioProvider';

import { formatearFecha } from '../helpers/formatearFecha';

export const Informe = () => {

    const [fecha, setFecha] = useState('');
    const { pedidos, cargando, setCargando, obtenerProductosPedido } = useContext(PedidoContext);
    const { obtenerSalarios, usuarioEgresos, cargandoDatos } = useContext(UsuarioContext);

    // const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const [pedidosBuscados, setPedidosBuscados] = useState([]);
    let pedidosInforme = [];

    let subtotal = 0;
    let total2 = 0;
    let total3 = 0;

    useEffect(() => {
        subtotal = 0;
        total2 = 0;
        total3 = 0;
        setPedidosBuscados([]);
        const obtenerPedidos = async () => {
            setCargando(true);
            pedidosInforme = await Promise.all(pedidos.map(async pedido => {
                const year = pedido.fecha.substr(0, 4);
                const month = pedido.fecha.substr(5, 2);

                if (year === fecha.substring(0, 4) && month === fecha.substring(5)) {
                    const pedidoProductos = await obtenerProductosPedido(pedido.idpedido);
                    pedido.ingredientes = pedidoProductos;
                    return pedido;
                }
            }))
            setCargando(false);
            setPedidosBuscados(pedidosInforme.filter(pedidosInforme => pedidosInforme !== undefined));
            //console.log(pedidosBuscados);
        }
        obtenerPedidos();
        obtenerSalarios();
    }, [fecha])

    const imprimirReporte = () => {
        window.print();
    };
    if (cargando) return <Spinner />
    return (
        <>

            {/* IMPRIMIT */}

            <div className='w-100 container d-flex align-items-center flex-column d-none d-print-block'>
                <div className='d-flex flex-sm-row align-items-center justify-content-around w-100 column flex-column'>
                    <img src={Imagen} alt="Imagen logo" className='mb-4 d-none d-print-block' style={{
                        maxWidth: "16rem"
                    }} />
                </div>

                <p className='fw-bold mb-0 fs-3'>INGRESOS</p>
                {
                    pedidosBuscados?.map(pedidoState => {
                        if (pedidoState.estado) {
                            return (
                                <>
                                    <p key={pedidoState.idpedido} className='fs-5 fw-semibold mb-0 mt-2'>Fecha de pedido: {formatearFecha(pedidoState.fecha)}</p>
                                    <p className='fs-5 mb-0'><span className='fw-semibold'>Id pedido:</span> {pedidoState.idpedido}</p>
                                    <p className='fs-5 fw-semibold mb-0'>PRODUCTOS</p>

                                    {
                                        pedidoState?.ingredientes.map(ingrediente => {
                                            total2 += ingrediente.precio * ingrediente.cantidad ?? 0
                                            return (
                                                <>
                                                    <p className='fs-5 mb-0' key={ingrediente.nombre}>Producto: {capitalizarPrimeraLetra(ingrediente.nombre)} Costo: {ingrediente.precio} Cantidad: {ingrediente.cantidad}  Sub total: {ingrediente.precio * ingrediente.cantidad} Bs.</p>
                                                </>
                                            )
                                        }

                                        )
                                    }

                                </>
                            )
                        }

                    })
                }

                <p className='fs-4 fw-bold' >INGRESOS TOTALES: {total2.toFixed(2)} Bs.</p>
                <p className='fw-bold mt-2 mb-0 fs-3'>EGRESOS</p>

                {
                    usuarioEgresos.map(usuario => {
                        total3 += usuario.salario ?? 0
                        return (
                            <>
                                <p key={usuario.ci} className='fs-5 mb-0'> <span className='fw-semibold'>Nombre:</span>{capitalizarPrimeraLetra(usuario.nombre)} {usuario.apellidoPaterno} {usuario.apellidoMaterno} -- Salario: {usuario?.salario ?? 0} Bs. -- Tipo de usuario: {usuario.tipoUsuario}</p>
                            </>
                        )
                    })
                }
                <p className='fs-4 fw-bold' >EGRESOS TOTALES: {total3.toFixed(2)} Bs.</p>
            </div>

            {/* IMPRIMIR */}
            <div className="input-group mb-3 w-md-40 d-print-none">
                <span className="input-group-text" id="basic-addon1">Mes y Año</span>
                <input type="month" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setFecha(e.target.value)} value={fecha} />
            </div>
            <div className='d-flex justify-content-center flex-column d-print-none'>
                <div className='mt-3 table-wrapper-scroll-y my-custom-scrollbar-usuario border'>
                    {

                        pedidosBuscados.length > 0 ? (

                            <table className="table bg-white">
                                <thead className='text-center table-dark'>
                                    <tr>
                                        <th scope="col">Id pedido</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Ci camarero</th>
                                        <th scope="col">Codigo Factura</th>
                                        <th scope="col">Ingresos</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    {
                                        pedidosBuscados.map(pedidoState => {
                                            subtotal = 0;
                                            if (pedidoState.estado) {
                                                return (
                                                    <>
                                                        <tr key={pedidoState.idpedido}>
                                                            <td>{pedidoState.idpedido}</td>
                                                            <td>{pedidoState.fecha}</td>
                                                            <td>{pedidoState.ciCamarero}</td>
                                                            <td>{pedidoState.codfactura}</td>
                                                            {
                                                                pedidoState.ingredientes.map(ingredienteState => {
                                                                    subtotal += (ingredienteState.cantidad * ingredienteState.precio) ?? 0

                                                                })
                                                            }
                                                            <td>{subtotal} Bs.</td>
                                                        </tr>
                                                    </>
                                                )
                                            }

                                        })

                                    }
                                    <tr>
                                        <td colSpan={"5"} className="fw-semibold">TOTAL INGRESOS: {total2} Bs.</td>
                                    </tr>
                                </tbody>
                            </table>

                        ) : <p className='text-center mt-3 fs-bold'>No hay pedidos que mostrar</p>
                    }
                </div>
            </div>
            <button className='btn btn-primary mt-3 w-md-auto w-100 mb-md-0 mb-3 d-print-none' onClick={imprimirReporte} disabled={cargandoDatos ? true : false}>Imprimir Reporte</button>
        </>
    )
}
