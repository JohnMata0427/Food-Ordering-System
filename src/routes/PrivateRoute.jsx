import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

    return localStorage.getItem('token') ? children : <Navigate to="/auth/iniciar-sesion" />;
};