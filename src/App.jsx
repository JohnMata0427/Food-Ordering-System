import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "@pages/auth/Register";
import AuthLayout from "@layouts/AuthLayout";
import NotFound from "@pages/404";
import Home from "@pages/Home";
import { useState } from "react";

function App() {

  const [isAuth, setIsAuth] = useState(false);

	return (
		<>
			<BrowserRouter>
				<Routes>
          <Route path="/" element={isAuth ? <Navigate to="/home" /> : <Navigate to="/auth/registro" />} />
					<Route path="auth" element={<AuthLayout />}>
						<Route path="registro" element={<Register />} />
					</Route>

          <Route path="/home" element={<Home />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
