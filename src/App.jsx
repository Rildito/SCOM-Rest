import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, RegistrarUsuario, Restaurant, Usuarios, EditarUsuario, Registrar } from './pages';
import "./index.css";
import { AuthProvider, UsuarioProvider, ProductosProvider } from './context';
import { AuthLayout, AdministradorLayout, RestaurantLayout} from './layouts';

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

              <Route path='/login' element={<AuthLayout />}>
                <Route index element={<Login />} />
              </Route>

              <Route path='/administrador' element={<AdministradorLayout />}>
                <Route index element={<Usuarios />} />
                <Route index path="registrar" element={<Registrar />} />
                <Route path='registrar/:usuario' element={<RegistrarUsuario />} />
                <Route path='editar/:ci&:usuario' element={<EditarUsuario />} />
              </Route>
            </Routes>
          </ProductosProvider>
        </UsuarioProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App
