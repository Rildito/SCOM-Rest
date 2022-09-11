import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, RegistrarUsuario, Restaurant, Usuarios, EditarUsuario, Registrar, Opciones, Ingredientes } from './pages';
import "./index.css";
import { AuthProvider, UsuarioProvider, ProductosProvider, IngredientesProvider } from './context';
import { AuthLayout, AdministradorLayout } from './layouts';
import { RegistrarCliente } from './components';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UsuarioProvider>
          <ProductosProvider>
            <IngredientesProvider>
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
                  <Route path='ingredientes/registrar' element={<Ingredientes />} />
                </Route>
              </Routes>
            </IngredientesProvider>
          </ProductosProvider>
        </UsuarioProvider>
      </AuthProvider>
    </BrowserRouter >
  );
}

export default App
