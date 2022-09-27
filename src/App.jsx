import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, RegistrarUsuario, Restaurant, Usuarios, EditarUsuario, Registrar, Opciones, Ingredientes, RegistrarIngrediente, Mesas, RegistrarMesa, Pedidos, PedidoInformacion, PedidoCobro, Productos, SobreNosotros, PedidoConfirmacion, ProductosCamarero, RegistrarProducto, ResumenPedido, EditarIngrediente, EditarProducto, EditarMesa, PedidoRealizado, SolicitarMateria } from './pages';
import "./index.css";
import { AuthProvider, UsuarioProvider, ProductosProvider, PedidosProvider } from './context';
import { AuthLayout, AdministradorLayout, CajeroLayout, CamareroLayout, ChefLayout } from './layouts';
import { RegistrarCliente } from './components';
import { Prueba } from './components/Prueba';
import { ProductosAdministrador } from './pages/ProductosAdministrador';
import { IngredientesProvider } from './context/IngredientesProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UsuarioProvider>
          <ProductosProvider>
            <PedidosProvider>
              <IngredientesProvider>
                <Routes>
                  <Route path='/prueba' element={<Prueba />} />
                  <Route path='/' element={<Restaurant />} />
                  <Route path='/productos' element={<Productos />} />
                  <Route path='/nosotros' element={<SobreNosotros />} />
                  <Route path='/pedido' element={<ResumenPedido />} />

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
                    <Route path='ingredientes/editar/:codIngrediente' element={<EditarIngrediente />} />

                    <Route path='mesas' element={<Mesas />} />
                    <Route path='mesas/registrar' element={<RegistrarMesa />} />
                    <Route path='mesas/editar/:id' element={<EditarMesa />} />

                    <Route path='productos' element={<ProductosAdministrador />} />
                    <Route path='productos/registrar' element={<RegistrarProducto />} />
                    <Route path='productos/editar/:idproducto&:tipoProducto' element={<EditarProducto />} />
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

                  <Route path='/chef' element={<ChefLayout />}>
                    <Route index element={<Pedidos />} />
                    <Route path=':idPedido' element={<PedidoRealizado />} />
                    <Route path=':idPedido/productos' element={<ProductosCamarero />} />
                    <Route path='pedir' element={<SolicitarMateria />} />
                  </Route>

                  <Route path='/*' element={<Restaurant />} />
                </Routes>
              </IngredientesProvider>
            </PedidosProvider>
          </ProductosProvider>
        </UsuarioProvider>
      </AuthProvider>
    </BrowserRouter >
  );
}

export default App
