import axios from 'axios';
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {

  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({});
  const [productoPedido, setProductoPedido] = useState({});
  const [productoBuscar, setProductoBuscar] = useState({});
  const [ingredienteBuscar, setIngredienteBuscar] = useState([]);

  const [modal, setModal] = useState(null);
  const [modalCobro, setModalCobro] = useState(null);

  const [cargando, setCargando] = useState(false);
  const [alerta, setAlerta] = useState({});
  const [tipoProducto, setTipoProducto] = useState('');
  const [errores, setErrores] = useState([]);

  useEffect(() => {
    if (tipoProducto === 'platillo') {
      obtenerPlatillos();
    }

    if (tipoProducto === 'bebida') {
      obtenerBebidas();
    }

    if (tipoProducto === '') {
      obtenerProductos();
    }

  }, [tipoProducto])

  const obtenerProductos = async () => {
    setCargando(true);
    try {
      const { data: { data, error } } = await axios.get("https://scom-rest.herokuapp.com/api/productos");
      setProductos(data); //TODO: no obtenemos los ingredientes Revisar!!
    } catch (error) {
      setCargando(false);
      setProductos([]);
      mostrarAlerta('Ocurrio un error', 'danger');
    } finally {
      setCargando(false);
    }
  };

  const obtenerPlatillos = async () => {
    setCargando(true);
    try {
      const { data: { data, error } } = await axios.get("https://scom-rest.herokuapp.com/api/platillos");
      setProductos(data);
    } catch (error) {
      setCargando(false);
      setProductos([]);
      mostrarAlerta('Ocurrio un error', 'danger');
    } finally {
      setCargando(false);
    }
  };

  const obtenerBebidas = async () => {
    setCargando(true);
    try {
      const { data: { data, error } } = await axios.get("https://scom-rest.herokuapp.com/api/bebidas");
      setProductos(data);
    } catch (error) {
      setCargando(false);
      setProductos([]);
      mostrarAlerta('Ocurrio un error', 'danger');
    } finally {
      setCargando(false);
    }
  };

  const obtenerProducto = async (idProducto, tipoProducto) => {
    try {
      setCargando(true);
      const { data: { data, error } } = await axios.get(`https://scom-rest.herokuapp.com/api/${tipoProducto}/${idProducto}`, {
        responseEncodig: 'utf-8'
      });
      console.log(`https://scom-rest.herokuapp.com/api/${tipoProducto}/${idProducto}`)
      setProducto(data);
      console.log(data);

    } catch (error) {
      mostrarAlerta('Ocurrio un error', 'danger');
    } finally {
      setCargando(false);
    }
  };

  const submitProducto = producto => {
    console.log(producto)
    if (producto.idproducto) {
      editarProducto(producto);
    } else {
      nuevoProducto(producto);
    }
  };

  const nuevoProducto = async producto => {
    try {
      console.log(`https://scom-rest.herokuapp.com/api/${producto.productoElegido}`)
      setCargando(true);
      const { data: { data, error } } = await axios.post(`https://scom-rest.herokuapp.com/api/${producto.productoElegido}`, producto); //TODO: no le puedo enviar los datos.

      if (error?.length > 0) {
        setErrores(error);
        setCargando(false);
        return
      }

      setProductos([...productos, data]);
      setErrores({});
      navigate('/administrador/productos');
      mostrarAlerta(`Se creo correctamente el ${producto.tipoproducto}`, 'primary')
    } catch (error) {
      console.log(error);
      mostrarAlerta('Hubo un error', 'danger');
    } finally {
      setCargando(false);
    }
  };

  const editarProducto = async producto => {
    try {
      setCargando(true);
      const { data: { data, error } } = await axios.put(`https://scom-rest.herokuapp.com/api/${producto.productoElegido}/${producto.idproducto}`, producto);

      if (error?.length > 0) {
        setErrores(error);
        setCargando(false);
        return
      }

      const productosActualizados = producto.map(productoState => productoState.idproducto === producto.idproducto ? data : productoState);

      setProductos(productosActualizados);
      setErrores({});
      navigate('/administrador/productos');
      mostrarAlerta(`Se edito correctamente el ${producto.tipoproducto}`, 'primary')
    } catch (error) {
      console.log(error);
      mostrarAlerta('Hubo un error', 'danger');
    } finally {
      setCargando(false);
    }
  };

  const eliminarProducto = async idProducto => {
    try {
      setCargando(true);
      const { data: { data, error } } = await axios.delete(`https://scom-rest.herokuapp.com/api/${tipoProducto}/${idProducto}`);

      if (error?.length > 0) {
        setErrores(error);
        setCargando(false);
        return
      }

      const productosActualizados = producto.map(productoState => productoState.idproducto !== producto.idproducto ? productoState : null);

      setProductos(productosActualizados);
      setErrores({});
      navigate('/administrador/productos');
      mostrarAlerta(`Se edito correctamente el ${producto.tipoproducto}`, 'primary')
    } catch (error) {
      console.log(error);
      mostrarAlerta('Hubo un error', 'danger');
    } finally {
      setCargando(false);
    }
  };

  const obtenerProductoBuscar = async idproducto => {
    try {
      const { data: { data, error } } = await axios.get(`https://scom-rest.herokuapp.com/api/platillo/${idproducto}`);

      console.log(data);

      if (error?.length > 0) {
        setErrores(error);
        return
      }
      setProductoBuscar(data[0]);
      setIngredienteBuscar(data[1]);
      setErrores([]);
    } catch (error) {
      console.log(error);
      mostrarAlerta('Hubo un error', 'danger');
    }
  };

  const mostrarAlerta = (mensaje, tipoAlerta) => {
    setAlerta({
      msg: mensaje,
      tipoAlerta
    })

    setTimeout(() => {
      setAlerta({});
    }, 3000)
  }

  return (
    <ProductosContext.Provider value={{
      //VARIABLES
      alerta,
      cargando,
      errores,
      ingredienteBuscar,
      modal,
      modalCobro,
      producto,
      productoPedido,
      productoBuscar,
      productos,
      tipoProducto,

      //FUNCIONTS
      setErrores,
      setModal,
      setModalCobro,
      setCargando,
      setProducto,
      setProductoPedido,
      setTipoProducto,
      obtenerProducto,
      submitProducto,
      eliminarProducto,
      obtenerProductoBuscar

    }}>
      {children}
    </ProductosContext.Provider>
  )
}

export default ProductosContext;
