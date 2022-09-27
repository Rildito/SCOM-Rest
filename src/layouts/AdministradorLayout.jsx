import { useEffect, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';

export const AdministradorLayout = () => {

  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  
  useEffect(() => {
    if (!(auth.tipoUsuario === 'administrador')) {
      navigate('/')
    }
  }, [])

  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <Outlet />
    </div>
  )
}
