import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Imagen from '../assets/img/logo.png'
import AuthContext from '../context/AuthProvider';
import PedidoContext from '../context/PedidosProvider';

export const Header = ({ enlace, scrollToSection, referencias }) => {

    const navigate = useNavigate();
    const { inicio, nosotros, productos, contactanos, sugerencias } = referencias;
    const { auth, setAuth, handleCerrarSesion } = useContext(AuthContext);
    const { pedido } = useContext(PedidoContext);

    const handleClick = () => {
        navigate('/login');
    };

    const handleModificarDatos = () => {
        console.log('Modificando datos')
    };

    return (
        <header className="header px-sm-5 px-2 vh-100 d-flex justify-content-center flex-column" ref={enlace}>

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid justify-content-sm-between justify-content-center">
                    <li className="navbar-brand pointer list-unstyled" onClick={() => scrollToSection(inicio)}>
                        <img src={Imagen} alt="logo_imagen" className='img-fluid logo' width="225px" />
                    </li>
                    <button className="navbar-toggler border border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon my-toggle"></span>
                    </button>
                    <div className="collapse navbar-collapse mt-sm-0 mt-3" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto text-center d-flex gap-lg-5 gap-3">
                            <li className="nav-item active text-white pointer" onClick={() => scrollToSection(inicio)}>Inicio</li>
                            <li className="nav-item active text-white pointer" onClick={() => scrollToSection(nosotros)}>Sobre Nosotros</li>
                            <li className="nav-item active text-white pointer" onClick={() => scrollToSection(productos)}>Productos</li>
                            <li className="nav-item active text-white pointer" onClick={() => scrollToSection(contactanos)}>Contactanos</li>
                            <li className="nav-item active text-white pointer" onClick={() => scrollToSection(sugerencias)}>Preguntas frecuentes</li>

                        </div>
                        <div className="navbar-nav ms-auto text-center d-flex gap-lg-5 gap-3 ms-0">

                            {
                                (Object.entries(auth).length === 0 && <li className="nav-item active text-white pointer fw-bold mt-lg-0 mt-3" onClick={handleClick}>LOG IN</li>)
                            }

                            {
                                (Object.entries(auth).length > 0 &&
                                    <li className="nav-item dropdown mt-lg-0 mt-3">
                                        <a className="nav-link dropdown-toggle text-white p-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Hola: <span className='fw-bold'>{auth.nombreUsuario}</span>
                                        </a>
                                        <ul className="dropdown-menu" style={{
                                            margin: 0
                                        }}>
                                            <button className="dropdown-item" onClick={handleCerrarSesion}>Cerrar Sesion</button>
                                            <button className="dropdown-item" onClick={handleModificarDatos}>Modificar Datos</button>
                                        </ul>
                                    </li>)
                            }

                        </div>
                    </div>
                </div>
            </nav>

            <div className='h-100 d-flex justify-content-center align-items-center flex-column text-white w-100'>
                <h1 className="text-big-md text-big fw-semibold">SCOM-Rest</h1>
                <p className='py-5 text-center w-md-50 w-100'>El mejor lugar para disfrutar de un exquisito platillo</p>
            </div>
        </header>


    )
}
