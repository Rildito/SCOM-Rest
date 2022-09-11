import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cajero from '../assets/img/cajero.png';
import Camarero from '../assets/img/camarero.jpg';
import Chef from '../assets/img/chef.jpg';
import Cliente from '../assets/img/usuario.jpg';
import UsuarioContext from '../context/UsuarioProvider';

export const Registrar = () => {

  const { setTipoUsuario } = useContext(UsuarioContext);
  const navigate = useNavigate();

  const mandarUsuario = e => {
    e.preventDefault();
    setTipoUsuario(e.target.value);
    navigate(`${e.target.value}`);
  };
  return (
    <>
      <h1 className="text-center w-100 bg-primary bg-dark text-white p-5 fw-bolder">
        REGISTRAR USUARIOS
      </h1>

      <div className="container bg-white h-75 mt-3">
        <div className="row justify-content-center">
          <h2 className="mt-3 text-center text-secondary">¿QUE USUARIO DESEA REGISTRAR?</h2>
          <form className="mt-5 d-flex row mb-4 mb-md-0 gap-sm-0 gap-3">
            <div className="col-md-3 col-sm-6 col-12 shadow d-flex justify-content-center flex-column align-items-center myborder">
              <input className='w-100' type="image" src={Cliente} value="cliente" onClick={e => mandarUsuario(e)} />
              <h5 className="card-title text-center fs-3 fw-bolder text-danger my-3">CLIENTES</h5>
            </div>
            <div className="col-md-3 col-sm-6 col-12 shadow d-flex justify-content-center flex-column align-items-center myborder">
              <input className='w-100' type="image" src={Chef} value="chef" onClick={e => mandarUsuario(e)} />
              <h5 className="card-title text-center fs-3 fw-bolder text-danger my-3">CHEFS</h5>
            </div>
            <div className="col-md-3 col-sm-6 col-12 shadow d-flex justify-content-center flex-column align-items-center myborder mt-md-0 mt-sm-3">
              <input className='w-100' type="image" src={Camarero} value="camarero" onClick={e => mandarUsuario(e)} />
              <h5 className="card-title text-center fs-3 fw-bolder text-danger my-3">CAMAREROS</h5>
            </div>
            <div className="col-md-3 col-sm-6 col-12 shadow d-flex justify-content-center flex-column align-items-center myborder mt-md-0 mt-sm-3">
              <input className='w-100' type="image" src={Cajero} value="cajero" onClick={e => mandarUsuario(e)} />
              <h5 className="card-title text-center fs-3 fw-bolder text-danger my-3">CAJEROS</h5>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}
