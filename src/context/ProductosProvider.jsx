import { createContext, useEffect, useState } from 'react'

const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {

  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({});

  const [ingrediente, setIngrediente] = useState({});
  const [ingredientes, setIngredientes] = useState([]);

  const [mesa, setMesa] = useState({});
  const [mesas, setMesas] = useState([]);

  const [modal, setModal] = useState(null);
  const [modalCobro, setModalCobro] = useState(null);


  useEffect(() => {
    const obtenerProductos = async () => {

    };
    obtenerProductos();
  }, [])



  const obtenerIngredientes = async () => {
    // const { data:{data, response} } = await axios.get("https://scom-rest.herokuapp.com/api/ingredientes");
    // setIngredientes(data);
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
    // const { data } = await axios.post('/ingredientes', ingrediente); //URL para crear
    // setIngredientes([...ingredientes, data])
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
      submitIngrediente,
      submitMesa,
    }}>
      {children}
    </ProductosContext.Provider>
  )
}

export default ProductosContext;
