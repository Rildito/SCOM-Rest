import { useNavigate, useParams } from 'react-router-dom'
import Imagen from '../assets/img/logo.png';
import { formatearFecha } from '../helpers/formatearFecha';
export const PedidoVisualizacion = () => {

    const navigate = useNavigate();
    const { idPedido } = useParams();
    const productos = [

    ];

    const handleCobrar = () => {
        window.print();
    };
    return (
        <>
            <div className='w-100 container d-flex align-items-center flex-column container-print'>
                <h2 className='text-primary fw-bold hide-on-print'>VISUALIZACION DE PEDIDO</h2>
                <div className='d-flex align-items-center justify-content-around w-100 column'>
                    {/* <img src={Imagen} alt="Imagen logo" style={{
                        maxWidth: "10rem"
                    }} /> */}

                    <p className=''>Nombre Establecimiento: <span className='fw-bold'>Scom Rest</span></p>
                    <p>NIT Local: <span className='fw-bold'>12412512</span></p>
                    <p>Factura Electronica: <span className='fw-bold'>125125</span></p>
                </div>

                <div className='d-flex align-items-center justify-content-around w-100 column'>
                    <p>Nombre Cliente: <span className='fw-bold'>Jorge Perer Sandoval</span></p>
                    <p>CI/NIT: <span className='fw-bold'>12412512</span></p>
                    <p>Fecha: <span className='fw-bold'>{formatearFecha('2022/05/12')}</span></p>
                </div>
                <div className='mt-3 table-wrapper-scroll-y my-custom-scrollbar-usuario w-100 border'>
                    <table className="table bg-white">
                        <thead className='text-center table-dark'>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio Unitario</th>
                                <th scope="col">Sub Total</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                productos?.map(ingre => (
                                    <tr key={ingre.codIngrediente} className="align-middle">
                                        <td>{ingre.Nombre}</td>
                                        <td>{ingre.Categoria}</td>
                                        <td>{ingre.Unidad}</td>
                                        <td className='d-flex gap-1 justify-content-center'>{ingre.costo}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className='mt-3 w-100 d-flex justify-content-between'>
                    <button onClick={handleCobrar} className='btn btn-primary mt-1 mb-3 w-sm-auto w-100 text-uppercase hide-on-print'>Imprimir</button>
                    <h5 className='text-print'>Total: 125Bs.</h5>
                </div>
            </div>
        </>
    )
}
