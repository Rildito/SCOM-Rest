import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, RegistrarUsuario, Restaurant, Usuarios, EditarUsuario, Registrar, Opciones, Ingredientes, RegistrarIngrediente } from './pages';
import "./index.css";
import { AuthProvider, UsuarioProvider, ProductosProvider } from './context';
import { AuthLayout, AdministradorLayout } from './layouts';
import { RegistrarCliente } from './components';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UsuarioProvider>
          <ProductosProvider>
            <Routes>
              <Route path='/' element={<Restaurant />} />

              <Route path='/login' element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path='registrar' element={<RegistrarCliente />} />
              </Route>

              <Route path='/administrador' element={<AdministradorLayout />}>
                <Route index element={<Opciones />} />
                <Route path="usuarios" element={<Usuarios />} />
                <Route path="registrar" element={<Registrar />} />
                <Route path='registrar/:usuario' element={<RegistrarUsuario />} />
                <Route path='editar/:ci&:usuario' element={<EditarUsuario />} />

                <Route path='ingredientes' element={<Ingredientes />} />
                <Route path='ingredientes/registrar' element={<RegistrarIngrediente />} />
              </Route>
            </Routes>
          </ProductosProvider>
        </UsuarioProvider>
      </AuthProvider>
    </BrowserRouter >
  );
}

export default App
