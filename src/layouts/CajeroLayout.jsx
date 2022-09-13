import { Outlet, Link } from 'react-router-dom'

import Imagen from '../assets/img/logo.png';

export const CajeroLayout = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value)
    }

    return (
        <div className='d-flex align-items-center flex-column vh-100'>
            <nav className="navbar w-100 px-5 border-bottom shadow-sm hide-on-print">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand">
                        <img src={Imagen} alt="logo_imagen" className='img-fluid logo' width="250px" />
                    </Link>
                    <form onSubmit={handleSubmit} className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <main className='w-100 container shadow-lg px-4 pt-4 h-100 shadow-none-print container-print'>
                <Outlet />
            </main>
        </div>
    )
}
