import { useContext } from 'react';
import Imagen from '../assets/img/logo.png';
import Imagen0 from '../assets/img/img1.jpg';
import Imagen1 from '../assets/img/image2.jfif';
import Imagen2 from '../assets/img/img4.jfif';
import Imagen3 from '../assets/img/img5.jpg';
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
                            <img src={Imagen0} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body ms-md-5">
                                <h5 className="card-title text-danger fs-3">¿Por que elegirnos?</h5>
                                <p className="card-text">Somos el mejor lugar para disfrutar de excelentes platillos, para compartirlos en familia o personalmente.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-md-3 border-0">
                    <div className="row g-0 flex-md-row flex-column-reverse">
                        <div className="col-md-7">
                            <div className="card-body me-3">
                                <h5 className="card-title text-danger fs-3">Nuestros Expertos</h5>
                                <p className="card-text">Scom-Rest cuenta con los mejores chefs internacionalmente</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img src={Imagen3} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="card mb-md-5 border-0">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <img src={Imagen1} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body ms-md-5">
                                <h5 className="card-title text-danger fs-3">Un concepto nuevo</h5>
                                <p className="card-text"> Modernos en el estilo y clásicos en el sabor.

                                    Un equipo de profesionales que hemos creado el restaurante donde nos gustaría comer a diario y en las ocasiones especiales. Con menú o a la carta. Con amigos o con clientes, con tiempo para disfrutar o con algo más de prisa porque el trabajo lo requiere.

                                </p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 border-0">
                    <div className="row g-0 flex-md-row flex-column-reverse">
                        <div className="col-md-7">
                            <div className="card-body me-3">
                                <h5 className="card-title text-danger fs-3">PENSANDO EN TI</h5>
                                <p className="card-text">Nuestra cocina abierta responde a la necesidad de compartir nuestra pasión con los clientes. Nos gusta lo que hacemos y nos gusta que lo veas.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img src={Imagen3} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
