import { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';
import UsuarioContext from '../context/UsuarioProvider';

export const RegistrarCliente = () => {

    const { submitUsuario, tipoUsuario } = useContext(UsuarioContext);
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [ci, setCi] = useState('');
    const [apellidoPat, setApellidoPat] = useState('');
    const [apellidoMat, setApellidoMat] = useState('');
    const [password, setPassword] = useState('');
    const [edad, setEdad] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [nit, setNit] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = async e => {
        e.preventDefault();
        await submitUsuario({ nombre, ci: parseInt(ci, 10), apellidoPat, apellidoMat, password, edad, nombreUsuario, nit, email }, tipoUsuario);

    };

    if (Object.entries(auth).length !== 0) {
        navigate("/");
    }

    return (
        <>
            <h1 className='py-5 text-center fw-bold text-white bg-dark w-100 '>REGISTRATE</h1>
            <div className='w-md-50 w-75 p-md-4 p-3 border shadow-lg bg-white rounded-3 my-4'>
                <form onSubmit={handleSubmit} className="row d-flex justify-content-center align-items-center ">
                    <div className="col-md-6 col-12">
                        <label htmlFor="nombre" className='form-label fw-bold'>Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            className='form-control my-1'
                            value={nombre}
                            placeholder="Ej. Luis"
                            onChange={e => setNombre(e.target.value)}
                        />

                        <label htmlFor="apellidoPat" className='form-label fw-bold'>Apellido Paterno</label>
                        <input
                            type="text"
                            id="apellidoPat"
                            name="apellidoPat"
                            className='form-control my-1'
                            value={apellidoPat}
                            placeholder="Ej. Perez"
                            onChange={e => setApellidoPat(e.target.value)}
                        />


                        <label htmlFor="apellidoMat" className='form-label fw-bold'>Apellido Materno</label>
                        <input
                            type="text"
                            id="apellidoMat"
                            name="apellidoMat"
                            className='form-control my-1'
                            value={apellidoMat}
                            placeholder="Ej. Arcani"
                            onChange={e => setApellidoMat(e.target.value)}

                        />

                        <label htmlFor="nombreUsuario" className='form-label fw-bold'>Nombre de Usuario</label>
                        <input
                            type="text"
                            id="nombreUsuario"
                            name="nombreUsuario"
                            className='form-control my-1'
                            value={nombreUsuario}
                            placeholder="Ej. Luis123"
                            onChange={e => setNombreUsuario(e.target.value)}
                        />
                    </div>

                    <div className="col-md-6 col-12">

                        <label htmlFor="password" className='form-label fw-bold'>Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className='form-control my-1'
                            value={password}
                            placeholder="*********"
                            autoComplete='on'
                            onChange={e => setPassword(e.target.value)}
                        />

                        <label htmlFor="fechanac" className='form-label fw-bold'>Fecha Nacimiento</label>
                        <input
                            type="date"
                            id="fechanac"
                            name="fechanac"
                            className='form-control my-1'
                            value={edad}
                            onChange={e => setEdad(e.target.value)}
                        />

                        <label htmlFor="ci" className='form-label fw-bold'>CI</label>
                        <input
                            type="text"
                            id="ci"
                            name="ci"
                            className='form-control my-1'
                            value={ci}
                            placeholder="Ej. 1111111"
                            onChange={e => setCi(e.target.value)}
                        />

                        <label htmlFor="nit" className='form-label fw-bold'>Nit</label>
                        <input
                            type="text"
                            id="nit"
                            name="nit"
                            className='form-control my-1'
                            value={nit}
                            placeholder="Ej. 1245124125"
                            onChange={e => setNit(e.target.value)}
                        />

                    </div>
                    <div className='col-12'>
                        <label htmlFor="email" className='form-label fw-bold mt-1'>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className='form-control my-1'
                            value={email}
                            placeholder="Ej. ejemplo@correo.com"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <input type="submit" value="REGISTRARSE" className='btn btn-warning text-black mt-3 text-uppercase fw-bolder mx-md-auto w-auto' />
                </form>
            </div>
            <nav className="w-100 d-flex justify-content-center w-md-50 w-75">
                <Link
                    className="text-decoration-none text-dark mb-4"
                    to="/login"
                >¿Ya tienes una cuenta? Inicia Sesion</Link>
            </nav>
        </>
    );
}
