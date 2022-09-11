import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import IngredienteContext from "../context/IngredienteProvider";


export const FormularioIngredientes = () => {


    const [nombre, setNombre] = useState('');
    const [categoria, setcategoria] = useState('');
    const [unidad, setunidad] = useState('');
    const [costo, setCosto] = useState('');

    const { ci: id } = useParams();
    const { submitIngrediente, ingrediente } = useContext(IngredienteContext);

    useEffect(() => {
        if (id) {
            
            setNombre(ingrediente.nombre);
            setcategoria(ingrediente.categoria);
            setunidad(ingrediente.unidad);
            setCosto(ingrediente.costo);
        }
    });

    const handleSubmit = async e => {
        e.preventDefault();

        //crearingrediente
        await submitIngrediente({  nombre,categoria, unidad, Costo });
        
    };
    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 aling-items-center">

            <label htmlFor="nombre" className='form-label mb-0 fw-bold'>Nombre</label>
            <input
                type="text"
                name="nombre"
                className='form-control'
                value={nombre}
                placeholder="Ej. Papa"
                onChange={e => setNombre(e.target.value)}
            />   

            <label htmlFor="Costo" className='form-label mb-0 fw-bold'>Costo de ingrediente</label>
            <input
                type="text"
                id="Costo"
                name="Costo"
                className='form-control'
                value={costo}
                placeholder="Ej. 16.5"
                onChange={e => setCosto(e.target.value)}
            />
            <label htmlFor="unidad" className='form-label mb-0 fw-bold'> Unidad</label>
            <input
                type="date"
                id="unidad"
                name="unidad"
                className='form-control'
                value={unidad}
                onChange={e => setunidad(e.target.value)}
            />
            <label htmlFor="categoria" className='form-label mb-0 fw-bold'>Categoria</label>
            <input
                type="categoria"
                id="categoria"
                name="categoria"
                className='form-control'
                value={categoria}
                placeholder="Ej. tuberculo"
                onChange={e => setcategoria(e.target.value)}
            />

            <input type="submit" value={`${nombre ? 'Editar ingrediente' : 'Registrar ingrediente'}`} className='btn btn-warning text-black mt-3 text-uppercase fw-bolder mx-md-auto' />
        </form>
    )
}
