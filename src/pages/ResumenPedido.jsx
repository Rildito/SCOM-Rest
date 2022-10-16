import { useContext } from "react"
import PedidoContext from "../context/PedidosProvider"
import Image from '../assets/img/comida.png';


export const ResumenPedido = () => {

    const { pedido } = useContext(PedidoContext);

    return (
        <>
            {
                pedido?.map(producto => (
                    <div className="card mb-3" style="max-width: 540px;" key={producto.idproducto}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{producto?.nombre}</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
