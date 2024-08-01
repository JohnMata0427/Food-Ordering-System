import React, { useContext, useRef } from "react";
import ChefPerfil from "@assets/ui/ChefPerfil.png";
import chefsImg from "@assets/ui/chefs.png";
import usuarioIcon from "@assets/icons/usuario.svg";
import telefonoIcon from "@assets/icons/telefono.svg";
import correoIcon from "@assets/icons/correo.svg";
import contraseñaIcon from "@assets/icons/contraseña.svg";
import { CustomButton } from "@components/CustomButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Alerta from "@components/Alerta";
import axios from "axios";
import documentoIcon from "@assets/icons/documento.svg";
import { AuthContext } from "../../contexts/AuthProvider";

const ActualizarPerfil = () => {
	const { auth, uploadPerfil } = useContext(AuthContext);
	const [message, setMessage] = useState({});

	const [form, setForm] = useState({
		id: auth._id,
		nombre: auth.nombre || "",
		email: auth.email || "",
		especialidad: auth.especialidad || "",
		trayectoria: auth.trayectoria || "",
	});

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (Object.values(form).includes("")) {
			setMessage({
				respuesta: "Todos los campos deben ser ingresados",
				tipo: false,
			});

			setTimeout(() => {
				setMessage({});
			}, 3000);
			return;
		}
		const resultado = await uploadPerfil(form);
		setMessage(resultado);
		setTimeout(() => {
			setMessage({});
		}, 3000);
	};

	return (
		<div className="flex justify-center my-4">
			<div>
				<img
					src={ChefPerfil}
					alt="ChefPerfil"
					className="w-full h-auto max-h-[calc(100vh-7rem)] object-contain"
				/>
				<CustomButton
					texto="Actualizar Foto"
					color="black"
					masEstilos="text-white w-full gap-x-2 rounded-xl mt-4"
				>
					<svg className="z-10" width="20" viewBox="0 0 42 40">
						<path
							className="fill-white group-hover:fill-black"
							d="M33.75 11.25H29.1406C28.9062 11.25 28.6156 11.0984 28.3891 10.8594L26.3625 7.66094C26.3305 7.61018 26.2947 7.56187 26.2555 7.51641C25.5555 6.7 24.6094 6.25 23.5938 6.25H16.4062C15.3906 6.25 14.4445 6.7 13.7445 7.51641C13.7053 7.56187 13.6695 7.61018 13.6375 7.66094L11.6109 10.8641C11.4375 11.0531 11.1938 11.2547 10.9375 11.2547V10.6297C10.9375 10.2982 10.8058 9.98022 10.5714 9.7458C10.337 9.51138 10.019 9.37969 9.6875 9.37969H7.8125C7.48098 9.37969 7.16304 9.51138 6.92862 9.7458C6.6942 9.98022 6.5625 10.2982 6.5625 10.6297V11.2547H6.25C5.25576 11.2557 4.30253 11.6511 3.59949 12.3542C2.89645 13.0572 2.50103 14.0104 2.5 15.0047V30C2.50103 30.9942 2.89645 31.9475 3.59949 32.6505C4.30253 33.3535 5.25576 33.749 6.25 33.75H33.75C34.7442 33.749 35.6975 33.3535 36.4005 32.6505C37.1035 31.9475 37.499 30.9942 37.5 30V15C37.499 14.0058 37.1035 13.0525 36.4005 12.3495C35.6975 11.6465 34.7442 11.251 33.75 11.25ZM20 28.75C18.5166 28.75 17.0666 28.3101 15.8332 27.486C14.5999 26.6619 13.6386 25.4906 13.0709 24.1201C12.5032 22.7497 12.3547 21.2417 12.6441 19.7868C12.9335 18.332 13.6478 16.9956 14.6967 15.9467C15.7456 14.8978 17.082 14.1835 18.5368 13.8941C19.9917 13.6047 21.4997 13.7532 22.8701 14.3209C24.2406 14.8886 25.4119 15.8499 26.236 17.0832C27.0601 18.3166 27.5 19.7666 27.5 21.25C27.4977 23.2384 26.7068 25.1448 25.3008 26.5508C23.8948 27.9568 21.9884 28.7477 20 28.75Z"
							fill="white"
						/>
					</svg>
				</CustomButton>
			</div>

			<div className="flex flex-col justify-center  sm:w-1/2 w-full py-4 pl-6">
				<h1 className="text-2xl font-semibold mb-2 font-aoboshi pt-2 pb-5">
					Editar Perfil
				</h1>

				<form
					className="flex flex-col gap-y-8 items-center sm:w-[95%] w-3/4"
					onSubmit={handleSubmit}
				>
					<div className="flex flex-col gap-y-4 w-full">
						<div className="relative">
							<img
								className="absolute top-[9px] left-3 size-4"
								src={usuarioIcon}
								alt="Icono de usuario"
							/>
							<input
								id="nombre"
								type="text"
								name="nombre"
								className="border border-black placeholder-slate-700 text-md p-1 rounded-xl pl-9 w-full hover:border-slate-800 transition-all shadow-md shadow-black/20"
								placeholder="Nombre"
								value={form.nombre}
								onChange={handleChange}
							/>
						</div>

						<div className="relative">
							<img
								className="absolute top-[9px] left-3 size-4"
								src={correoIcon}
								alt="Icono de correo"
							/>
							<input
								id="email"
								name="email"
								type="email"
								className="border border-black placeholder-slate-700 text-md p-1 rounded-xl pl-9 w-full hover:border-slate-800 transition-all shadow-md shadow-black/20"
								placeholder="Correo Electrónico"
								value={form.email}
								onChange={handleChange}
							/>
						</div>

						<div className="relative">
							<img
								className="absolute top-[9px] left-3 size-4"
								src={usuarioIcon}
								alt="Icono de contraseña"
							/>
							<input
								id="especialidad"
								name="especialidad"
								type="text"
								className="border border-black placeholder-slate-700 text-md p-1 rounded-xl pl-9 w-full hover:border-slate-800 transition-all shadow-md shadow-black/20"
								placeholder="Especialidad"
								value={form.especialidad}
								onChange={handleChange}
							/>
						</div>

						<div className="relative">
							<img
								className="absolute top-[9px] left-3 size-4"
								src={documentoIcon}
								alt="Icono de contraseña"
							/>
							<textarea
								id="trayectoria"
								name="trayectoria"
								type="text"
								className="border border-black h-32 placeholder-slate-700 text-md p-1 rounded-xl pl-9 w-full hover:border-slate-800 transition-all shadow-md shadow-black/20"
								placeholder="Trayectoria"
								value={form.trayectoria}
								onChange={handleChange}
							/>
						</div>
					</div>
					{message.mensaje && (
						<Alerta exito={message.exito}>{message.mensaje}</Alerta>
					)}

					<div className="flex flex-col items-center gap-y-2">
						<CustomButton
							texto="Guardar Cambios"
							color="yellow"
							masEstilos="group w-full justify-center gap-x-2 rounded-xl mb-2"
						>
							<svg className="z-10" width="20" viewBox="0 0 33 40">
								<path
									className="fill-black group-hover:fill-[#DCB50E]"
									id="Vector"
									d="M29.7219 2.5H5C4.33696 2.5 3.70107 2.76339 3.23223 3.23223C2.76339 3.70107 2.5 4.33696 2.5 5V35C2.5 35.663 2.76339 36.2989 3.23223 36.7678C3.70107 37.2366 4.33696 37.5 5 37.5H35C35.6625 37.4981 36.2973 37.2342 36.7657 36.7657C37.2342 36.2973 37.4981 35.6625 37.5 35V10.2781L29.7219 2.5ZM8.75 13.75V8.75H23.75V13.75H8.75ZM26.243 27.7938C26.1861 29.0036 25.7789 30.1708 25.0709 31.1535C24.363 32.1362 23.3847 32.892 22.2551 33.3291C21.1256 33.7661 19.8934 33.8655 18.7084 33.6153C17.5233 33.365 16.4366 32.7758 15.5802 31.9193C14.7238 31.0628 14.1347 29.976 13.8846 28.791C13.6345 27.6059 13.734 26.3737 14.1712 25.2442C14.6084 24.1147 15.3643 23.1365 16.3471 22.4287C17.3299 21.7208 18.4972 21.3138 19.707 21.257C20.5756 21.2188 21.4426 21.3617 22.253 21.6767C23.0633 21.9917 23.7992 22.4718 24.4139 23.0866C25.0287 23.7014 25.5087 24.4374 25.8236 25.2478C26.1385 26.0582 26.2813 26.9252 26.243 27.7938Z"
								/>
							</svg>
						</CustomButton>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ActualizarPerfil;
