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

	return (
		<AuthContext.Provider value={{ auth, setAuth, data }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext };
