import axios from 'axios';
import { useContext } from 'react';
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthContext from './AuthProvider';

const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {

  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({});
  const [productoPedido, setProductoPedido] = useState({});
  const [productoBuscar, setProductoBuscar] = useState({});

  const [modal, setModal] = useState(null);
  const [modalCobro, setModalCobro] = useState(null);

  const [cargando, setCargando] = useState(false);
  const [cargando2, setCargando2] = useState(false);
  const [tipoProducto, setTipoProducto] = useState('');
  const [errores, setErrores] = useState([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth.tipoUsuario === 'administrador') {
      if (tipoProducto === 'platillo') {
        obtenerPlatillos();
      }

      if (tipoProducto === 'bebida') {
        obtenerBebidas();
      }

      if (tipoProducto === '') {
        obtenerProductos();
      }
    }

    if (auth.tipoUsuario === 'chef') {
      obtenerProductos();
    }

    if (auth.tipoUsuario === 'cliente') {
      obtenerProductos();
    }

    if (Object.keys(auth).length > 0) {
      obtenerProductos();
    }



    setProducto({});
    setErrores([]);

  }, [tipoProducto, auth])

  const obtenerProductos = async () => {
    setCargando(true);
    try {
      const { data: { data, error } } = await axios.get("https://scom-rest.herokuapp.com/api/productos");
      setProductos(data); //TODO: no obtenemos los ingredientes Revisar!!
    } catch (error) {
      setCargando(false);
      setProductos([]);
      toast.error('Ocurrio un error inesperado');
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
      toast.error('Ocurrio un error inesperado');
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
      toast.error('Ocurrio un error inesperado');
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
      //console.log(`https://scom-rest.herokuapp.com/api/${tipoProducto}/${idProducto}`)
      setProducto(data);
      //console.log(data);

    } catch (error) {
      console.log(error);
      toast.error('Ocurrio un error inesperado');
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
    console.log(`https://scom-rest.herokuapp.com/api/${tipoProducto}`, producto)
    try {
      setCargando(true);
      const { data: { data, error } } = await axios.post(`https://scom-rest.herokuapp.com/api/${tipoProducto}`, producto); //TODO: no le puedo enviar los datos.

      if (error?.length > 0) {
        setErrores(error);
        setCargando(false);
        return
      }
      console.log(data, "CREANDO");
      setProductos([...productos, data]);
      setErrores({});
      navigate('/administrador/productos');
      toast.success(`Se creo correctamente el producto`);
    } catch (error) {
      console.log(error);
      toast.error('Ocurrio un error inesperado');
    } finally {
      setCargando(false);
    }
  };

  const editarProducto = async producto => {
    try {
      setCargando(true);

      const { data: { data, error } } = await axios.put(`https://scom-rest.herokuapp.com/api/${tipoProducto}/${producto.idproducto}`, producto);

      if (error?.length > 0) {
        setErrores(error);
        setCargando(false);
        return
      }

      const productosActualizados = productos.map(productoState => productoState.idproducto === producto.idproducto ? data : productoState);

      console.log(data, "EDITANDO")
      setProductos(productosActualizados);
      setErrores({});
      navigate('/administrador/productos');
      toast.success(`Se edito correctamente el producto`);
    } catch (error) {
      console.log(error);
      toast.error('Ocurrio un error inesperado');
    } finally {
      setCargando(false);
    }
  };

  const eliminarProducto = async idProducto => {
    console.log(idProducto);
    console.log(`https://scom-rest.herokuapp.com/api/${tipoProducto}/${idProducto}`)
    try {
      setCargando(true);
      const { data: { data, error } } = await axios.delete(`https://scom-rest.herokuapp.com/api/${tipoProducto}/${idProducto}`);

      if (error?.length > 0) {
        setErrores(error);
        setCargando(false);
        return
      }

      const productosActualizados = productos.filter(productoState => productoState.idproducto !== idProducto);

      setProductos(productosActualizados);
      setErrores({});
      navigate('/administrador/productos');
      toast.success(`Se elimino correctamente el producto`);
    } catch (error) {
      console.log(error);
      toast.error('Ocurrio un error inesperado');
    } finally {
      setCargando(false);
    }
  };

  const obtenerProductoBuscar = async (idproducto, tipoProducto) => {
    let producto = {};
    try {
      setCargando2(true);
      const { data: { data, error } } = await axios.get(`https://scom-rest.herokuapp.com/api/${tipoProducto}/${idproducto}`);

      if (data[1]) {
        producto = { ...data[0] }
        producto.ingredientes = data[1].map(ingre => ingre)
      } else {
        producto = { ...data }
      }
      if (error?.length > 0) {
        setErrores(error);
        return
      }
      setProductoBuscar(producto);
      setErrores([]);
    } catch (error) {
      console.log(error);
      toast.error('Ocurrio un error inesperado');
    } finally {
      setCargando2(false);
    }


    // try {

    //   setCargando(true);
    //   const { data: { data, error } } = await axios.get(`https://scom-rest.herokuapp.com/api/platillo/${idproducto}`);

    //   if (error?.length > 0) {
    //     setErrores(error);
    //     return
    //   }
    //   setProductoBuscar(data);
    //   setErrores([]);
    // } catch (error) {
    //   console.log(error);
    //   toast.error('Ocurrio un error inesperado');
    // } finally {
    //   setCargando(false);
    // }
  };

  const editarEstadoProducto = async (idProducto, estado) => {
    try {
      let productosActualizados = [];
      setCargando2(true);
      if (estado === 'deshabilitar') {
        const { data: { data, error } } = await axios.put(`https://scom-rest.herokuapp.com/api/productoDeshabilita/${idProducto}`);
        if (error?.length > 0) {
          setErrores(error);
          setCargando2(false);
          return false
        }

        productosActualizados = productos.map(productoState => productoState.idproducto === idProducto ? data : productoState);

      } else {
        const { data: { data, error } } = await axios.put(`https://scom-rest.herokuapp.com/api/productoHabilita/${idProducto}`);
        if (error?.length > 0) {
          setErrores(error);
          setCargando2(false);
          return false
        }
        productosActualizados = productos.map(productoState => productoState.idproducto === idProducto ? data : productoState);
      }

      setProductos(productosActualizados);
      setErrores({});
    } catch (error) {
      console.log(error);
      toast.error('Ocurrio un error inesperado');
    } finally {
      setCargando2(false);
      return true
    }
  };

  return (
    <ProductosContext.Provider value={{
      //VARIABLES
      cargando,
      cargando2,
      errores,
      modal,
      modalCobro,
      producto,
      productoPedido,
      productoBuscar,
      productos,
      tipoProducto,

      //FUNCIONTS
      editarEstadoProducto,
      setErrores,
      setModal,
      setModalCobro,
      setCargando,
      setProducto,
      setProductos,
      setProductoPedido,
      setTipoProducto,
      obtenerProducto,
      submitProducto,
      eliminarProducto,
      obtenerProductoBuscar,
      obtenerProductos

    }}>
      {children}
    </ProductosContext.Provider>
  )
}

export default ProductosContext;
