import { Link } from 'react-router-dom';

export const Opciones = () => {
  return (
    <div className="vh-100 d-flex aling-items-center flex-column vw-100">
      <h1 className="text-center w-100 bg-primary bg-dark text-white p-5 fw-bolder">
        VENTANA ADMINISTRADOR
      </h1>
      <div className="h-100 d-flex justify-content-center align-items-center flex-column gap-3 px-sm-5 px-0">
        <Link to={""} className="btn btn-primary p-5 w-100 fs-5 fw-bold">PRODUCTOS</Link>
        <Link to={"/administrador/ingredientes"} className="btn btn-warning p-5 w-100 fs-5 fw-bold">INGREDIENTES</Link>
        <Link to={"/administrador/usuarios"} className="btn btn-danger p-5 w-100 fs-5 fw-bold">USUARIOS</Link>
      </div>
    </div>

  )
}
