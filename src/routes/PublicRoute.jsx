import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, token }) => {
  return !token ? children : <Navigate to="/inicio" />;
};
