
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthProvider';
import { UsuarioProvider } from './context/UsuarioProvider';

import { AuthLayout } from './layouts/AuthLayout';
import { AdministradorLayout } from './layouts/AdministradorLayout';

import { Login, RegistrarUsuario, Restaurant, Usuarios, EditarUsuario } from './pages';

import "./index.css";
import { RestaurantLayout } from './layouts/RestaurantLayout';
import { ProductosProvider } from './context/ProductosProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UsuarioProvider>
          <ProductosProvider>
            <Routes>
              <Route path='/' element={<RestaurantLayout />}>
                <Route index element={< Restaurant />} />
              </Route>

              <Route path='/registrar' element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path='registrarUsuario' element={<RegistrarUsuario />} />
              </Route>

              <Route path='/administrador' element={<AdministradorLayout />}>
                <Route index element={<Usuarios />} />
                <Route path='editar/:ci' element={<EditarUsuario />} />
              </Route>
            </Routes>
          </ProductosProvider>
        </UsuarioProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App
