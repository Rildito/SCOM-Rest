import { createContext, useState } from "react"

const PedidoContext = createContext();

export const PedidosProvider = ({ children }) => {

    const [pedidos, setPedidos] = useState([
        {
            idPedido: 1,
            estado: 'ocupado',
            fecha: '05-05-2012',
            productos: [
                {
                    idProducto: 1,
                    precio: 15.50,
                    nombre: 'pollo al horno',
                    estado: 'disponible',
                    cantidad: 3
                },
                {
                    idProducto: 2,
                    precio: 20,
                    nombre: 'pescado al horno',
                    estado: 'disponible',
                    cantidad: 4
                },
                {
                    idProducto: 3,
                    precio: 15,
                    nombre: 'aji de fideo',
                    estado: 'disponible',
                    cantidad: 1
                },
                {
                    idProducto: 4,
                    precio: 15,
                    nombre: 'fricase',
                    estado: 'disponible',
                    cantidad: 1
                },
            ]
        },
        {
            idPedido: 2,
            estado: 'ocupado',
            fecha: '05-05-2012',
            productos: [
                {
                    idProducto: 1,
                    precio: 15.50,
                    nombre: 'pollo al horno',
                    estado: 'disponible',
                    cantidad: 1
                },
                {
                    idProducto: 2,
                    precio: 20,
                    nombre: 'pescado al horno',
                    estado: 'disponible',
                    cantidad: 1
                },
                {
                    idProducto: 3,
                    precio: 15,
                    nombre: 'aji de fideo',
                    estado: 'disponible',
                    cantidad: 1
                },
                {
                    idProducto: 5,
                    precio: 10,
                    nombre: 'saise',
                    estado: 'disponible',
                    cantidad: 1
                },
            ]
        },
        {
            idPedido: 3,
            estado: 'ocupado',
            fecha: '05-05-2012',
            productos: [
                {
                    idProducto: 1,
                    precio: 15.50,
                    nombre: 'pollo al horno',
                    estado: 'disponible',
                    cantidad: 1
                },
                {
                    idProducto: 2,
                    precio: 20,
                    nombre: 'pescado al horno',
                    estado: 'disponible',
                    cantidad: 1
                }
            ]
        },
        {
            idPedido: 31,
            estado: 'ocupado',
            fecha: '05-05-2012',
            productos: [
                {
                    idProducto: 7,
                    precio: 10,
                    nombre: 'jugo de plátano',
                    estado: 'disponible',
                    cantidad: 1
                },
                {
                    idProducto: 10,
                    precio: 5,
                    nombre: 'jugo de naranja',
                    estado: 'disponible',
                    cantidad: 1
                }
            ]
        },
    ]);
    const [pedidosBuscados, setPedidosBuscados] = useState([]);
    const [pedidoSeleccionado, setPedidoSeleccionado] = useState({});
    const [cargando, setCargando] = useState(false);
    const [palabraBuscarPedido, setPalabraBuscarPedido] = useState('');

    //carrito
    const [pedidoCliente, setPedidoCliente] = useState([]);

    
    
    const obtenerPedido = async id => {
        setCargando(true);
        const pedido = await new Promise((resolve) => {
            resolve(pedidos.filter(({ idPedido }) => (
                idPedido == id
            )))
        })
        setPedidoSeleccionado(pedido[0]);
        setCargando(false);
    };

    const confirmarPedido = () => {

    };

    const cancelarPedido = () => {

    };


    return (
        <PedidoContext.Provider value={{
            //variables
            cargando,
            pedidosBuscados,
            palabraBuscarPedido,
            pedidos,
            pedidoSeleccionado,
            pedidoCliente,
            //funciones
            confirmarPedido,
            obtenerPedido,
            setPalabraBuscarPedido,
            setPedidosBuscados,
            setPedidoCliente,
        }}>
            {children}
        </PedidoContext.Provider>
    )
}

export default PedidoContext;