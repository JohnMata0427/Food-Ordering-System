import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from '@/routes/PrivateRoute';
import { PublicRoute } from '@/routes/PublicRoute';
import { AuthProvider } from '@/contexts/AuthProvider';
import AuthLayout from '@/layouts/AuthLayout';
import UserLayout from '@/layouts/UserLayout';

import Register from '@/pages/auth/Register';
import NotFound from '@/pages/404';
import Home from '@/pages/Home';
import Recovery from '@/pages/auth/Recovery';
import Login from '@/pages/auth/Login';
import EmailConfirmed from '@/pages/auth/EmailConfirmed';
import ActualizarPerfil from '@/pages/chef/ActualizarPerfil';
import PerfilChef from '@/pages/chef/PerfilChef';
import Categorias from '@/pages/Categorias';
import Food from '@/pages/Food';
import Drinks from '@/pages/Drinks';
import Snacks from '@/pages/Snacks';
import Contacto from '@/pages/Contacto';
import Reset from '@/pages/auth/Reset';
import Historial from '@/pages/student/Historial';
import DetallePedido from '@/pages/student/DetallePedido';
import DescripcionProducto from '@/pages/DescripcionProducto';
import ChefLayout from '@/layouts/ChefLayout';
import AddProducts from '@/pages/chef/AñadirProductos';
import EditarProducts from '@/pages/chef/EditarProductos';
import ListarProductos from '@/pages/chef/ListarProductos';

export function App() {
  const token = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="auth/*"
            element={
              <PublicRoute token={token}>
                <AuthLayout />
              </PublicRoute>
            }
          >
            <Route path="iniciar-sesion" element={<Login />} />
            <Route path="registro" element={<Register />} />
            <Route path="confirmar-email/:token" element={<EmailConfirmed />} />
            <Route path="recuperar-password/*" element={<Recovery />} />
            <Route path="restablecer-password" element={<Reset />} />
          </Route>

          <Route
            path="/chef/*"
            element={
              <PrivateRoute token={token}>
                <ChefLayout />
              </PrivateRoute>
            }
          >
            <Route path="listar-productos" element={<ListarProductos />} />
            <Route path="añadir-producto" element={<AddProducts />} />
            <Route path="editar-producto/:id" element={<EditarProducts />} />
          </Route>

          <Route
            path="cliente/*"
            element={
              <PrivateRoute token={token}>
                <UserLayout />
              </PrivateRoute>
            }
          >
            <Route path="pedido/:id" element={<DetallePedido />} />
            <Route path="actualizar-perfil" element={<ActualizarPerfil />} />
            <Route path="perfil" element={<PerfilChef />} />
            <Route path="historial" element={<Historial />} />
          </Route>

          <Route path="*" element={<UserLayout />}>
            <Route path="inicio" element={<Home />} />
            <Route path="categorias" element={<Categorias />} />
            <Route path="categorias/comidas" element={<Food />} />
            <Route path="categorias/bebidas" element={<Drinks />} />
            <Route path="categorias/postres" element={<Snacks />} />
            <Route path="producto/:id" element={<DescripcionProducto />} />
            <Route path="contacto" element={<Contacto />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
