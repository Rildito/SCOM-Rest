import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import UsuarioContext from "../context/UsuarioProvider";

export const FormularioUsuario = () => {

    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [ci, setCi] = useState('');
    const [apellidoPaterno, setApellidoPaterno] = useState('');
    const [apellidoMaterno, setApellidoMaterno] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [estado, setEstado] = useState('habilitado');

    //CLIENTE
    const [nit, setNit] = useState('');
    const [email, setEmail] = useState('');

    //CHEF //CAMARERO
    const [fechaContratacion, setFechaContratacion] = useState('');
    const [salario, setSalario] = useState('');
    const [especialidad, setEspecialidad] = useState('');


    const { ci: id, usuario: usuarioMostrar } = useParams();

    const { submitUsuario, usuario, tipoUsuario, errores } = useContext(UsuarioContext);

    useEffect(() => {
        if (id) {
            setNombre(usuario.nombre);
            setCi(usuario.ci);
            setApellidoPaterno(usuario.apellidoPaterno);
            setApellidoMaterno(usuario.apellidoMaterno);
            setContraseña(usuario.contraseña);
            setFechaNacimiento(usuario.fechaNacimiento);
            setNombreUsuario(usuario.nombreUsuario);
            setEstado(usuario.estado);
            setNit(usuario.NIT);
            setEmail(usuario.email);
            setFechaContratacion(usuario.fechaContratacion);
            setSalario(usuario.salario);
            setEspecialidad(usuario.especialidad);
        }
    }, [id]);

    const handleSubmit = async e => {
        e.preventDefault();

        await submitUsuario({ id, nombre, ci, apellidoMaterno, apellidoPaterno, contraseña, fechaContratacion, nombreUsuario, estado, nit, email, fechaNacimiento, salario, especialidad, ciCajeroAdiciona: "1000007" }, tipoUsuario);

        if (!errores.length === 0) {

            return;
        } 

        setNombre('');
        setCi('');
        setApellidoMaterno('');
        setApellidoPaterno('');
        setContraseña('');
        setFechaNacimiento('');
        setNombreUsuario('');
        setEstado('');
        setNit('');
        setEmail('');
        setFechaContratacion('');
        setSalario('');
        setEspecialidad('');

        navigate('/administrador/usuarios');

    };
    return (
        <>
            <div className='container h-100 p-3 pb-0 table-responsive rounded-2'>
                <form onSubmit={handleSubmit} className="row d-flex justify-content-center align-items-center">
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

                        <label htmlFor="apellidoPaterno" className='form-label fw-bold'>Apellido Paterno</label>
                        <input
                            type="text"
                            id="apellidoPaterno"
                            name="apellidoPaterno"
                            className='form-control my-1'
                            value={apellidoPaterno}
                            placeholder="Ej. Perez"
                            onChange={e => setApellidoPaterno(e.target.value)}
                        />


                        <label htmlFor="apellidoMaterno" className='form-label fw-bold'>Apellido Materno</label>
                        <input
                            type="text"
                            id="apellidoMaterno"
                            name="apellidoMaterno"
                            className='form-control my-1'
                            value={apellidoMaterno}
                            placeholder="Ej. Arcani"
                            onChange={e => setApellidoMaterno(e.target.value)}

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

                        <label htmlFor="contraseña" className='form-label fw-bold'>Contraseña</label>
                        <input
                            type="password"
                            id="contraseña"
                            name="contraseña"
                            className='form-control my-1'
                            value={contraseña}
                            placeholder="*********"
                            autoComplete='on'
                            onChange={e => setContraseña(e.target.value)}
                        />

                        <label htmlFor="fechaNacimiento" className='form-label fw-bold'>Fecha Nacimiento</label>
                        <input
                            type="date"
                            id="fechaNacimiento"
                            name="fechaNacimiento"
                            className='form-control my-1'
                            value={fechaNacimiento}
                            onChange={e => setFechaNacimiento(e.target.value)}
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
                        <select value={estado} onChange={e => setEstado(e.target.value)} className='form-select'>
                            <option value="habilitado">Habilitado</option>
                            <option value="deshabilitado">Deshabilitado</option>
                        </select>
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
                                    step={"0.01"}
                                    onChange={e => setSalario(e.target.value)}
                                />

                                <label htmlFor="salario" className='form-label fw-bold '>Especialidad</label>
                                <select value={especialidad} onChange={e => setEspecialidad(e.target.value)} className='form-select'>
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

                    <input type="submit" value={(id) ? `Actualizar Usuario` : `Registrar Usuario`} className='btn btn-warning text-black mt-3 text-uppercase fw-bolder mx-md-auto w-auto' />
                </form>
            </div >
        </>
    )
}
