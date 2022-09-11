import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Imagen from '../assets/img/logo.png';
import AuthContext from '../context/AuthProvider';
export const Login = () => {

    const { autenticarUsuario } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        autenticarUsuario({ email, password });
    };

    return (
        <div className='vh-100 container d-flex justify-content-center align-items-center flex-column bg-white'>
            <img src={Imagen} className="img-fluid mb-5" />
            <div className='w-md-50 w-75 p-md-4 p-3 border shadow-lg bg-white rounded-3 mb-5'>
                <h1 className='text-center fw-normal fs-3'>Inicia Sesión</h1>
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 aling-items-center">
                    <label htmlFor="email" className='form-label mb-0 fw-bold'>Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className='form-control'
                        value={email}
                        placeholder="ej. ejemplo@correo.com"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label htmlFor="password" className='form-label mb-0 fw-bold'>Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className='form-control'
                        value={password}
                        placeholder="**********"
                        autoComplete='on'
                        onChange={e => setPassword(e.target.value)}
                    />

                    <input type="submit" value="Iniciar sesion" className='btn btn-warning text-black mt-3 text-uppercase fw-bolder mx-md-auto' />
                </form>

            </div>
            <nav className="d-flex flex-sm-row flex-column justify-content-between align-items-center w-md-50 w-75">
                <Link
                    className="text-decoration-none text-dark"
                    to="registrar"
                >¿No tienes una cuenta? Registrate</Link>
            </nav>
        </div>
    )
}
