import { useContext } from 'react';
import Imagen from '../assets/img/logo.png'
import AuthContext from '../context/AuthProvider';

export const Header = ({ enlace, scrollToSection, referencias }) => {
    const { inicio, nosotros, productos, contactanos, sugerencias } = referencias;
    const { auth } = useContext(AuthContext);

    const handleClick = () => {

    };

    return (
        <header className="header px-sm-5 px-2 vh-100 d-flex justify-content-center flex-column" ref={enlace}>

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <li className="navbar-brand pointer list-unstyled" onClick={() => scrollToSection(inicio)}>
                        <img src={Imagen} alt="logo_imagen" className='img-fluid logo' width="250px" />
                    </li>
                    <button className="navbar-toggler border border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon my-toggle"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto text-center d-flex gap-lg-5 gap-3">
                            <li className="nav-item active text-white pointer" onClick={() => scrollToSection(inicio)}>Inicio</li>
                            <li className="nav-item active text-white pointer" onClick={() => scrollToSection(nosotros)}>Sobre Nosotros</li>
                            <li className="nav-item active text-white pointer" onClick={() => scrollToSection(productos)}>Productos</li>
                            <li className="nav-item active text-white pointer" onClick={() => scrollToSection(contactanos)}>Contactanos</li>
                            <li className="nav-item active text-white pointer" onClick={() => scrollToSection(sugerencias)}>Preguntas frecuentes</li>
                            {
                                (Object.entries(auth).length !== 0 && <li className="nav-item active text-primary pointer fw-bold" onClick={handleClick}>CERRAR SESION</li>)
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
