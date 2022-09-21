import axios from 'axios';
import { createContext, useEffect, useState } from 'react'

const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {

  const [productos, setProductos] = useState([
    {
      idProducto: 1,
      nombre: 'Saise',
      precio: 15,
      estado: 'disponible',
      stock: 10
    },
    {
      idProducto: 2,
      nombre: 'Pollo Frito',
      precio: 10,
      estado: 'disponible',
      stock: 20
    },
    {
      idProducto: 3,
      nombre: 'Aji de Fideo',
      precio: 15,
      estado: 'disponible',
      stock: 15
    },
    {
      idProducto: 4,
      nombre: 'jugo de platano',
      precio: 5,
      estado: 'disponible',
      gradoAlcoholico: 0
    },
    {
      idProducto: 5,
      nombre: 'jugo de naranja',
      precio: 10,
      estado: 'disponible',
      gradoAlcoholico: 0
    },
  ]);
  const [producto, setProducto] = useState({});

  const [ingrediente, setIngrediente] = useState({});
  const [ingredientes, setIngredientes] = useState([]);

  const [mesa, setMesa] = useState({});
  const [mesas, setMesas] = useState([]);

  const [modal, setModal] = useState(null);
  const [modalCobro, setModalCobro] = useState(null);

  const [cargando, setCargando] = useState(false);
  useEffect(() => {
    const obtenerProductos = async () => {

    };
    obtenerProductos();
  }, [])



  const obtenerIngredientes = async () => {
    try {
      setCargando(true);
      const { data: { data, error } } = await axios.get('https://scom-rest.herokuapp.com/api/ingredientes'); //URL para crear
      setIngredientes(data)
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
    }
  };

  const obtenerIngrediente = async (codIngrediente) => {
    try {
      setCargando(true);
      const { data: { data, error } } = await axios.get(`https://scom-rest.herokuapp.com/api/ingredientes/${codIngrediente}`); //URL para crear
      setIngrediente(data)
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
    }
  };

  const obtenerMesas = async () => {
    // const { data:{data, response} } = await axios.get("https://scom-rest.herokuapp.com/api/ingredientes");
    // setIngredientes(data);
  };

  const submitIngrediente = ingrediente => {

    if (ingrediente.id) {
      editarIngrediente(ingrediente);
    } else {
      nuevoIngrediente(ingrediente);
    }
  };

  const nuevoIngrediente = async ingrediente => {
    const { data } = await axios.post('https://scom-rest.herokuapp.com/api/ingredientes', ingrediente); //URL para crear
    setIngredientes([...ingredientes, data])
    console.log(data);
  };

  const editarIngrediente = async ingrediente => {
    // const { data } = await axios.post(`/ingredientes/${ingrediente.ci}`, ingrediente); //URL para editar
    // setIngredientes([...ingredientes, data])
  };

  const eliminarIngrediente = async nombre => {
    // const { data } = await axios.delete(`/ingredientes/${ingrediente.ci}`); //URL para editar
    // const ingredientesActualizados = ingredientes.filter(ingrediente => ingrediente.nombre !== nombre);
    // setIngredientes(ingredientesActualizados);
  };


  //MESAS
  const submitMesa = mesa => {

    if (mesa.id) {
      editarMesa(mesa);
    } else {
      nuevoMesa(mesa);
    }
  };

  const nuevoMesa = async mesa => {
    // const { data } = await axios.post('/ingredientes', ingrediente); //URL para crear
    // setIngredientes([...ingredientes, data])
  };

  const editarMesa = async mesa => {
    // const { data } = await axios.post(`/ingredientes/${ingrediente.ci}`, ingrediente); //URL para editar
    // setIngredientes([...ingredientes, data])
  };

  const eliminarMesa = async mesa => {
    // const { data } = await axios.delete(`/ingredientes/${ingrediente.ci}`); //URL para editar
    // const ingredientesActualizados = ingredientes.filter(ingrediente => ingrediente.nombre !== nombre);
    // setIngredientes(ingredientesActualizados);
  };

  return (
    <ProductosContext.Provider value={{
      //VARIABLES
      cargando,
      ingrediente,
      ingredientes,
      mesa,
      mesas,
      modal,
      modalCobro,
      producto,
      productos,

      //FUNCIONTS
      editarIngrediente,
      editarMesa,
      eliminarIngrediente,
      eliminarMesa,
      setModal,
      setModalCobro,
      setCargando,
      submitIngrediente,
      submitMesa,
      obtenerIngredientes,
      obtenerIngrediente
    }}>
      {children}
    </ProductosContext.Provider>
  )
}

export default ProductosContext;
