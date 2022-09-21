import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductosContext from "../context/ProductosProvider";


export const FormularioProducto = () => {

    //PRODUCTO ELEGIDO
    const [productoElegido, setProductoElegido] = useState('platillo');

    const [nombre, setNombre] = useState('');
    const [categoria, setcategoria] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [estado, setEstado] = useState('habilitado');
    const [grado, setGrado] = useState('');

    const { id } = useParams();
    const { submitProducto, producto } = useContext(ProductosContext);

    useEffect(() => {
        if (id) {
            setNombre(producto.nombre);
            setcategoria(producto.categoria);
            setPrecio(producto.precio);
            setStock(producto.stock);
            setEstado(producto.estado);
            setGrado(producto.grado);
        }
    });

    const handleSubmit = async e => {
        e.preventDefault();

        //crearProducto
        await submitProducto({ nombre, categoria, setPrecio });

    };

    const handleProducto = producto => {
        setProductoElegido(producto);
    };
    return (
        <div className="w-md-40 w-100 px-md-0 px-3">
            <div className="d-flex justify-content-between my-3 flex-md-row flex-column gap-2">
                <button className={`btn ${productoElegido === 'platillo' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleProducto('platillo')}>PLATILLO</button>
                <button className={`btn ${productoElegido === 'bebida' ? 'btn-secondary' : 'btn-outline-secondary'}`} onClick={() => handleProducto('bebida')}>BEBIDA</button>
            </div>
            <form method="POST" className="shadow-lg p-5 w-md-25" encType="multipart/form-data">

                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label fw-semibold">Nombre:</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ej. Aji de fideo" value={nombre} onChange={() => setNombre(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="precio" className="form-label fw-semibold">Precio:</label>
                    <input type="number" className="form-control" id="precio" name="precio" min="1" step="0.01" value={precio} onChange={() => setPrecio(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="imagen" className="form-label fw-semibold">Elige una imagen:</label>
                    <input type="file" className="form-control" id="imagen" name="imagen" accept="image/jpeg, image/png" />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="descripcion">Descripcion:</label>
                    <textarea className="form-control" name="descripcion" id="descripcion" rows="3"></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="estado" className='form-label fw-bold'>Estado</label>
                    <select value={estado} onChange={e => setEstado(e.target.value)} className='form-select'>
                        <option value="habilitado">Habilitado</option>
                        <option value="deshabilitado">Deshabilitado</option>
                    </select>
                </div>
                {
                    productoElegido === 'platillo' ? (<div className="mb-3">
                        <label htmlFor="stock" className="form-label fw-bold">Stock:</label>
                        <input type="number" className="form-control" id="stock" name="stock" min="1" value={stock} onChange={() => setStock(e.target.value)} />
                    </div>
                    ) : (<div className="mb-3">
                        <label htmlFor="grado" className="form-label fw-bold">Grado Alcoholico:</label>
                        <input type="number" className="form-control" id="grado" name="grado" min="1" value={grado} onChange={() => setGrado(e.target.value)} />
                    </div>)
                }


                <p className="fw-semibold">Ingredientes:</p>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                FRUTAS y VERDURAS
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                CARNES Y PESCADOS
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                CEREALES Y DERIVADOS
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">

                        </div>
                    </div>
                </div>

                <div className="d-grid mt-3">
                    <input type="submit" className="btn btn-warning text-uppercase fw-bold" value={`${id ? productoElegido === 'platillo' ? 'Actualizar platillo' : 'Actualizar Bebida' : productoElegido === 'platillo' ? 'Registrar platillo' : 'Registrar Bebida'} `} />
                </div>
            </form>
        </div>

    )
}
