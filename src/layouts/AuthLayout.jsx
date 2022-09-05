import {Outlet} from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className='d-flex justify-content-center align-items-center bg-light flex-column'>
        <Outlet />
    </div>
  )
}
