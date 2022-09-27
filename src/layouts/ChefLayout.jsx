import { useContext, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom'

import Imagen from '../assets/img/logo.png';
import AuthContext from '../context/AuthProvider';
import PedidoContext from '../context/PedidosProvider';

export const ChefLayout = () => {

    const navigate = useNavigate();
    const { setPedidosBuscados, pedidos } = useContext(PedidoContext);
    const { auth } = useContext(AuthContext);
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
        <div className='d-flex align-items-center flex-column vh-100'>
            <nav className="navbar w-100 px-md-5 px-0 border-bottom shadow-sm hide-on-print ">
                <div className="container px-0 justify-content-md-between justify-content-center">
                    <Link to={"/"} className="navbar-brand">
                        <img src={Imagen} alt="logo_imagen" className='img-fluid logo' width="225px" />
                    </Link>

                    <Link to={"/chef/pedir"} className="navbar-brand">
                        PEDIR MATERIA PRIMA
                    </Link>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                    </form>

                    <h5>Bienvenido: {auth.nombre} {auth.apellidoPaterno}</h5>

                    <Link to={"/chef/pedir"} className="navbar-brand mb-2">
                        Administrar Img
                    </Link>
                </div>
            </nav>
            <main className='w-100 container px-0 shadow-lg px-md-4 pt-4 shadow-none-print container-print'>
                <Outlet />
            </main>
        </div>
    )
}