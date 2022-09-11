import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductosContext from "../context/ProductosProvider";
import Imagen from '../assets/img/ingredienteForm.png'

export const FormularioIngrediente = () => {


    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('fruta');
    const [unidad, setUnidad] = useState('');
    const [costo, setCosto] = useState('');

    const { id } = useParams();
    const { submitIngrediente, ingrediente } = useContext(ProductosContext);

    useEffect(() => {
        if (id) {
            setNombre(ingrediente.nombre);
            setCategoria(ingrediente.categoria);
            setUnidad(ingrediente.unidad);
            setCosto(ingrediente.costo);
        }
    });

    const handleSubmit = async e => {
        e.preventDefault();

        //crearingrediente
        await submitIngrediente({ nombre, categoria, unidad, Costo });

    };
    return (

        <>
            <div className="card mb-3" style={{
                maxWidth: '800px'
            }}>
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <img src={Imagen} className="img-fluid img-mw" alt="ImagenCiono"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ">
                            <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 aling-items-center ">

                                <label htmlFor="nombre" className='form-label mb-0 fw-bold'>Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    className='form-control'
                                    value={nombre}
                                    placeholder="Ej. Fideo"
                                    onChange={e => setNombre(e.target.value)}
                                />

                                <label htmlFor="Costo" className='form-label mb-0 fw-bold'>Costo de ingrediente (Bs.)</label>
                                <input
                                    type="text"
                                    id="Costo"
                                    name="Costo"
                                    className='form-control'
                                    value={costo}
                                    placeholder="6"
                                    onChange={e => setCosto(e.target.value)}
                                />
                                <label htmlFor="unidad" className='form-label mb-0 fw-bold'> Unidad</label>
                                <input
                                    type="text"
                                    id="unidad"
                                    name="unidad"
                                    className='form-control'
                                    value={unidad}
                                    placeholder="Unidad"
                                    onChange={e => setUnidad(e.target.value)}
                                />
                                <label htmlFor="categoria" className='form-label mb-0 fw-bold'>Categoria</label>
                                <select value={categoria} onChange={e => setCategoria(e.target.value)} className="form-select form-select-md" id="tipo" name="tipoIngrediente">
                                    <option value="Fruta">Fruta</option>
                                    <option value="Verdura">Verdura</option>
                                    <option value="Carne">Carne</option>
                                    <option value="Pescado">Pescado</option>
                                    <option value="Cereal_y_derivados">Cereal y Derivados</option>
                                </select>

                                <input type="submit" value={`${id ? 'Editar ingrediente' : 'Registrar ingrediente'}`} className='btn btn-warning text-black mt-3 text-uppercase fw-bolder mx-md-auto' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
