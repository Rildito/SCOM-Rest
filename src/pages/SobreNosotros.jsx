import { useContext } from 'react';
import Imagen from '../assets/img/logo.png';
import AuthContext from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export const SobreNosotros = () => {

    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);

    const handleClick = () => {
        navigate('/');
    };

    useEffect(() => {
        window.scrollTo({
            top: 0
        });
    }, [])

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <nav className="navbar navbar-expand-lg shadow w-100 mb-4 px-md-5 px-2">
                <div className="container-fluid justify-content-md-between justify-content-center">
                    <li className="navbar-brand pointer list-unstyled" onClick={handleClick}>
                        <img src={Imagen} alt="logo_imagen" className='img-fluid logo' width="225px" />
                    </li>

                    <div className="navbar-nav text-center d-flex gap-lg-5 gap-3">
                        {/* {
                        (Object.entries(auth).length === 0 && <li className="nav-item active text-black pointer fw-bold mt-lg-0 mt-3" onClick={handleClick}>LOG IN</li>)
                    } */}

                        {
                            (Object.entries(auth).length === 0 &&
                                <li className="nav-item dropdown">
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
            <h1 className='text-primary fw-semibold text-center mb-5'>SOBRE NOSOTROS</h1>
            <div className='container mb-5'>
                <div className="card mb-md-5 border-0">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <img src={Imagen} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body ms-md-5">
                                <h5 className="card-title text-danger fs-3">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-md-3 border-0">
                    <div className="row g-0 flex-md-row flex-column-reverse">
                        <div className="col-md-7">
                            <div className="card-body me-3">
                                <h5 className="card-title text-danger fs-3">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img src={Imagen} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="card mb-md-5 border-0">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <img src={Imagen} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body ms-md-5">
                                <h5 className="card-title text-danger fs-3">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 border-0">
                    <div className="row g-0 flex-md-row flex-column-reverse">
                        <div className="col-md-7">
                            <div className="card-body me-3">
                                <h5 className="card-title text-danger fs-3">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img src={Imagen} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
