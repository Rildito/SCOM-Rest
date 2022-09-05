import { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom';
import UsuarioContext from "../context/UsuarioProvider";

export const FormularioUsuario = () => {

    const [nombre, setNombre] = useState('');
    const [ci, setCi] = useState('');
    const [apellidoPat, setApellidoPat] = useState('');
    const [apellidoMat, setApellidoMat] = useState('');
    const [password, setPassword] = useState('');
    const [edad, setEdad] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [estado, setEstado] = useState('');

    //CLIENTE
    const [nit, setNit] = useState('');
    const [email, setEmail] = useState('');

    //CHEF y //CAMARERO
    const [fechaContratacion, setFechaContratacion] = useState('');
    const [salario, setSalario] = useState('');
    const [especialidad, setEspecialidad] = useState('');


    const { ci: id, usuario: usuarioMostrar } = useParams();

    const { submitUsuario, usuario, tipoUsuario } = useContext(UsuarioContext);

    useEffect(() => {
        if (id) {
            setNombre(usuario.nombre);
            setCi(usuario.ci);
            setApellidoPat(usuario.apellidoPaterno);
            setApellidoMat(usuario.apellidoMaterno);
            setPassword(usuario.password);
            setEdad(usuario.edad);
            setNombreUsuario(usuario.nombreUsuario);
            setEstado(usuario.estado);
            setNit(usuario.nit);
            setEmail(usuario.email);
            setFechaContratacion(usuario.fechaContratacion);
            setSalario(usuario.salario);
            setEspecialidad(usuario.especialidad);
        }
    }, [id]);

    const handleSubmit = async e => {
        e.preventDefault();
        await submitUsuario({ id, nombre, ci, apellidoMat, apellidoMat, password, edad, nombreUsuario, estado, nit, email, fechaContratacion, salario, especialidad, tipoUsuario });
    };
    return (
        <>
            <div className='container h-100 p-3 pb-0 table-responsive rounded-2'>
                <form onSubmit={handleSubmit} className="row d-flex justify-content-center align-items-center">
                    {/* row d-flex flex-column gap-2 aling-items-center */}
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

                        <label htmlFor="estado" className='form-label fw-bold'>Estado</label>
                        <input
                            type="text"
                            id="estado"
                            name="estado"
                            className='form-control my-1'
                            value={estado}
                            placeholder="Ej. estado"
                            onChange={e => setEstado(e.target.value)}
                        />
                    </div>

                    {
                        (tipoUsuario === 'cliente' || usuarioMostrar === 'cliente' ? (
                            <div className="col-12">
                                <label htmlFor="nit" className='form-label mb-0 fw-bold'>Nit</label>
                                <input
                                    type="text"
                                    id="nit"
                                    name="nit"
                                    className='form-control my-1'
                                    value={nit}
                                    placeholder="Ej. 1245124125"
                                    onChange={e => setNit(e.target.value)}
                                />

                                <label htmlFor="email" className='form-label mb-0 fw-bold'>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className='form-control my-1'
                                    value={email}
                                    placeholder="Ej. Perez"
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                        ) : null)
                    }

                    {
                        (tipoUsuario === 'chef' || usuarioMostrar === 'chef' ? (
                            <div className="col-12">
                                <label htmlFor="fechaContratacion" className='form-label fw-bold'>Fecha Contratacion</label>
                                <input
                                    type="date"
                                    id="fechaContratacion"
                                    name="fechaContratacion"
                                    className='form-control my-1'
                                    value={fechaContratacion}
                                    placeholder="Ej. 1245124125"
                                    onChange={e => setFechaContratacion(e.target.value)}
                                />

                                <label htmlFor="salario" className='form-label fw-bold'>Salario</label>
                                <input
                                    type="number"
                                    id="salario"
                                    name="salario"
                                    className='form-control my-1'
                                    value={salario}
                                    placeholder="0"
                                    min={"1"}
                                    onChange={e => setSalario(e.target.value)}
                                />

                                <label htmlFor="salario" className='form-label fw-bold '>Especialidad</label>
                                <select value={especialidad} onChange={e => setEspecialidad(e.target.value)}className='form-select'>
                                    <option >--Seleccione--</option>
                                    <option value="chefSaucier">Chef Saucier o de salsas</option>
                                    <option value="chefPoissonnier">Chef Poissonnier o de pescados</option>
                                    <option value="chefRotisseur">Chef Rotisseur o de asados</option>
                                    <option value="chefGrillardin">Chef Grillardin o de parrilla</option>
                                    <option value="chefFriturier">Chef Friturier o de lo frito</option>
                                    <option value="chefEntremetier">Chef Entremetier o de verduras</option>
                                    <option value="chefMangero">Garde Mangero chef de despensa</option>
                                    <option value="chefTournant">Chef Tournant o de turno</option>
                                </select>


                            </div>
                        ) : null)
                    }
                    {
                        (tipoUsuario === 'camarero' || tipoUsuario === 'cajero' || usuarioMostrar === 'camarero' || usuarioMostrar === 'cajero' ? (
                            <div className="col-12">
                                <label htmlFor="fechaContratacion" className='form-label fw-bold'>Fecha Contratacion</label>
                                <input
                                    type="date"
                                    id="fechaContratacion"
                                    name="fechaContratacion"
                                    className='form-control my-1'
                                    value={fechaContratacion}
                                    placeholder="Ej. 1245124125"
                                    onChange={e => setFechaContratacion(e.target.value)}
                                />

                                <label htmlFor="salario" className='form-label fw-bold'>Salario</label>
                                <input
                                    type="number"
                                    id="salario"
                                    name="salario"
                                    className='form-control my-1'
                                    value={salario}
                                    placeholder="0"
                                    min={"1"}
                                    onChange={e => setSalario(e.target.value)}
                                />
                            </div>
                        ) : null)
                    }

                    <input type="submit" value={ (id) ? `Actualizar Usuario` : `Registrar Usuario`} className='btn btn-warning text-black mt-3 text-uppercase fw-bolder mx-md-auto w-auto' />
                </form>
            </div>
        </>
    )
}