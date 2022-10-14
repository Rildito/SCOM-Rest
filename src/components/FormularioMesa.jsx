import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Imagen from '../assets/img/mesaForm.png'
import IngredientesContext from "../context/IngredientesProvider";

export const FormularioMesa = () => {


    const [nroMesa, setNroMesa] = useState('');
    const [estado, setEstado] = useState('habilitado');
    const [ciCamarero, setCiCamarero] = useState('');
    const [idPedido, setIdPedido] = useState('');

    const { id } = useParams();
    const { submitMesa, mesa, errores, cargando } = useContext(IngredientesContext);

    useEffect(() => {
        if (id) {
            setNroMesa(mesa.nroMesa);
            setEstado(mesa.estado);
            setCiCamarero(mesa.ciCamarero);
            setIdPedido(mesa.idpedido);
        }
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();

        //crearingrediente
        await submitMesa({ id, nroMesa, estado, ciCamarero, idpedido: idPedido });

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
                        {
                            errores?.map(error => (
                                <p key={error} className="p-2 mt-1 mx-3 mb-0 bg-danger rounded text-white">{error}</p>
                            ))
                        }
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

                                <label htmlFor="ciCamarero" className='form-label mb-0 fw-bold'>Ci Camarero:</label>
                                <input
                                    type="text"
                                    id="ciCamarero"
                                    name="ciCamarero"
                                    className='form-control'
                                    value={ciCamarero}
                                    placeholder="Ci Camarero"
                                    onChange={e => setCiCamarero(e.target.value)}
                                />

                                <label htmlFor="idPedido" className='form-label mb-0 fw-bold'>Id pedido:</label>
                                <input
                                    type="text"
                                    id="idPedido"
                                    name="idPedido"
                                    className='form-control'
                                    value={idPedido}
                                    placeholder="rojo"
                                    onChange={e => setIdPedido(e.target.value)}
                                />

                                <input type="submit" value={`${id ? 'Editar mesa' : 'Registrar mesa'}`} className='btn btn-warning text-black mt-3 text-uppercase fw-bolder mx-md-auto' disabled={cargando ? true : false}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
