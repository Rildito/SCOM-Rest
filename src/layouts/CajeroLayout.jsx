import { useEffect, useContext, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom'

import Imagen from '../assets/img/logo.png';
import AuthContext from '../context/AuthProvider';
import PedidoContext from '../context/PedidosProvider';

export const CajeroLayout = () => {

    const navigate = useNavigate();
    const { setPedidosBuscados, pedidos, setValue, value, pedidosCobro } = useContext(PedidoContext);
    const { auth, handleCerrarSesion } = useContext(AuthContext);

    const [pathPrincipal, setPathPrincipal] = useState(false);

    const handleSearch = (e) => {

        setValue(e.target.value);
        const pedidosBuscados = pedidos.filter(pedido => pedido.idpedido.toString().includes(e.target.value));
        if (pedidosBuscados.length === pedidos.length) {
            setPedidosBuscados([]);
            return
        }
        setPedidosBuscados(pedidosBuscados);
    }

    useEffect(() => {
        if (!(auth.tipoUsuario === 'cajero')) {
            navigate('/')
        }
    }, [])

    useEffect(() => {

        if (auth.tipoUsuario === 'cajero') {

            if (window.location.href.includes('/cajero/informe')
                || window.location.href.includes('/cajero/pedidos')
                || window.location.href.includes('/cobro')) {
                setPathPrincipal(false);
            } else {
                setPathPrincipal(true);
            }
        }
    }, [window.location.href])

    return (
        <div className='d-flex align-items-center flex-column min-vh-100'>
            <nav className="navbar w-100 px-md-5 px-0 border-bottom shadow-sm hide-on-print ">
                <div className="container-fluid justify-content-lg-between justify-content-center flex-lg-row flex-column">

                    <Link to={"/"} className="navbar-brand">
                        <img src={Imagen} alt="logo_imagen" className='img-fluid logo' width="225px" />
                    </Link>

                    <div className='d-flex gap-3 align-items-center flex-md-row flex-column'>

                        {
                            pathPrincipal && (<form className="d-flex align-items-center flex-md-row flex-column" role="search">
                                <label type="text" htmlFor='search' className='fw-bold align-middle mb-md-0 mb-3'>Codigo pedido:</label>
                                <input className="form-control me-2" placeholder="Search" aria-label="Search" onChange={handleSearch} id='search' value={value} />
                            </form>)
                        }


                        <div className="dropdown-center">
                            <button className="btn btn-secondary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Bienvenido: {auth.nombre} {auth.apellidoPaterno}
                            </button>
                            <ul className="dropdown-menu" style={{
                                margin: 0
                            }}>
                                {/* <li><Link className="dropdown-item" to="pedir">Pedir materia prima</Link></li> */}
                                <li><Link className="dropdown-item" to="informe">Informe Egresos e ingresos</Link></li>
                                <li><Link className="dropdown-item" to="/cajero">Volver Pedidos</Link></li>
                                <li><Link className="dropdown-item" to={pedidosCobro.length > 0 ? "pedidos" : "/cajero"}>Volver Cobro</Link></li>
                                <button className="dropdown-item" onClick={handleCerrarSesion}>Cerrar Sesion</button>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
            <main className='w-100 container shadow-lg px-4 pt-4 flex-grow-1 shadow-none-print container-print'>
                <Outlet />
            </main>
        </div>
    )
}
