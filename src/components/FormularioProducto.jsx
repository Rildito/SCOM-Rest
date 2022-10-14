import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductosContext from "../context/ProductosProvider";
//import makeAnimated from 'react-select/animated';
import Select from 'react-select'
import IngredientesContext from "../context/IngredientesProvider";


export const FormularioProducto = () => {


    const { ingredientes: ingres } = useContext(IngredientesContext);

    const options = ingres.map(ingrediente => (
        { value: ingrediente.codingrediente, label: ingrediente.nombre }
    ))



    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [imagen, setImagen] = useState('');
    const [estado, setEstado] = useState('habilitado');
    const [gradoAlcoholico, setGradoAlcoholico] = useState('');
    const [ingre, setIngredientes] = useState([]);

    //SELECT
    const { idproducto } = useParams();
    const { submitProducto, producto, cargando, errores, tipoProducto } = useContext(ProductosContext);
    //const animatedComponents = makeAnimated();

    const valoresDefecto = producto[1]?.map(ingrediente => ({
        value: ingrediente.codingrediente, label: ingrediente.nombre
    }))

    useEffect(() => {
        if (idproducto) {

            if (producto[0]?.nombre) {          //TODO: no me envian en el formato correcto
                setNombre(producto[0]?.nombre);
                setPrecio(producto[0]?.precio);
                setStock(producto[0]?.stock);
                setEstado(producto[0]?.estado);
                setImagen(producto[0]?.imagen);
            } else { //bebida
                setNombre(producto.nombre);     //No puedo editar productos me da error circular structure
                setPrecio(producto.precio);
                setStock(producto.stock);
                setEstado(producto.estado);
                setGradoAlcoholico(producto.gradoAlcoholico);
                setImagen(producto.imagen);
            }

            //console.log(producto[0]);
            //console.log(producto);
        }
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();

        let ingredientes;

        ingredientes = ingre.map(ingredienteState => (ingredienteState.value))

        if (ingredientes.length === 0 && idproducto && tipoProducto === 'platillo') {
            ingredientes = valoresDefecto.map(ingredienteState => (ingredienteState.value))
        }

        //crearProducto
        await submitProducto({ idproducto: Number(idproducto), nombre, precio: Number(precio), stock: Number(stock), imagen, estado, gradoAlcoholico, ingredientes, tipoProducto });

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

    return (
        <>
            <div className="w-md-50 w-100 px-3 pb-sm-0 pb-4">
                <form onSubmit={handleSubmit} className="shadow-lg p-4">
                    {
                        errores.map(error => (
                            <p key={error} className="w-100 p-2 mb-1 bg-danger rounded text-white">{error}</p>
                        ))
                    }
                    <div className="row">
                        <div className="col-6">
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
                        </div>

                        <div className="col-6">

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

                                        <div className="mb-4">
                                            <label htmlFor="stock" className="form-label fw-bold">Ingredientes:</label>
                                            <Select
                                                closeMenuOnSelect={false}
                                                //components={animatedComponents}
                                                isMulti
                                                options={options}
                                                defaultValue={valoresDefecto}
                                                onChange={(choice) => {
                                                    setIngredientes(choice);
                                                }}
                                            />
                                        </div>

                                    </>
                                ) : (<div className="mb-3">
                                    <label htmlFor="grado" className="form-label fw-bold">Grado Alcoholico:</label>
                                    <input type="number" className="form-control" id="grado" name="grado" min="0" value={gradoAlcoholico} onChange={(e) => setGradoAlcoholico(e.target.value)} />
                                </div>)
                            }
                        </div>
                    </div>



                    {/* <div className="form-group mb-3">
                    <label htmlFor="descripcion">Descripcion:</label>
                    <textarea className="form-control" name="descripcion" id="descripcion" rows="3"></textarea>
                </div> */}



                    <div className="d-grid mt-3">
                        <input type="submit" className="btn btn-warning text-uppercase fw-bold" value={`${idproducto ? tipoProducto === 'platillo' ? 'Actualizar platillo' : 'Actualizar Bebida' : tipoProducto === 'platillo' ? 'Registrar platillo' : 'Registrar Bebida'} `}
                            disabled={cargando ? true : false} />
                    </div>
                </form>
            </div>
        </>
    )
}
