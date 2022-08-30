import { createContext, useEffect, useState } from 'react'

const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {

  const [productos, setProductos] = useState([]);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const obtenerProductos = async () => {

    };
    obtenerProductos();
  }, [])

 

  return (
    <ProductosContext.Provider value={{
      productos,
      modal,
      setModal

    }}>
      {children}
    </ProductosContext.Provider>
  )
}

export default ProductosContext;
