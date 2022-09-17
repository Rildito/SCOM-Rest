import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, RegistrarUsuario, Restaurant, Usuarios, EditarUsuario, Registrar, Opciones, Ingredientes, RegistrarIngrediente, Mesas, RegistrarMesa, Pedidos, PedidoInformacion, PedidoCobro, Productos, SobreNosotros, PedidoConfirmacion, ProductosCamarero } from './pages';
import "./index.css";
import { AuthProvider, UsuarioProvider, ProductosProvider, PedidosProvider } from './context';
import { AuthLayout, AdministradorLayout, CajeroLayout, CamareroLayout } from './layouts';
import { RegistrarCliente } from './components';
import { Prueba } from './components/Prueba';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UsuarioProvider>
          <ProductosProvider>
            <PedidosProvider>
              <Routes>
                <Route path='/prueba' element={<Prueba />} />
                <Route path='/' element={<Restaurant />} />
                <Route path='/productos' element={<Productos />} />

                <Route path='/nosotros' element={<SobreNosotros />} />

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

                  <Route path='mesas' element={<Mesas />} />
                  <Route path='mesas/registrar' element={<RegistrarMesa />} />
                </Route>

                <Route path='/cajero' element={<CajeroLayout />}>
                  <Route index element={<Pedidos />} />
                  <Route path=':idPedido' element={<PedidoInformacion />} />
                  <Route path=':idPedido/cobro' element={<PedidoCobro />} />
                </Route>

                <Route path='/camarero' element={<CamareroLayout />}>
                  <Route index element={<Pedidos />} />
                  <Route path=':idPedido' element={<PedidoConfirmacion />} />
                  <Route path=':idPedido/productos' element={<ProductosCamarero />} />

                </Route>

                <Route path='/*' element={<Restaurant />} />
              </Routes>
            </PedidosProvider>
          </ProductosProvider>
        </UsuarioProvider>
      </AuthProvider>
    </BrowserRouter >
  );
}

export default App
