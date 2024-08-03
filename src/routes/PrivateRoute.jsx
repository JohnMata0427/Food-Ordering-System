import { useContext } from "react";
import { AuthContext } from "@contexts/AuthProvider";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
	const { auth } = useContext(AuthContext);

    if (!auth._id) {
        // Puedes mostrar un spinner o algún tipo de indicador de carga aquí
        return <div>Loading...</div>;
    }

    return auth._id ? children : <Navigate to="/auth/iniciar-sesion" />;
};