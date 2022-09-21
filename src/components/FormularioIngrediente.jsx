import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductosContext from "../context/ProductosProvider";
import Imagen from '../assets/img/ingredienteForm.png'
import { obtenerEdad } from "../helpers/formatearFecha";

export const FormularioIngrediente = () => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [tipo, setTipo] = useState('fruta');

    const { id } = useParams();
    const { submitIngrediente, ingrediente } = useContext(ProductosContext);

    useEffect(() => {
        if (id) {
            setNombre(ingrediente.nombre);
            setCantidad(ingrediente.cantidad);
            setTipo(ingrediente.tipo);
        }
    });

    const handleSubmit = async e => {
        e.preventDefault();

        // console.log(nombre, tipo, cantidad);
        //crearingrediente
        await submitIngrediente({ nombre, cantidad, tipo });

    };
    return (

        <>
            <div className="card mb-3" style={{
                maxWidth: '800px'
            }}>
                <div className="row g-0 px-4">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <img src={Imagen} className="img-fluid img-mw" alt="ImagenIcono" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ">
                            <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 aling-items-center ">

                                <label htmlFor="nombre" className='form-label mb-0 fw-bold'>Nombre</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    className='form-control'
                                    value={nombre}
                                    placeholder="Ej. Fideo"
                                    onChange={e => setNombre(e.target.value)}
                                />

                                <label htmlFor="cantidad" className='form-label mb-0 fw-bold'>Cantidad</label>
                                <input
                                    type="number"
                                    id="cantidad"
                                    name="cantidad"
                                    className='form-control'
                                    value={cantidad}
                                    step={"1"}
                                    placeholder="0"
                                    onChange={e => setCantidad(e.target.value)}
                                />
                                <label htmlFor="tipo" className='form-label mb-0 fw-bold'>Tipo</label>
                                <select value={tipo} onChange={e => setTipo(e.target.value)} className="form-select form-select-md" id="tipo" name="tipoIngrediente">
                                    <option value="fruta">Fruta</option>
                                    <option value="hortaliza">Hortaliza</option>
                                    <option value="tuberculo">Tuberculo</option>
                                    <option value="cereal">Pescado</option>
                                    <option value="carne">Cereal y Derivados</option>
                                    <option value="marisco">Cereal y Derivados</option>
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
