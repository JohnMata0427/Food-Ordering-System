import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({});
    const [data, setData] = useState('Initial data...');

	const perfil = (token) => {
		axios
			.get(`${import.meta.env.VITE_BACKEND_URL}/perfil`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setAuth(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			perfil(token);
		}
	}, []);


	const uploadPerfil = async(datos) => {
        const token = localStorage.getItem('token')

		
		if (!token) {
			
			return { respuesta: 'No se encontró el token de autenticación', tipo: false };
		}
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/chef/${datos._id}`
            const options = {
                headers: {
                    method: 'PUT',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            const respuesta = await axios.put(url, datos, options)
            perfil(token)
            return {respuesta:respuesta.data.msg,tipo:true}
        } catch (error) {
            return {respuesta:error.response.data.msg,tipo:false}
        }
}


	return (
		<AuthContext.Provider value={{ auth, setAuth, data, uploadPerfil }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext };

