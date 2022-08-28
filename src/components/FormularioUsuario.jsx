import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import UsuarioContext from "../context/UsuarioProvider";


export const FormularioUsuario = () => {

    const [Ci, setCI] = useState('');
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [ci, setCi] = useState('');
    const [nit, setNit] = useState('');
    const [apellidoPat, setApellidoPat] = useState('');
    const [apellidoMat, setApellidoMat] = useState('');
    const [password, setPassword] = useState('');
    const [edad, setEdad] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');

    const { ci: id } = useParams();
    const { submitUsuario, usuario } = useContext(UsuarioContext);

    useEffect(() => {
        if (id) {
            setCI(usuario.ci);
            setNombre(usuario.nombre);
            setEmail(usuario.email);
            setCi(usuario.ci);
            setNit(usuario.nit);
            setApellidoPat(usuario.apellidoPaterno);
            setApellidoMat(usuario.apellidoMaterno);
            setPassword(usuario.password);
            setEdad(usuario.edad);
            setNombreUsuario(usuario.nombreUsuario);
        }
    }, [id]);

    const handleSubmit = async e => {
        e.preventDefault();

        //crearUsuario
        await submitUsuario({ id,nit, nombre, email, ci, apellidoPat, apellidoMat, password, edad, nombreUsuario });
        
    };
    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 aling-items-center">

            <label htmlFor="nombre" className='form-label mb-0 fw-bold'>Nombre</label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                className='form-control'
                value={nombre}
                placeholder="Ej. Luis"
                onChange={e => setNombre(e.target.value)}
            />

            <label htmlFor="apellidoPat" className='form-label mb-0 fw-bold'>Apellido Paterno</label>
            <input
                type="text"
                id="apellidoPat"
                name="apellidoPat"
                className='form-control'
                value={apellidoPat}
                placeholder="Ej. Perez"
                onChange={e => setApellidoPat(e.target.value)}
            />


            <label htmlFor="apellidoMat" className='form-label mb-0 fw-bold'>Apellido Materno</label>
            <input
                type="text"
                id="apellidoMat"
                name="apellidoMat"
                className='form-control'
                value={apellidoMat}
                placeholder="Ej. Arcani"
                onChange={e => setApellidoMat(e.target.value)}
            />

            <label htmlFor="nombreUsuario" className='form-label mb-0 fw-bold'>Nombre de Usuario</label>
            <input
                type="text"
                id="nombreUsuario"
                name="nombreUsuario"
                className='form-control'
                value={nombreUsuario}
                placeholder="Ej. Luis123"
                onChange={e => setNombreUsuario(e.target.value)}
            />


            <label htmlFor="ci" className='form-label mb-0 fw-bold'>CI</label>
            <input
                type="text"
                id="ci"
                name="ci"
                className='form-control'
                value={ci}
                placeholder="Ej. 1111111"
                onChange={e => setCi(e.target.value)}
            />

            <label htmlFor="ci" className='form-label mb-0 fw-bold'>NIT</label>
            <input
                type="text"
                id="nit"
                name="nit"
                className='form-control'
                value={nit}
                placeholder="Ej. 1111111"
                onChange={e => setNit(e.target.value)}
            />

            <label htmlFor="email" className='form-label mb-0 fw-bold'>Email</label>
            <input
                type="text"
                id="email"
                name="email"
                className='form-control'
                value={email}
                placeholder="Ej. ejemplos@correo.com"
                onChange={e => setEmail(e.target.value)}
            />

            <label htmlFor="password" className='form-label mb-0 fw-bold'>Contraseña</label>
            <input
                type="password"
                id="password"
                name="password"
                className='form-control'
                value={password}
                placeholder="*********"
                autoComplete='on'
                onChange={e => setPassword(e.target.value)}
            />

            <label htmlFor="fechanac" className='form-label mb-0 fw-bold'>Fecha Nacimiento</label>
            <input
                type="date"
                id="fechanac"
                name="fechanac"
                className='form-control'
                value={edad}
                onChange={e => setEdad(e.target.value)}
            />

            <input type="submit" value={`${Ci ? 'Editar usuario' : 'Registrar usuario'}`} className='btn btn-warning text-black mt-3 text-uppercase fw-bolder mx-md-auto' />
        </form>
    )
}
