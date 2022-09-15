import { useContext } from 'react';
import { ModalCobro } from '../components';
import ProductosContext from '../context/ProductosProvider';

export const PedidoInformacion = () => {

    const { modalCobro } = useContext(ProductosContext);
    const productos = [
        {
            codProducto: 1,
            nombre: 'Bistec al horno',
            cantidad: 4,
            precio: 17.50
        },
        {
            codProducto: 2,
            nombre: 'Pollo a la brasa',
            cantidad: 2,
            precio: 15
        },
        {
            codProducto: 3,
            nombre: 'Silpancho ahumado',
            cantidad: 1,
            precio: 15
        },
        {
            codProducto: 4,
            nombre: 'Trucha hervida',
            cantidad: 2,
            precio: 20
        },

    ];

    const handleCobrar = () => {
        modalCobro.show();
    };

    let total = 0;
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
                                productos?.map(producto => {
                                    total += (producto.precio * producto.cantidad)
                                    return (
                                        <tr key={producto.codProducto} className="align-middle">
                                            <td>{producto.nombre}</td>
                                            <td>{producto.cantidad}</td>
                                            <td>{producto.precio} Bs.</td>
                                            <td>{producto.precio * producto.cantidad} Bs.</td>
                                        </tr>
                                    )
                                }
                                )
                            }
                            <tr>
                                <td colSpan={"4"}>TOTAL: {total} Bs.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='mt-3 w-100 d-flex justify-content-center'>
                    <div>
                        <button onClick={handleCobrar} className='btn btn-primary mt-1 mb-3 w-sm-auto w-100 text-uppercase'>Realizar Cobro</button>
                    </div>
                </div>
            </div>
            <ModalCobro />
        </>
    )
}
