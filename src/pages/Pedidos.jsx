import { Link } from 'react-router-dom'

export const Pedidos = () => {

    const pedidos = ["Sopa de comida, ", "Sopa de fideo, ", "Pollo a la plancha"];
    return (
        <>

            <h2 className='fs-1 mb-4 text-primary fw-bold text-center'>PEDIDOS</h2>
            <Link to={`/cajero/${12312}`} className='w-100 bg-warning-gradient p-4 justify-content-start btn text-start mb-3'>
                <div>
                    <h4 className='text-danger fw-bold'>Codigo de pedido: 2</h4>
                    <p className='mb-1'>Productos pedidos: {''}
                        <span className='fw-bold'>
                            {
                                pedidos.map(pedido => (
                                    pedido
                                ))
                            }
                        </span>
                    </p>
                    <p className='mb-0'>Precio total: <span className='fw-bold'>575 Bs.</span></p>
                </div>

            </Link>

            <Link to={`/cajero/${12312}`} className='w-100 bg-warning-gradient p-4 justify-content-start btn text-start mb-3'>
                <div>
                    <h4 className='text-danger fw-bold'>Codigo de pedido: 2</h4>
                    <p className='mb-1'>Productos pedidos: {''}
                        <span className='fw-bold'>
                            {
                                pedidos.map(pedido => (
                                    pedido
                                ))
                            }
                        </span>
                    </p>
                    <p className='mb-0'>Precio total: <span className='fw-bold'>575 Bs.</span></p>
                </div>

            </Link>

            <Link to={`/cajero/${12312}`} className='w-100 bg-warning-gradient p-4 justify-content-start btn text-start mb-3'>
                <div>
                    <h4 className='text-danger fw-bold'>Codigo de pedido: 2</h4>
                    <p className='mb-1'>Productos pedidos: {''}
                        <span className='fw-bold'>
                            {
                                pedidos.map(pedido => (
                                    pedido
                                ))
                            }
                        </span>
                    </p>
                    <p className='mb-0'>Precio total: <span className='fw-bold'>575 Bs.</span></p>
                </div>

            </Link>

        
        </>
    )
}
