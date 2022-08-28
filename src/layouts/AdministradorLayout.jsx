import {Outlet} from 'react-router-dom';

export const AdministradorLayout = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column bg-warning-gradient'>
        <Outlet />
    </div>
  )
}
