import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Imagen from '../assets/img/ingredienteForm.png'
import IngredientesContext from "../context/IngredientesProvider";

export const FormularioIngrediente = () => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [tipo, setTipo] = useState('fruta');

    const { codIngrediente } = useParams();
    const { submitIngrediente, ingrediente, errores, cargando, setErrores } = useContext(IngredientesContext);

    useEffect(() => {
        if (codIngrediente) {
            setNombre(ingrediente?.nombre);
            setCantidad(ingrediente?.cantidad);
            setTipo(ingrediente?.tipo);
        }
        setErrores([]);
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();

        // console.log(nombre, tipo, cantidad);
        //crearingrediente
        await submitIngrediente({ codingrediente: codIngrediente, nombre, cantidad, tipo });
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
                        {
                            errores?.map(error => (
                                <p key={error} className="p-2 mt-1 mx-3 mb-0 bg-danger rounded text-white">{error}</p>
                            ))
                        }
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
                                <select value={tipo} onChange={e => setTipo(e.target.value)} className="form-select form-select-md" id="tipo" name="tipo">
                                    <option value="fruta">Fruta</option>
                                    <option value="hortaliza">Hortaliza</option>
                                    <option value="tuberculo">Tuberculo</option>
                                    <option value="cereal">Cereal</option>
                                    <option value="carne">Carne</option>
                                    <option value="marisco">Marisco</option>
                                </select>

                                <input type="submit" value={`${codIngrediente ? 'Editar ingrediente' : 'Registrar ingrediente'}`} className='btn btn-warning text-black mt-3 text-uppercase fw-bolder mx-md-auto' disabled={cargando ? true : false} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
 
        </>
    )
}
