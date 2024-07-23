import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "@pages/auth/Register";
import AuthLayout from "@layouts/AuthLayout";
import NotFound from "@pages/404";
import Home from "@pages/Home";

import { AuthProvider } from "@contexts/AuthProvider";

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
