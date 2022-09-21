import { Modal } from 'bootstrap';
import { useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';
import ProductosContext from '../context/ProductosProvider';

export function ModalProducto() {
    const { modal, setModal } = useContext(ProductosContext);
    const { auth } = useContext(AuthContext);
    const exampleModal = useRef()
    const navigate = useNavigate();

    const handleIniciarSesion = () => {
        modal.hide();
        navigate("/login");
    };

    const handlePedirProducto = () => {
        
        

        modal.hide();
    };


    useEffect(() => {
        setModal(
            new Modal(exampleModal.current)
        )
    }, [])

    return (
        <>

            <div className="modal fade" ref={exampleModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">PEDIDO</h5>
                            <button type="button" className="btn-close" onClick={() => modal.hide()} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Si quiere realizar un pedido debe de iniciar sesion
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            {
                                auth.ci ? (<button type="button" className="btn btn-primary text-uppercase" onClick={handlePedirProducto}>PEDIR</button>) : (<button type="button" className="btn btn-danger text-uppercase" onClick={handleIniciarSesion}>INICIAR SESION</button>)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
