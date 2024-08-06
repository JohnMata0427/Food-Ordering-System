import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const perfil = (token) => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/perfil`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        console.log(data);
        setAuth(data);
      })
      .catch(() => {
        localStorage.removeItem("token");
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) perfil(token);
  }, []);

  const uploadPerfil = async (datos) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return {
        respuesta: "No se encontró el token de autenticación",
        exito: false,
      };
    }
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/chef/${datos.id}`;
      console.log(url);
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const respuesta = await axios.put(url, datos, options);
      perfil(token);
      return { respuesta: respuesta.data.msg, exito: true };
    } catch (error) {
      return { respuesta: error.response.data.msg, exito: false };
    }
  };
  const AddProductoAsync = async (formData) => {
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/chef/productos/registro`;
      const option = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const respuesta = await axios.post(url, formData, option);
      return { respuesta: respuesta.data.msg, exito: true };
    } catch (error) {
      return { respuesta: error.response.data.msg, exito: false };
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, uploadPerfil , AddProductoAsync }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
