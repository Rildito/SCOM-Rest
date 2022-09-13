import { Modal } from 'bootstrap';
import { useEffect, useRef, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductosContext from '../context/ProductosProvider';

export function ModalCobro() {
    const { modalCobro, setModalCobro } = useContext(ProductosContext);
    const exampleModal = useRef()
    const navigate = useNavigate();

    const { idPedido } = useParams();
    const handleClick = () => {
        modalCobro.hide();
        navigate(`/cajero/${idPedido}/visualizacion`)
    };

    useEffect(() => {
        setModalCobro(
            new Modal(exampleModal.current)
        )
    }, [])

    return (
        <>

            <div className="modal fade" ref={exampleModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">PROCESO DE PAGO</h5>
                            <button type="button" className="btn-close" onClick={() => modalCobro.hide()} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Confirmar Cobro
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            {/* <button type="button" className="btn btn-secondary" onClick={() => modal.hide()}>Close</button> */}
                            <button type="button" className="btn btn-primary text-uppercase" onClick={handleClick}>CONFIRMAR COBRO</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
