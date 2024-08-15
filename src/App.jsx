import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
import { AuthProvider } from "@contexts/AuthProvider";
import AuthLayout from "@layouts/AuthLayout";
import UserLayout from "@layouts/UserLayout";

import Register from "@pages/auth/Register";
import NotFound from "@pages/404";
import Home from "@pages/Home";
import Recovery from "@pages/auth/Recovery";
import Login from "@pages/auth/Login";
import EmailConfirmed from "@pages/auth/EmailConfirmed";
import ActualizarPerfil from "@pages/chef/ActualizarPerfil";
import PerfilChef from "@pages/chef/PerfilChef";
import Categorias from "@pages/Categorias";
import Food from "@pages/Food";
import Drinks from "@pages/Drinks";
import Snacks from "@pages/Snacks";
import Ordenar from "@pages/Ordenar";
import Contacto from "@pages/Contacto";
import Reset from "@pages/auth/Reset";
import Historial from "@pages/student/Historial";
import DetallePedido from "@pages/student/DetallePedido";
import DescripcionProducto from "@pages/DescripcionProducto";
import { PublicRoute } from "./routes/PublicRoute";
import ChefLayout from "./layouts/ChefLayout";
import AddProductComponent from "./pages/chef/AddProduct";
import EditarProductoComponent from "./pages/chef/EditarProducto";
import VerProductoEditar from "./pages/chef/VerProductosEditar";
import EliminarProducto from "./pages/chef/EliminarProducto";
import GestionPedidos from "./pages/GestionPedidos";
import ListarProductos from "./pages/chef/ListarProductos";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route
                            path="auth/*"
                            element={
                                <PublicRoute>
                                    <Routes>
                                        <Route element={<AuthLayout />}>
                                            <Route
                                                index
                                                path="iniciar-sesion"
                                                element={<Login />}
                                            />
                                            <Route
                                                path="registro"
                                                element={<Register />}
                                            />
                                            <Route
                                                path="confirmar-email/:token"
                                                element={<EmailConfirmed />}
                                            />
                                            <Route
                                                path="chef/recuperar-password/*"
                                                element={<Recovery />}
                                            />
                                            <Route
                                                path="chef/restablecer-password"
                                                element={<Reset />}
                                            />
                                        </Route>
                                    </Routes>
                                </PublicRoute>
                            }
                        ></Route>

                        <Route
                            path="/*"
                            element={
                                <PrivateRoute>
                                    <Routes>
                                        <Route element={<UserLayout />}>
                                            <Route
                                                index
                                                path="inicio"
                                                element={<Home />}
                                            />
                                            <Route
                                                path="categorias"
                                                element={<Categorias />}
                                            />
                                            <Route
                                                path="historial"
                                                element={<Historial />}
                                            />
                                            <Route
                                                path="pedido/:id"
                                                element={<DetallePedido />}
                                            />
                                            <Route
                                                path="categorias/comidas"
                                                element={<Food />}
                                            />
                                            <Route
                                                path="categorias/bebidas"
                                                element={<Drinks />}
                                            />
                                            <Route
                                                path="categorias/postres"
                                                element={<Snacks />}
                                            />
                                            <Route
                                                path="ordenar"
                                                element={<Ordenar />}
                                            />
                                            <Route
                                                path="producto/:id"
                                                element={
                                                    <DescripcionProducto />
                                                }
                                            />
                                            <Route
                                                path="contacto"
                                                element={<Contacto />}
                                            />
                                            <Route
                                                path="actualizar-perfil"
                                                element={<ActualizarPerfil />}
                                            />
                                            <Route
                                                path="perfil"
                                                element={<PerfilChef />}
                                            />
                                        </Route>
                                        <Route
                                            path="/chef/*"
                                            element={<ChefLayout />}
                                        >
                                            <Route
                                                index
                                                path="listar-productos"
                                                element={<ListarProductos />}
                                            />
                                            <Route
                                                path="añadir-producto"
                                                element={
                                                    <AddProductComponent />
                                                }
                                            />
                                            <Route
                                                path="editar-producto"
                                                element={
                                                    <EditarProductoComponent />
                                                }
                                            />
                                            <Route
                                                path="eliminar-producto"
                                                element={<h1>Eliminar</h1>}
                                            />
                                        </Route>
                                    </Routes>
                                </PrivateRoute>
                            }
                        />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </>
    );
}
