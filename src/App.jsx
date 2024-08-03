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
import ConfirmEmail from "@pages/auth/ConfirmEmail";
import EmailConfirmed from "@pages/auth/EmailConfirmed";
import ActualizarPerfil from "@pages/chef/ActualizarPerfil";
import PerfilChef from "@pages/chef/PerfilChef";
import Categorias from "@pages/Categorias";
import Ordenar from "@pages/Ordenar";
import Contacto from "@pages/Contacto";
import Verification from "@pages/auth/Verification";
import Reset from "@pages/auth/Reset";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route path="auth" element={<AuthLayout />}>
							<Route index path="iniciar-sesion" element={<Login />} />
							<Route path="registro" element={<Register />} />
							<Route path="confirmar-email/:token" element={<ConfirmEmail />} />
							<Route path="email-confirmado" element={<EmailConfirmed />} />
							<Route path="recuperar-contraseña" element={<Recovery />} />
							<Route path="codigo-verificacion" element={<Verification />} />
							<Route path="reestablecer-contraseña" element={<Reset />} />
						</Route>

						<Route
							path="/*"
							element={
								<PrivateRoute>
									<Routes>
										<Route element={<UserLayout />}>
											<Route index path="inicio" element={<Home />} />
											<Route path="categorias" element={<Categorias />} />
											<Route path="ordenar" element={<Ordenar />} />
											<Route path="contacto" element={<Contacto />} />
											<Route
												path="actualizar-perfil"
												element={<ActualizarPerfil />}
											/>
											<Route path="perfil" element={<PerfilChef />} />
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