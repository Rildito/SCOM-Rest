import Imagen from '../assets/img/logo.png'

export const Header = () => {
    return (
        <header class="header px-5 vh-100 vw-100 d-flex justify-content-center flex-column">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={Imagen} alt="logo_imagen" className='img-fluid logo' width={250} />
                </a>
                <button className="navbar-toggler border border-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon my-toggle"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link text-white" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Contactanos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Sugerencias</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className='h-100 d-flex justify-content-center align-items-center flex-column text-white w-100'>
                <h1 className="text-big fw-semibold">SCOM-Rest</h1>
                <p className='py-5 text-center w-50'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos voluptatibus doloremque sit fuga similique, sapiente minima temporibus tenetur optio architecto perferendis voluptatibus doloremque sit fuga similique, sapiente minima temporibus tenetur optio architecto perferendis</p>
            </div>
        </header>
    )
}
