
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthProvider';
import { UsuarioProvider } from './context/UsuarioProvider';

import { AuthLayout } from './layouts/AuthLayout';
import { AdministradorLayout } from './layouts/AdministradorLayout';

import { Login, RegistrarUsuario, Restaurant, Usuarios, EditarUsuario } from './pages';

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UsuarioProvider>
          <Routes>
            <Route path='/' element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path='registrar' element={<RegistrarUsuario />} />
              <Route path='restaurant' element={<Restaurant/>} />
            </Route>
            <Route path='/administrador' element={<AdministradorLayout />}>
              <Route index element={<Usuarios />} />
              <Route path='editar/:ci' element={<EditarUsuario />} />
            </Route>
          </Routes>
        </UsuarioProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App
