// import { createContext, useState } from "react";
// import axios from "axios";

// const TratamientosContext = createContext();

// const TratamientosProvider = ({ children }) => {

// 	const handleModal = () => {
// 		setModal(!modal);
// 	};

// 	const registrarTratamientos = async (datos) => {
// 		const token = localStorage.getItem("token");
// 		try {
// 			const respuesta = await axios.post(
// 				`${import.meta.env.VITE_BACKEND_URL}/tratamiento/registro`,
// 				datos,
// 				{
// 					headers: {
// 						"Content-Type": "application/json",
// 						Authorization: `Bearer ${token}`,
// 					},
// 				}
// 			);
// 			setTratamientos([respuesta.data.tratamiento, ...tratamientos]);
// 			setAlertaTratamiento({
// 				respuesta: "Tratamiento registrado con exito",
// 				exito: true,
// 			});
// 		} catch (error) {
// 			setAlertaTratamiento({
// 				respuesta: error.response.data.res,
// 				exito: false,
// 			});
// 		}
// 	};

// 	const actualizarTratamiento = async (datos, id) => {
// 		try {
// 			const respuesta = await axios.put(
// 				`${import.meta.env.VITE_BACKEND_URL}/tratamiento/${id}`,
// 				datos,
// 				{
// 					headers: {
// 						"Content-Type": "application/json",
// 						Authorization: `Bearer ${localStorage.getItem(
// 							"token"
// 						)}`,
// 					},
// 				}
// 			);
// 			setTratamientos(
// 				tratamientos.map((tratamiento) =>
// 					tratamiento._id === id
// 						? respuesta.data.tratamiento
// 						: tratamiento
// 				)
// 			);
// 			setAlertaTratamiento({
// 				respuesta: "Tratamiento actualizado con exito",
// 				exito: true,
// 			});
// 		} catch (error) {
// 			setAlertaTratamiento({
// 				respuesta: error.response.data.res,
// 				exito: false,
// 			});
// 		}
// 	};

// 	const eliminarTratamiento = async (id) => {
// 		if (confirm(`¿Está seguro de eliminar el tratamiento ${id}`)) {
// 			try {
// 				await axios.delete(
// 					`${import.meta.env.VITE_BACKEND_URL}/tratamiento/${id}`,
// 					{
// 						headers: {
// 							"Content-Type": "application/json",
// 							Authorization: `Bearer ${localStorage.getItem(
// 								"token"
// 							)}`,
// 						},
// 					}
// 				);
// 				setTratamientos(
// 					tratamientos.filter((tratamiento) => tratamiento._id !== id)
// 				);
// 				setAlertaTratamiento({
// 					respuesta: "Tratamiento eliminado con exito",
// 					exito: true,
// 				});
// 				setTimeout(() => {
// 					setAlertaTratamiento({});
// 				}, 5000);
// 			} catch (error) {
// 				setAlertaTratamiento({
// 					respuesta: error.response.data.res,
// 					exito: false,
// 				});
// 				setTimeout(() => {
// 					setAlertaTratamiento({});
// 				}, 5000);
// 			}
// 		}
// 	};

// 	const actualizarEstadoTratamiento = async (id) => {
// 		if (
// 			confirm(
// 				`¿Está seguro de cambiar el estado del tratamiento ${id} a finalizado?`
// 			)
// 		)
// 			try {
// 				const response = await axios.patch(
// 					`${
// 						import.meta.env.VITE_BACKEND_URL
// 					}/tratamiento/estado/${id}`,
// 					{},
// 					{
// 						headers: {
// 							"Content-Type": "application/json",
// 							Authorization: `Bearer ${localStorage.getItem(
// 								"token"
// 							)}`,
// 						},
// 					}
// 				);
// 				setTratamientos(
// 					tratamientos.filter((tratamiento) => tratamiento._id !== id)
// 				);
// 				setAlertaTratamiento({
// 					respuesta: response.data.res,
// 					exito: true,
// 				});
// 			} catch (error) {
// 				setAlertaTratamiento({
// 					respuesta: error.response.data.res,
// 					exito: false,
// 				});
// 			}
// 	};

// 	return (
// 		<TratamientosContext.Provider
// 			value={{
// 				modal,
// 				setModal,
// 				handleModal,
// 				tratamientos,
// 				alertaTratamiento,
// 				setTratamientos,
// 				registrarTratamientos,
// 				actualizarTratamiento,
// 				eliminarTratamiento,
// 				actualizarEstadoTratamiento,
// 				dataModal,
// 				setDataModal,
// 			}}
// 		>
// 			{children}
// 		</TratamientosContext.Provider>
// 	);
// };
// export { TratamientosProvider };
// export default TratamientosContext;