import { useEffect } from "react";
import { createContext, useState } from "react"
import { toast } from 'react-toastify';
import axios from 'axios';

const PedidoContext = createContext();

export const PedidosProvider = ({ children }) => {

    // const [pedidos, setPedidos] = useState([
    //     {
    //         idPedido: 1,
    //         estado: 'ocupado',
    //         fecha: '05-05-2012',
    //         productos: [
    //             {
    //                 idProducto: 1,
    //                 precio: 15.50,
    //                 nombre: 'pollo al horno',
    //                 estado: 'disponible',
    //                 cantidad: 3
    //             },
    //             {
    //                 idProducto: 2,
    //                 precio: 20,
    //                 nombre: 'pescado al horno',
    //                 estado: 'disponible',
    //                 cantidad: 4
    //             },
    //             {
    //                 idProducto: 3,
    //                 precio: 15,
    //                 nombre: 'aji de fideo',
    //                 estado: 'disponible',
    //                 cantidad: 1
    //             },
    //             {
    //                 idProducto: 4,
    //                 precio: 15,
    //                 nombre: 'fricase',
    //                 estado: 'disponible',
    //                 cantidad: 1
    //             },
    //         ]
    //     },
    //     {
    //         idPedido: 2,
    //         estado: 'ocupado',
    //         fecha: '05-05-2012',
    //         productos: [
    //             {
    //                 idProducto: 1,
    //                 precio: 15.50,
    //                 nombre: 'pollo al horno',
    //                 estado: 'disponible',
    //                 cantidad: 1
    //             },
    //             {
    //                 idProducto: 2,
    //                 precio: 20,
    //                 nombre: 'pescado al horno',
    //                 estado: 'disponible',
    //                 cantidad: 1
    //             },
    //             {
    //                 idProducto: 3,
    //                 precio: 15,
    //                 nombre: 'aji de fideo',
    //                 estado: 'disponible',
    //                 cantidad: 1
    //             },
    //             {
    //                 idProducto: 5,
    //                 precio: 10,
    //                 nombre: 'saise',
    //                 estado: 'disponible',
    //                 cantidad: 1
    //             },
    //         ]
    //     },
    //     {
    //         idPedido: 3,
    //         estado: 'ocupado',
    //         fecha: '05-05-2012',
    //         productos: [
    //             {
    //                 idProducto: 1,
    //                 precio: 15.50,
    //                 nombre: 'pollo al horno',
    //                 estado: 'disponible',
    //                 cantidad: 1
    //             },
    //             {
    //                 idProducto: 2,
    //                 precio: 20,
    //                 nombre: 'pescado al horno',
    //                 estado: 'disponible',
    //                 cantidad: 1
    //             }
    //         ]
    //     },
    //     {
    //         idPedido: 31,
    //         estado: 'ocupado',
    //         fecha: '05-05-2012',
    //         productos: [
    //             {
    //                 idProducto: 7,
    //                 precio: 10,
    //                 nombre: 'jugo de plátano',
    //                 estado: 'disponible',
    //                 cantidad: 1
    //             },
    //             {
    //                 idProducto: 10,
    //                 precio: 5,
    //                 nombre: 'jugo de naranja',
    //                 estado: 'disponible',
    //                 cantidad: 1
    //             }
    //         ]
    //     },
    // ]);
    const [pedido, setPedido] = useState([]); //pedido cliente
    const [pedidos, setPedidos] = useState([]); //pedidos base de datos
    const [pedidosBuscados, setPedidosBuscados] = useState([]);
    const [pedidoSeleccionado, setPedidoSeleccionado] = useState({});
    const [cargando, setCargando] = useState(false);
    const [palabraBuscarPedido, setPalabraBuscarPedido] = useState('');

    //carrito
    const [pedidoCliente, setPedidoCliente] = useState([]);

    useEffect(() => {
        obtenerPedidos();
    }, [])

    const obtenerPedidos = async () => {
        setCargando(true);
        try {
            const { data: { data, error } } = await axios.get("https://scom-rest.herokuapp.com/api/pedidos");
            console.log(data);
            setPedidos(data); //TODO: no obtenemos los ingredientes Revisar!!
        } catch (error) {
            setCargando(false);
            console.log(error);
            // mostrarAlerta('Ocurrio un error', 'danger');
        } finally {
            setCargando(false);
        }
    };

    const obtenerPedido = async id => {
        setCargando(true);
        try {
            const { data: { data, error, productos } } = await axios.get(`https://scom-rest.herokuapp.com/api/pedido/${id}`);
            setPedidoSeleccionado({ data, productos }); //TODO: no obtenemos los ingredientes Revisar!!
            console.log(`https://scom-rest.herokuapp.com/api/pedido/${id}`);
            console.log("OBTENER PEDIDO")
        } catch (error) {
            setCargando(false);
            console.log(error);
            // mostrarAlerta('Ocurrio un error', 'danger');
        } finally {
            setCargando(false);
        }
        setCargando(true);
        setCargando(false);
    };

    const confirmarPedido = () => {

    };

    const cancelarPedido = () => {

    };

    const agregarPedido = (producto) => {
        if (pedido.some(productoState => productoState.idproducto === producto.idproducto)) {
            const pedidoActualizados = pedido.map(productoState => productoState.idproducto === producto.idproducto ? producto : productoState)
            setPedido(pedidoActualizados);
            toast.success('Guardado correctamente')
        } else {
            setPedido([...pedido, producto])
            toast.success('Agregado al pedido')
        }
    };

    return (
        <PedidoContext.Provider value={{
            //variables
            cargando,
            pedidosBuscados,
            palabraBuscarPedido,
            pedidos,
            pedido,
            pedidoSeleccionado,
            pedidoCliente,
            //funciones
            agregarPedido,
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