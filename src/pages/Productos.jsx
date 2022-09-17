import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ModalProducto, Producto } from '../components';
import ProductosContext from '../context/ProductosProvider';
import Imagen from '../assets/img/logo.png'
import AuthContext from '../context/AuthProvider';

export const Productos = () => {

    const navigate = useNavigate();

    const { productos } = useContext(ProductosContext);
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
                    <div className="navbar-nav text-center d-flex gap-lg-5 gap-3 ">
                        {
                            (Object.entries(auth).length === 0 && <li className="nav-item active text-black pointer fw-bold mt-lg-0 mt-3" onClick={handleClick}>LOG IN</li>)
                        }

                        {
                            (Object.entries(auth).length > 0 &&
                                <li className="nav-item dropdown mt-lg-0 mt-3">
                                    <a className="nav-link dropdown-toggle text-black p-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Hola: <span className='fw-bold'>Enrique123</span>
                                    </a>
                                    <ul className="dropdown-menu" style={{ margin: 0 }} >
                                        <li><a className="dropdown-item" href="#">Cerrar Sesion</a></li>
                                        <li><a className="dropdown-item" href="#">Modificar Datos</a></li>
                                    </ul>
                                </li>)
                        }

                    </div>

                </div>
            </nav>
            <h1 className='text-primary fw-semibold text-center mb-4'>NUESTROS PRODUCTOS</h1>
            <div className='row d-flex justify-content-center gap-4 w-100 mb-3'>
                <Producto />
                <Producto />
                <Producto />
                <Producto />
                <Producto />
            </div>
            <ModalProducto />
        </div >
    )
}
