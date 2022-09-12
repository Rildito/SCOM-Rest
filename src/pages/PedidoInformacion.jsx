import { useNavigate, useParams } from 'react-router-dom'

export const PedidoInformacion = () => {

    const navigate = useNavigate();
    const { idPedido } = useParams();
    const productos = [

    ];

    const handleCobrar = () => {
        console.log("hola");
        navigate(`/cajero/${idPedido}/cobrar`)
    };
    return (
        <>
            <div className='w-100 container d-flex align-items-center flex-column'>
                <h2 className='text-primary fw-bold'>INFORMACION DE PEDIDO</h2>
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
                <div className='mt-3 w-100 d-flex justify-content-center'>
                    <div>
                        <button onClick={handleCobrar} className='btn btn-primary mt-1 mb-3 w-sm-auto w-100 text-uppercase'>Realizar Cobro</button>
                    </div>
                </div>
            </div>
        </>
    )
}
