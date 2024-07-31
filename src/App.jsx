import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "@pages/auth/Register";
import NotFound from "@pages/404";
import Home from "@pages/Home";

import AuthLayout from "./layouts/AuthLayout";
import { AuthProvider } from "@contexts/AuthProvider";
// import Reset from "./pages/auth/Verification";
// import Verification from "./pages/auth/Verification";
import Recovery from "./pages/auth/Recovery";
import Login from "./pages/auth/Login";
import ConfirmEmail from "./pages/auth/ConfirmEmail";
import EmailConfirmed from "./pages/auth/EmailConfirmed";

function App() {

	const isAuth = localStorage.getItem("token");

	return (
		<>
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route path="/" element={isAuth ? <Home /> : <Navigate to="/auth/registro" />} />
						<Route path="auth" element={<AuthLayout />}>
							<Route path="registro" element={<Register />} />
							<Route path="confirmar-email/:token" element={<ConfirmEmail />} />
							<Route path="email-confirmado" element={<EmailConfirmed />} />
							<Route path="iniciar-sesion" element={<Login />} />
							<Route path="recuperar-contraseña" element={<Recovery />} />
							

							
							{/*<Route path="codigo-verificacion" element={<Verification />} />
							<Route path="restablecer-contraseña" element={<Reset />} /> */}
						</Route>

						<Route path="/home" element={<Home />} />

						<Route path="*" element={<NotFound />} />
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
