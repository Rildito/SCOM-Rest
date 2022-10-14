import { useEffect } from 'react';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Imagen from '../assets/img/logo.png';
import AuthContext from '../context/AuthProvider';


export const Login = () => {
    const navigate = useNavigate();
    const { autenticarUsuario, cargando, errores, auth } = useContext(AuthContext);

    const [nombreUsuario, setNombreUsuario] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        await autenticarUsuario({ nombreUsuario, password });

    };

    useEffect(() => {
        console.log(auth.tipoUsuario);
        if (auth.tipoUsuario === 'administrador') {
            navigate('/administrador')
        }

        if (auth.tipoUsuario === 'cliente') {
            navigate('/')
        }

        if (auth.tipoUsuario === 'cajero') {
            navigate('/cajero')
        }

        if (auth.tipoUsuario === 'chef') {
            navigate('/chef')
        }
    }, [auth]);

    return (
        <>


            <div className='vh-100 container d-flex justify-content-center align-items-center flex-column bg-white'>
                <img src={Imagen} className="img-fluid mb-5" />
                <div className='w-md-50 w-100 p-md-4 p-3 border shadow-lg bg-white rounded-3 mb-5'>
                    <h1 className='text-center fw-normal fs-3'>Inicia Sesión</h1>
                    {
                        errores?.map(error => (
                            <p key={error} className="w-100 p-2 mb-1 bg-danger rounded text-white">{error}</p>
                        ))
                    }
                    <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 aling-items-center">
                        <label htmlFor="nombreUsuario" className='form-label mb-0 fw-bold'>Nombre Usuario</label>
                        <input
                            type="text"
                            id="nombreUsuario"
                            name="nombreUsuario"
                            className='form-control'
                            value={nombreUsuario}
                            placeholder="Enrique123"
                            onChange={e => setNombreUsuario(e.target.value)}
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

                        <input type="submit" value="Iniciar sesion" className='btn btn-warning text-black mt-3 text-uppercase fw-bolder mx-md-auto' disabled={cargando ? true : false} />
                    </form>

                </div>
                <nav className="d-flex flex-sm-row flex-column justify-content-between align-items-center w-md-50 w-75">
                    <Link
                        className="text-decoration-none text-dark"
                        to="registrar"
                    >¿No tienes una cuenta? Registrate</Link>
                </nav>
            </div>
        </>
    )
}
