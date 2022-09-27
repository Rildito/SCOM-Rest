import axios from 'axios';
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const IngredientesContext = createContext();

export const IngredientesProvider = ({ children }) => {

    const navigate = useNavigate();

    const [ingrediente, setIngrediente] = useState({});
    const [ingredientes, setIngredientes] = useState([]);

    //MESAS

    const [mesa, setMesa] = useState({});
    const [mesas, setMesas] = useState([]);


    const [cargando, setCargando] = useState(false);
    const [alerta, setAlerta] = useState({});
    const [errores, setErrores] = useState([]);

    useEffect(() => {
        obtenerIngredientes();
        obtenerMesas();
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
            console.log(`https://scom-rest.herokuapp.com/api/ingrediente/${codIngrediente}`);
            const { data: { data, error } } = await axios.get(`https://scom-rest.herokuapp.com/api/ingrediente/${codIngrediente}`); //URL para crear
            setIngrediente(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            setCargando(false);
        }
    };

    const submitIngrediente = ingrediente => {

        if (ingrediente.codingrediente) {
            editarIngrediente(ingrediente);
        } else {
            nuevoIngrediente(ingrediente);
        }
    };

    const nuevoIngrediente = async ingrediente => { //TODO: no funciona enviar ingredientes
        try {

            setCargando(true);
            const { data: { data, error } } = await axios.post('https://scom-rest.herokuapp.com/api/ingrediente', ingrediente); //URL para crear

            if (error?.length > 0) {
                setErrores(error);
                setCargando(false);
                return
            }
            setIngredientes([...ingredientes, data])
            setErrores([]);
            navigate('/administrador/ingredientes');
            mostrarAlerta('Se creo correctamente el ingrediente', 'primary')
        } catch (error) {
            console.log(error);
            mostrarAlerta('Ocurrio un error', 'danger');
        } finally {
            setCargando(false);
        }
    };

    const editarIngrediente = async ingrediente => {
        try {
            setCargando(true);
            const { data: { data, error } } = await axios.put(`https://scom-rest.herokuapp.com/api/ingrediente/${ingrediente.codingrediente}`, ingrediente); // URL para editar

            console.log(data);
            console.log(error);
            if (error?.length > 0) {
                setErrores(error);
                setCargando(false);
                return
            }

            const ingredientesActualizados = ingredientes.map(ingre => ingre.codingrediente === data.codingrediente ? data : ingre);
            setIngredientes(ingredientesActualizados)
            setErrores([]);
            setCargando(false);
            navigate('/administrador/ingredientes');
            mostrarAlerta('Se edito correctamente el ingrediente', 'primary')
        } catch (error) {
            console.log(error);
            mostrarAlerta('Ocurrio un error', 'danger');
        }
    };

    const eliminarIngrediente = async codIngrediente => {

        try {
            setCargando(true);
            const { data: { data, error } } = await axios.delete(`https://scom-rest.herokuapp.com/api/ingrediente/${codIngrediente}`); // URL para editar
            const ingredientesActualizados = ingredientes.filter(ingre => ingre.codingrediente !== codIngrediente);
            console.log(codIngrediente);
            setIngredientes(ingredientesActualizados);
            setCargando(false);
            navigate('/administrador/ingredientes');
            mostrarAlerta('Se elimino correctamente el ingrediente', 'danger')
        } catch (error) {
            console.log(error);
            mostrarAlerta('Ocurrio un error', 'danger');
        }

        // const { data } = await axios.delete(`/ingredientes/${ingrediente.ci}`); //URL para editar
        // const ingredientesActualizados = ingredientes.filter(ingrediente => ingrediente.nombre !== nombre);
        // setIngredientes(ingredientesActualizados);
    };

    const obtenerMesas = async () => {
        try {
            setCargando(true);
            const { data: { data, error } } = await axios.get("https://scom-rest.herokuapp.com/api/mesas");
            setMesas(data);
        } catch (error) {
            console.log(error)
        } finally {
            setCargando(false);
        }
    };

    const obtenerMesa = async (id) => {
        try {
            setCargando(true);
            const { data: { data, error } } = await axios.get(`https://scom-rest.herokuapp.com/api/mesa/${id}`);
            setMesa(data);
        } catch (error) {
            console.log(error)
        } finally {
            setCargando(false);
        }
    };

    //MESAS
    const submitMesa = mesa => {

        if (mesa.id) {
            editarMesa(mesa);
        } else {
            nuevaMesa(mesa);
        }
    };

    const nuevaMesa = async mesa => {
        try {
            console.log(mesa)
            setCargando(true);
            const { data: { data, error } } = await axios.post(' https://scom-rest.herokuapp.com/api/mesa', mesa); //URL para crear

            if (error?.length > 0) {
                setErrores(error);
                setCargando(false);
                return
            }
            console.log(data);
            setMesas([...mesas, data])
            setErrores([]);
            navigate('/administrador/mesas');
            mostrarAlerta('Se creo correctamente la mesa', 'primary')
        } catch (error) {
            console.log(error);
        } finally {
            setCargando(false);
        }
    };

    const editarMesa = async mesa => {
        try {
            setCargando(true);
            const { data: { data, error } } = await axios.put(`https://scom-rest.herokuapp.com/api/mesa/${mesa.nroMesa}`, mesa); //URL para crear

            if (error?.length > 0) {
                setErrores(error);
                setCargando(false);
                return
            }
            const mesasActualizadas = mesas.map(mesaState => mesaState.nroMesa === data.nroMesa ? data : mesaState);
            setMesas(mesasActualizadas);
            setErrores([]);
            navigate('/administrador/mesas');
            mostrarAlerta('Se edito correctamente la mesa', 'primary')
        } catch (error) {
            console.log(error);
        } finally {
            setCargando(false);
        }
    };

    const eliminarMesa = async nroMesa => {
        try {
            setCargando(true);
            const { data: { data, error } } = await axios.delete(`https://scom-rest.herokuapp.com/api/mesa/${nroMesa}`); //URL para crear

            if (error?.length > 0) {
                setErrores(error);
                setCargando(false);
                return
            }

            const mesasActualizadas = mesas.filter(mesaState => mesaState.nroMesa !== nroMesa);
            setMesas(mesasActualizadas);
            setErrores([]);
            navigate('/administrador/mesas');
            mostrarAlerta('Se elimino correctamente la mesa', 'danger')
        } catch (error) {
            console.log(error);
        } finally {
            setCargando(false);
        }
    };

    const pedirMateria = () => {
        mostrarAlerta('Se solicito materia prima','primary')
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
        <IngredientesContext.Provider value={{
            //VARIABLES
            alerta,
            cargando,
            ingrediente,
            ingredientes,
            errores,
            mesa,
            mesas,

            //FUNCIONTS
            editarIngrediente,
            editarMesa,
            eliminarIngrediente,
            eliminarMesa,
            pedirMateria,
            setErrores,
            setCargando,
            submitIngrediente,
            submitMesa,
            obtenerIngredientes,
            obtenerIngrediente,
            setIngrediente,
            obtenerMesa

        }}>
            {children}
        </IngredientesContext.Provider>
    )
}

export default IngredientesContext;
