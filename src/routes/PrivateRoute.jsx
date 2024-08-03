import { useContext } from "react";
import { AuthContext } from "@contexts/AuthProvider";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
	const autenticado = localStorage.getItem('token')


    

    return autenticado ? children : <Navigate to="/auth/iniciar-sesion" />;
};