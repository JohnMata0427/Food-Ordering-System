import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
    return !localStorage.getItem("token") ? (
        children
    ) : (
        <Navigate to="/inicio" />
    );
};
