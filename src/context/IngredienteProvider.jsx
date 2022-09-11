import { createContext, useState, useEffect } from "react"
import axios from 'axios';

const IngredienteContext = createContext();

export const IngredientesProvider = ({ children }) => {

    const [ingredientes, setIngredientes] = useState([]);

    useEffect(() => {
        const obtenerIngrediente = async () => {
            // const { data } = await axios.get("/ingredientes"); //Url para obtenerIngrediente
            const { data } = await axios.get("../../db.json");
            setIngredientes(data);
        };

        obtenerIngrediente();
    }, []);


    const submitIngrediente = ingrediente => {
        console.log(ingrediente);
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
        const ingredientesActualizados = ingredientes.filter(ingrediente => ingrediente.nombre !== nombre);
        setIngredientes(ingredientesActualizados);
    };

    return (
        <IngredienteContext.Provider value={{
            //Variables
            ingredientes,

            //Functions
            eliminarIngrediente,
            submitIngrediente,

        }}>
            {children}
        </IngredienteContext.Provider>
    )
}

export default IngredienteContext;
