import { useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { ModalProducto, Productos as Products } from '../components';
import ProductosContext from '../context/ProductosProvider';
import Imagen from '../assets/img/logo.png'
import AuthContext from '../context/AuthProvider';
import { ToastContainer } from 'react-toastify';
import PedidoContext from '../context/PedidosProvider';

export const Productos = () => {

    const navigate = useNavigate();

    const { pedido } = useContext(PedidoContext);
    const { auth } = useContext(AuthContext);

    const handleClick = () => {
        navigate('/');
    };

    useEffect(() => {

    }, [])

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <nav className="navbar navbar-expand-lg shadow w-100 mb-4 px-md-5 px-0">
                <div className="container-fluid justify-content-md-between justify-content-center">
                    <li className="navbar-brand pointer list-unstyled" onClick={handleClick}>
                        <img src={Imagen} alt="logo_imagen" className='img-fluid logo' width="225px" />
                    </li>
                    {
                        pedido.length > 0 && (<Link className="nav-item pointer fw-bold text-decoration-none mb-sm-0 mb-3 d-block ms-auto me-md-2" to={"/pedido"}>Resumen Pedido</Link>)
                    }

                    <div className="navbar-nav text-center d-flex gap-lg-5 gap-3 align-items-center">
                        {
                            (Object.entries(auth).length === 0 && <li className="nav-item active text-black pointer fw-bold mt-lg-0 mt-3" onClick={handleClick}>LOG IN</li>)
                        }

                        {
                            (Object.entries(auth).length > 0 &&
                                <>
                                    <li className="nav-item dropdown mt-sm-0 mt-3 d-sm-flex gap-2">
                                        <Link className="nav-link dropdown-toggle text-black p-0" to={"/pedido"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Hola: <span className='fw-bold'>{auth.nombreUsuario}</span>
                                        </Link>
                                        <ul className="dropdown-menu" style={{ margin: 0 }} >
                                            <li><Link className="dropdown-item" to="#">Cerrar Sesion</Link></li>
                                            <li><Link className="dropdown-item" to="#">Modificar Datos</Link></li>
                                        </ul>
                                    </li>
                                </>)
                        }

                    </div>

                </div>
            </nav >
            <h1 className='text-primary fw-semibold text-center mb-4'>NUESTROS PRODUCTOS</h1>
            <div className='row d-flex justify-content-center gap-4 w-100 mb-3'>
                <Products />
            </div>
            <ModalProducto />
            <ToastContainer />
        </div >
    )
}
