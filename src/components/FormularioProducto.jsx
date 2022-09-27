import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductosContext from "../context/ProductosProvider";
import makeAnimated from 'react-select/animated';

export const FormularioProducto = () => {

    //PRODUCTO ELEGIDO
    const [productoElegido, setProductoElegido] = useState('platillo');

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [imagen, setImagen] = useState('');
    const [estado, setEstado] = useState('habilitado');
    const [grado, setGrado] = useState('');

    const { idproducto } = useParams();
    const { submitProducto, producto, cargando, errores, tipoProducto } = useContext(ProductosContext);

    useEffect(() => {
        if (idproducto) {
            setNombre(producto.nombre);
            setPrecio(producto.precio);
            setStock(producto.stock);
            setEstado(producto.estado);
            setGrado(producto.grado);
        }
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();

        //crearProducto
        await submitProducto({ nombre, precio, stock, imagen, estado, grado, productoElegido });

    };

    const uploadImage = async e => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setImagen(base64);
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const handleProducto = producto => {
        setProductoElegido(producto);
        setNombre('');
        setPrecio('');
        setStock('');
        setEstado('');
        setGrado('');
    };
    return (
        <div className="w-md-40 w-100 px-3 pb-sm-0 pb-4">
            <form onSubmit={handleSubmit} className="shadow-lg p-4 w-md-25">
                {
                    errores.map(error => (
                        <p key={error} className="w-100 p-2 mb-1 bg-danger rounded text-white">{error}</p>
                    ))
                }
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label fw-semibold">Nombre:</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ej. Aji de fideo" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="precio" className="form-label fw-semibold">Precio:</label>
                    <input type="number" className="form-control" id="precio" name="precio" min="1" step="0.01" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="imagen" className="form-label fw-semibold">Elige una imagen:</label>
                    <input type="file" className="form-control" id="imagen" name="imagen" accept="image/jpeg, image/png" onChange={e => uploadImage(e)} />
                </div>

                {Boolean(imagen) && <img src={`${imagen}`} height={200} className="img-fluid w-md-50" />
                }
                {/* <div className="form-group mb-3">
                    <label htmlFor="descripcion">Descripcion:</label>
                    <textarea className="form-control" name="descripcion" id="descripcion" rows="3"></textarea>
                </div> */}

                <div className="mb-3">
                    <label htmlFor="estado" className='form-label fw-bold'>Estado</label>
                    <select value={estado} onChange={e => setEstado(e.target.value)} className='form-select'>
                        <option value="habilitado">Habilitado</option>
                        <option value="deshabilitado">Deshabilitado</option>
                    </select>
                </div>
                {
                    tipoProducto === 'platillo' ? (
                        <>
                            <div className="mb-3">
                                <label htmlFor="stock" className="form-label fw-bold">Stock:</label>
                                <input type="number" className="form-control" id="stock" name="stock" min="1" value={stock} onChange={(e) => setStock(e.target.value)} />
                            </div>
                        </>
                    ) : (<div className="mb-3">
                        <label htmlFor="grado" className="form-label fw-bold">Grado Alcoholico:</label>
                        <input type="number" className="form-control" id="grado" name="grado" min="1" value={grado} onChange={(e) => setGrado(e.target.value)} />
                    </div>)
                }

                <div className="d-grid mt-3">
                    <input type="submit" className="btn btn-warning text-uppercase fw-bold" value={`${idproducto ? tipoProducto === 'platillo' ? 'Actualizar platillo' : 'Actualizar Bebida' : tipoProducto === 'platillo' ? 'Registrar platillo' : 'Registrar Bebida'} `}
                        disabled={cargando ? true : false} />
                </div>
            </form>
        </div>

    )
}
