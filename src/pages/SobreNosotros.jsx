import { useContext } from 'react';
import Imagen from '../assets/img/logo.png';
import Imagen0 from '../assets/img/img1.jpg';
import Imagen1 from '../assets/img/image2.jfif';
import Imagen2 from '../assets/img/img3.jpg';
import Imagen3 from '../assets/img/img5.jpg';
import AuthContext from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ScrollToTop } from '../components';
export const SobreNosotros = () => {

    const navigate = useNavigate();
    const { auth, handleCerrarSesion } = useContext(AuthContext);

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
                            (Object.entries(auth).length > 0 &&
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-black p-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Hola: <span className='fw-bold'>{auth.nombreUsuario}</span>
                                    </a>
                                    <ul className="dropdown-menu" style={{ margin: 0 }} >
                                        <button className="dropdown-item" onClick={handleCerrarSesion}>Cerrar Sesion</button>
                                    </ul>
                                </li>)
                        }

                    </div>

                </div>
            </nav>
            <h1 className='text-primary fw-semibold text-center mb-5'>SOBRE NOSOTROS</h1>
            <div className='container-md mb-5'>
                <div className="card mb-md-5 border-0">
                    <div className="row g-0">
                        <div className="col-md-5 d-flex align-items-center justify-content-center">
                            <img src={Imagen0} className="img-fluid rounded-start w-100 rounded" alt="..." />
                        </div>
                        <div className="col-md-7 d-flex align-items-center justify-content-center">
                            <div className="card-body ms-md-5">
                                <h5 className="card-title text-danger fs-3">¿Por que elegirnos?</h5>
                                <p className="card-text">SCom-Rest es un restaurante con una gran trayectoria, comprometido con la innovación la creatividad y el servicio. Brindamos a nuestro clientes una amplia gama de comidas y bebidas nacionales e internacionales, satisfaciendo las necesidades de nuestro clientes, preparando productos y servicios de excelente calidad</p>
                                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-md-5 border-0">
                    <div className="row g-0 flex-md-row flex-column-reverse">
                        <div className="col-md-7 d-flex align-items-center justify-content-center">
                            <div className="card-body me-3">
                                <h5 className="card-title text-danger fs-3">Un nuevo concepto</h5>
                                <p className="card-text">Somos un restaurante dedicado a brindar momentos inolvidables y servicios gastronómicos de alta
                                    calidad; ponemos todo nuestro “amor” y máximo empeño en beneficio de nuestros clientes;
                                    desarrollamos nuestro servicio a partir de los talentos y los valores de nuestros
                                    colaboradores, somos un restaurante que día a día lucha por desarrollar mejores condiciones
                                    laborales y un mejor nivel de vida para nuestros colaboradores y sus familias, en beneficio de
                                    la organización.</p>
                                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                        <div className="col-md-5 d-flex align-items-center justify-content-center">
                            <img src={Imagen1} className="img-fluid rounded-start w-100 rounded" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="card mb-md-5 border-0">
                    <div className="row g-0">
                        <div className="col-md-5 d-flex align-items-center justify-content-center">
                            <img src={Imagen2} className="img-fluid rounded-start w-100 rounded" alt="..." />
                        </div>
                        <div className="col-md-7 d-flex align-items-center justify-content-center">
                            <div className="card-body ms-md-5">
                                <h5 className="card-title text-danger fs-3">Nuestros Expertos</h5>
                                <p className="card-text"> Modernos en el estilo y clásicos en el sabor.

                                    Un equipo de profesionales que hemos creado el restaurante donde nos gustaría comer a diario y en las ocasiones especiales. Con menú o a la carta. Con amigos o con clientes, con tiempo para disfrutar o con algo más de prisa porque el trabajo lo requiere.

                                </p>
                                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 border-0">
                    <div className="row g-0 flex-md-row flex-column-reverse">
                        <div className="col-md-7 d-flex align-items-center justify-content-center">
                            <div className="card-body me-3">
                                <h5 className="card-title text-danger fs-3">Pensando en ti</h5>
                                <p className="card-text">SCom-Rest provee a sus clientes la mayor experiencia gastronómica en el concepto de Restaurante de comida sana en sus estilos clasicos. Y de un servicio del mas alto valor agregado y consistente dentro y fuera de nuestras fronteras, en un ambiente acogedor y armonioso, trabajo en equipo, servicio ágil, personalizado, siempre en consonancia con la sostenibilidad y resposabilidad social.</p>
                                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                        <div className="col-md-5 d-flex align-items-center justify-content-center">
                            <img src={Imagen3} className="img-fluid rounded-start w-100 rounded" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </div>
    )
}
