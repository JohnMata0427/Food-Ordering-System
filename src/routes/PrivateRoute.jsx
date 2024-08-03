import { useContext } from "react";
import { AuthContext } from "@contexts/AuthProvider";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
	const { auth } = useContext(AuthContext);

    console.log(auth);

    return auth.nombre ? children : <Navigate to="/auth/iniciar-sesion" />;
};