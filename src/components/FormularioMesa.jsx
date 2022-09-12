import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductosContext from "../context/ProductosProvider";
import Imagen from '../assets/img/mesaForm.png'

export const FormularioMesa = () => {


    const [nroMesa, setNroMesa] = useState('');
    const [estado, setEstado] = useState('habilitado');
    const [color, setColor] = useState('');

    const { id } = useParams();
    const { submitMesa, mesa } = useContext(ProductosContext);

    useEffect(() => {
        if (id) {
            setNroMesa(mesa.nroMesa);
            setEstado(mesa.estado);
            setNroMesa(mesa.color);
        }
    });

    const handleSubmit = async e => {
        e.preventDefault();

        //crearingrediente
        await submitMesa({ nombre, estado, color });

    };
    return (

        <>
            <div className="card mb-3" style={{
                maxWidth: '800px'
            }}>
                <div className="row g-0 py-2 px-3">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <img src={Imagen} className="img-fluid img-mw" alt="ImagenCiono" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ">
                            <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 aling-items-center ">

                                <label htmlFor="nroMesa" className='form-label mb-0 fw-bold'>NroMesa:</label>
                                <input
                                    type="text"
                                    id="nroMesa"
                                    name="nroMesa"
                                    className='form-control'
                                    value={nroMesa}
                                    placeholder="Ej. 1"
                                    onChange={e => setNroMesa(e.target.value)}
                                />

                                <label htmlFor="estado" className='form-label mb-0 fw-bold'>Estado:</label>
                                <select value={estado} onChange={e => setEstado(e.target.value)} className="form-select form-select-md" id="estado" name="tipoIngrediente">
                                    <option value="habilitado">Habilitado</option>
                                    <option value="deshabilitado">Deshabilitado</option>
                                </select>

                                <label htmlFor="color" className='form-label mb-0 fw-bold'>Color:</label>
                                <input
                                    type="text"
                                    id="color"
                                    name="color"
                                    className='form-control'
                                    value={color}
                                    placeholder="rojo"
                                    onChange={e => setColor(e.target.value)}
                                />


                                <input type="submit" value={`${id ? 'Editar mesa' : 'Registrar mesa'}`} className='btn btn-warning text-black mt-3 text-uppercase fw-bolder mx-md-auto' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
