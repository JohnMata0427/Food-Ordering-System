import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, token }) => {
  return token ? children : <Navigate to="/auth/iniciar-sesion" />;
};
