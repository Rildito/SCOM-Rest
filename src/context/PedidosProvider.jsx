import { useEffect } from "react";
import { createContext, useState } from "react"
import { toast } from 'react-toastify';
import axios from 'axios';
import { useContext } from "react";
import AuthContext from "./AuthProvider";

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
    // const [pedidosCajero, setPedidosCajero] = useState([]); //pedidos base de datos
    const [pedidosBuscados, setPedidosBuscados] = useState([]);
    const [pedidoSeleccionado, setPedidoSeleccionado] = useState({});
    const [cargando, setCargando] = useState(false);
    const [cargando2, setCargando2] = useState(false);
    const [palabraBuscarPedido, setPalabraBuscarPedido] = useState('');
    const [errores, setErrores] = useState([]);
    //cobros
    const [pedidosCobro, setPedidosCobro] = useState([]);
    const [clienteCobro, setClienteCobro] = useState({});
    const [value, setValue] = useState('');
    const [factura, setFactura] = useState({});
    //carrito
    const [pedidoCliente, setPedidoCliente] = useState([]);

    const { auth } = useContext(AuthContext);
    useEffect(() => {
        if (auth.tipoUsuario !== 'administrador' || auth.tipoUsuario !== 'cliente') {
            obtenerPedidos();
        }
    }, [auth])

    const obtenerPedidos = async () => {
        setCargando(true);
        try {
            const { data: { data, error } } = await axios.get("https://scom-rest.herokuapp.com/api/pedidos");
            setPedidos(data); //TODO: no obtenemos los ingredientes Revisar!!

            // const pedidosValidos = data.filter(pedido => pedido.estado === 'entregado');
            // setPedidosCajero(pedidosValidos); //TODO: no obtenemos los ingredientes Revisar!!
        } catch (error) {
            setCargando(false);
            console.log(error);
        } finally {
            setCargando(false);
        }
    };

    const obtenerPedido = async id => {
        try {
            setCargando(true);
            const { data: { data, error, productos } } = await axios.get(`https://scom-rest.herokuapp.com/api/pedido/${id}`);
            setPedidoSeleccionado({ data, productos }); //TODO: no obtenemos los ingredientes Revisar!!
            console.log(`https://scom-rest.herokuapp.com/api/pedido/${id}`);
            console.log("OBTENER PEDIDO")
        } catch (error) {
            console.log(error);
        } finally {
            setCargando(false);
        }
    };

    const obtenerProductosPedido = async id => {
        try {
            const { data: { data, error, productos } } = await axios.get(`https://scom-rest.herokuapp.com/api/pedido/${id}`);
            return productos //TODO: no obtenemos los ingredientes Revisar!!
        } catch (error) {
            console.log(error);
        }

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

    const obtenerPedidosCobro = async id => {

        try {
            console.log("OBTENIENDO PEDIDO")
            setCargando(true);
            const { data: { data, error, productos } } = await axios.get(`https://scom-rest.herokuapp.com/api/pedido/${id}`);

            const pedido = { ...data, productos }
            setPedidosCobro([...pedidosCobro, pedido]); //TODO: no obtenemos los ingredientes Revisar!!

        } catch (error) {
            console.log(error);
        } finally {
            setCargando(false);
        }
    };

    const crearFactura = async (codfactura, ciCajero, ciCliente) => {
        try {
            setCargando(true);
            const { data: { data, error } } = await axios.post(`https://scom-rest.herokuapp.com/api/factura
            `, { codfactura, ciCajero, ciCliente });

            if (error?.length > 0) {
                setErrores(error);
                return
            }

            setFactura(data);
        } catch (error) {
            console.log(error);
            toast.error('Ocurrio un error');
        } finally {
            setCargando(false);
        }
    }

    const cambiarEstadoPedido = async (idPedidos, codFactura) => {
        const idPedidosExitosos = await Promise.all(idPedidos.map(async idPedido => {

            const { data: { data, error } } = await axios.put(`https://scom-rest.herokuapp.com/api/pedidovendido/${idPedido}/${codFactura}`);
            //console.log(...data)
            return idPedido
        }));
        console.log(idPedidosExitosos);
        const pedidosActualizados = pedidos.filter(pedidoState => (!idPedidosExitosos.includes(pedidoState.idpedido)));
        console.log(pedidosActualizados);
        setPedidos(pedidosActualizados);
    };

    const pedidoRealizado = async (idPedido) => {
        setCargando2(true);
        const { data: { data, error } } = await axios.put(`https://scom-rest.herokuapp.com/api/pedidorealizado/${idPedido}`); //TODO: pedir datos

        const pedidosActualizados = pedidos.filter(pedido => pedido.idpedido !== data.idpedido);
        setPedidos(pedidosActualizados);
        setCargando2(false);
    }

    return (
        <PedidoContext.Provider value={{
            //variables
            cargando,
            cargando2,
            clienteCobro,
            errores,
            pedidosBuscados,
            palabraBuscarPedido,
            pedidos,
            // pedidosCajero,
            pedido,
            pedidoSeleccionado,
            pedidoCliente,
            pedidosCobro,
            value,
            factura,
            //funciones
            agregarPedido,
            cambiarEstadoPedido,
            crearFactura,
            obtenerProductosPedido,
            obtenerPedido,
            obtenerPedidos,
            obtenerPedidosCobro,
            setCargando,
            setClienteCobro,
            setErrores,
            setPalabraBuscarPedido,
            setPedidosBuscados,
            setPedidoCliente,
            setPedidoSeleccionado,
            setPedidos,
            setPedidosCobro,
            setValue,
            setFactura,
            pedidoRealizado
        }}>
            {children}
        </PedidoContext.Provider>
    )
}

export default PedidoContext;