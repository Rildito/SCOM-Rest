import { Link } from 'react-router-dom';
import Imagen from '../assets/img/logo.png'

export const Header = () => {
    return (
        <header className="header px-sm-5 px-2 vh-100 d-flex justify-content-center flex-column">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="#">
                    <img src={Imagen} alt="logo_imagen" className='img-fluid logo' width={250} />
                </Link>
                <button className="navbar-toggler border border-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon my-toggle"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-white" to="#">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Sobre Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#" aria-disabled="true">Contactanos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#" aria-disabled="true">Sugerencias</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className='h-100 d-flex justify-content-center align-items-center flex-column text-white w-100'>
                <h1 className="text-big-md text-big fw-semibold">SCOM-Rest</h1>
                <p className='py-5 text-center w-md-50 w-100'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos voluptatibus doloremque sit fuga similique, sapiente minima temporibus tenetur optio architecto perferendis voluptatibus doloremque sit fuga similique, sapiente minima temporibus tenetur optio architecto perferendis</p>
            </div>
        </header>


    )
}
