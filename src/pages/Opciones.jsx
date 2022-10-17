import { useNavigate } from 'react-router-dom';

import Usuario from '../assets/img/usuario.png'
import Ingrediente from '../assets/img/ingrediente.png'
import Producto from '../assets/img/producto.png'
import Mesa from '../assets/img/mesa.png'
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';

export const Opciones = () => {

  const navigate = useNavigate('');
  const { auth, handleCerrarSesion } = useContext(AuthContext);
  const mandarOpcion = e => {
    e.preventDefault();
    navigate(`${e.target.value}`);
  };

  const verSolicitudes = (e) => {
    e.preventDefault();
    navigate('solicitudes');
  };

  const verOpiniones = (e) => {
    e.preventDefault();
    navigate('opiniones');
  }
  return (
    <>

      <h1 className="text-center w-100 bg-primary bg-dark text-white p-5 fw-bolder">
        VENTANA ADMINISTRADOR
      </h1>
      <div className='w-100 d-flex justify-content-between container mt-3 flex-md-row flex-column align-items-center gap-3'>
        <p className='fs-5 mb-0'>Bienvenido: {auth.nombre} {auth.apellidoPaterno}</p>
        <button className='btn btn-success w-md-auto w-100' onClick={verSolicitudes}>VER SOLICITUDES DE MATERIA PRIMA</button>
        <button className='btn btn-success w-md-auto w-100' onClick={verOpiniones}>Ver opiniones</button>
        <button className='btn btn-outline-danger w-md-auto w-100' onClick={handleCerrarSesion}>Cerrar Sesion</button>

      </div>
      <div className="container bg-white h-75 mt-3">
        <div className="row justify-content-center">
          <form className="mt-5 d-flex mb-4 mb-md-0 gap-sm-0 gap-3 flex-wrap">
            <div className="col-lg-3 col-md-6 col-12 shadow d-flex justify-content-center flex-column align-items-center myborder">
              <input className='w-100' type="image" src={Usuario} value="usuarios" onClick={e => mandarOpcion(e)} />
              <h5 className="card-title text-center fs-3 fw-bolder text-danger my-3">USUARIOS</h5>
            </div>

            <div className="col-lg-3 col-md-6 col-12 shadow d-flex justify-content-center flex-column align-items-center myborder">
              <input className='w-100' type="image" src={Ingrediente} value="ingredientes" onClick={e => mandarOpcion(e)} />
              <h5 className="card-title text-center fs-3 fw-bolder text-danger my-3">INGREDIENTES</h5>
            </div>

            <div className="col-lg-3 col-md-6 col-12 shadow d-flex justify-content-center flex-column align-items-center myborder mt-md-0 mt-sm-3">
              <input className='w-100' type="image" src={Producto} value="productos" onClick={e => mandarOpcion(e)} />
              <h5 className="card-title text-center fs-3 fw-bolder text-danger my-3">PRODUCTO</h5>
            </div>

            <div className="col-lg-3 col-md-6 col-12 shadow d-flex justify-content-center flex-column align-items-center myborder mt-md-0 mt-sm-3">
              <input className='w-100' type="image" src={Mesa} value="mesas" onClick={e => mandarOpcion(e)} />
              <h5 className="card-title text-center fs-3 fw-bolder text-danger my-3">MESAS</h5>
            </div>


          </form>

        </div>
      </div>
    </>


  )
}
