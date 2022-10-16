import { useContext, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom'

import Imagen from '../assets/img/logo.png';
import AuthContext from '../context/AuthProvider';
import PedidoContext from '../context/PedidosProvider';

export const ChefLayout = () => {

    const navigate = useNavigate();
    const { setPedidosBuscados, pedidos } = useContext(PedidoContext);
    const { auth, handleCerrarSesion } = useContext(AuthContext);
    const handleSearch = (e) => {
        const pedidosBuscados = pedidos.filter(pedido => pedido.idpedido.toString().includes(e.target.value));
        if (pedidosBuscados.length === pedidos.length) {
            setPedidosBuscados([]);
            return
        }
        setPedidosBuscados(pedidosBuscados);
    }

    useEffect(() => {
        if (!(auth.tipoUsuario === 'chef')) {
            navigate('/')
        }
    }, [])

    return (
        <div className='d-flex align-items-center flex-column min-vh-100'>
            <nav className="navbar w-100 px-md-5 px-0 border-bottom shadow-sm hide-on-print">
                <div className="container px-0 justify-content-lg-between justify-content-center flex-lg-row flex-column">

                    <Link to={"/"} className="navbar-brand">
                        <img src={Imagen} alt="logo_imagen" className='img-fluid logo' width="225px" />
                    </Link>

                    <div className='d-flex gap-3 align-items-center flex-md-row flex-column'>
                        <form className="d-flex align-items-center flex-md-row flex-column" role="search">
                            <label type="text" htmlFor='search' className='fw-bold align-middle mb-md-0 mb-3'>Codigo pedido:</label>
                            <input className="form-control me-2" placeholder="Search" aria-label="Search" onChange={handleSearch} id='search' />
                        </form>

                        <div className="dropdown-center">
                            <button className="btn btn-secondary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Bienvenido: {auth.nombre} {auth.apellidoPaterno}
                            </button>
                            <ul className="dropdown-menu" style={{
                                margin: 0
                            }}>
                                <li><Link className="dropdown-item" to="pedir">Pedir materia prima</Link></li>
                                <li><Link className="dropdown-item" to="estado">Deshabilitar productos</Link></li>
                                <li><Link className="dropdown-item" to="/chef">Volver Pedidos</Link></li>
                                <button className="dropdown-item" onClick={handleCerrarSesion}>Cerrar Sesion</button>
                            </ul>
                        </div>
                    </div>


                </div>
            </nav>
            <main className='w-100 container px-0 shadow-lg px-md-4 pt-4 shadow-none-print container-print flex-grow-1'>
                <Outlet />
            </main>
        </div>
    )
}