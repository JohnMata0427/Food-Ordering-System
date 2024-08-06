import { useContext, useState } from "react";
import usuarioIcon from "@assets/icons/usuario.svg";
import correoIcon from "@assets/icons/correo.svg";
import documentoIcon from "@assets/icons/documento.svg";
import fondoPerfil from "@assets/ui/fondo-perfil.png";
import fotoPerfil from "@assets/ui/Samuel.png";
import Alerta from "@components/Alerta";
import { CustomButton } from "@components/CustomButton";
import { AuthContext } from "@contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

export default function ActualizarPerfil() {
	const { auth, uploadPerfil } = useContext(AuthContext);
	const [mensaje, setMensaje] = useState({});
	const navigate = useNavigate();
	

	const [form, setForm] = useState({
		id: auth._id,
		nombre: auth.nombre,
		apellido: auth.apellido,
		email: auth.email,
		especialidad: auth.especialidad,
		trayectoria: auth.trayectoria,
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
			setMensaje({
				respuesta: "Todos los campos deben ser ingresados",
				exito: false,
			});

			setTimeout(() => {
				setMensaje({});
			}, 5000);
			return;
		}
		const resultado = await uploadPerfil(form);
		setMensaje(resultado);
		setTimeout(() => {
			navigate("/perfil");
		}, 5000);
	};

	return (
		<section className="flex sm:flex-row flex-col justify-center items-start m-8 gap-x-8">
			<div className="flex flex-col justify-center">
				<div className="sm:h-[550px] relative">
					<img
						className="sm:h-full"
						src={fondoPerfil}
						alt="Foto de Perfil del Chef"
					/>
					<img
						className="absolute inset-0 my-auto rounded-full border-2 border-[#d84012]"
						src={auth.foto?.url}
						alt="Foto de Perfil del Chef"
					/>
				</div>
				<CustomButton
					texto="Actualizar Foto"
					color="black"
					masEstilos="text-white gap-x-2 rounded-xl mt-4"
				>
					<svg width="25" viewBox="0 0 42 40">
						<path
							className="fill-white group-hover:fill-black"
							d="M33.75 11.25h-4.6c-.24 0-.53-.15-.76-.4l-2.03-3.19a3.48 3.48 0 0 0-2.77-1.41h-7.18a3.48 3.48 0 0 0-2.77 1.41l-2.03 3.2c-.17.2-.42.4-.67.4v-.63a1.25 1.25 0 0 0-1.25-1.25H7.8a1.25 1.25 0 0 0-1.25 1.25v.62h-.31A3.75 3.75 0 0 0 2.5 15v15a3.75 3.75 0 0 0 3.75 3.75h27.5A3.75 3.75 0 0 0 37.5 30V15a3.75 3.75 0 0 0-3.75-3.75ZM20 28.75a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
						/>
					</svg>
				</CustomButton>
			</div>

			<div className="flex flex-col justify-center sm:w-3/5 w-full sm:pl-6">
				<h1 className="text-2xl font-semibold mt-4 mb-7 sm:text-start text-center">
					Editar Perfil
				</h1>

				<form
					className="flex flex-col gap-y-8 items-center w-full"
					onSubmit={handleSubmit}
				>
					<div className="flex flex-col gap-y-4 w-full">
						<div className="relative">
							<img
								className="absolute inset-y-0 my-auto left-4 size-4"
								src={usuarioIcon}
								alt="Icono de usuario"
							/>
							<input
								id="nombre"
								type="text"
								name="nombre"
								value={form.nombre || ""}
								onChange={handleChange}
								className="border border-black placeholder-slate-700 text-md p-2.5 rounded-xl pl-11 w-full hover:border-slate-800  shadow-md shadow-black/20"
								placeholder="Nombre"
								required
							/>
						</div>

						<div className="relative">
							<img
								className="absolute inset-y-0 my-auto left-4 size-4"
								src={usuarioIcon}
								alt="Icono de usuario"
							/>
							<input
								id="apellido"
								type="text"
								name="apellido"
								value={form.apellido || ""}
								onChange={handleChange}
								className="border border-black placeholder-slate-700 text-md p-2.5 rounded-xl pl-11 w-full hover:border-slate-800  shadow-md shadow-black/20"
								placeholder="Apellido"
								required
							/>
						</div>

						<div className="relative">
							<img
								className="absolute inset-y-0 my-auto left-4 size-4"
								src={correoIcon}
								alt="Icono de correo"
							/>
							<input
								id="email"
								name="email"
								type="email"
								className="border border-black placeholder-slate-700 text-md p-2.5 rounded-xl pl-11 w-full hover:border-slate-800  shadow-md shadow-black/20"
								placeholder="Correo Electrónico"
								value={form.email}
								onChange={handleChange}
							/>
						</div>

						<div className="relative">
							<img
								className="absolute inset-y-0 my-auto left-4 size-4"
								src={usuarioIcon}
								alt="Icono de contraseña"
							/>
							<input
								id="especialidad"
								name="especialidad"
								type="text"
								className="border border-black placeholder-slate-700 text-md p-2.5 rounded-xl pl-11 w-full hover:border-slate-800  shadow-md shadow-black/20"
								placeholder="Especialidad"
								value={form.especialidad}
								onChange={handleChange}
							/>
						</div>

						<div className="relative">
							<img
								className="absolute top-3 my-auto left-3 size-5"
								src={documentoIcon}
								alt="Icono de contraseña"
							/>
							<textarea
								id="trayectoria"
								name="trayectoria"
								type="text"
								className="border border-black placeholder-slate-700 text-md h-40 max-h-40 p-2.5 rounded-xl pl-11 w-full hover:border-slate-800  shadow-md shadow-black/20"
								placeholder="Trayectoria"
								value={form.trayectoria}
								onChange={handleChange}
							/>
						</div>
					</div>
					{mensaje.respuesta && (
						<Alerta exito={mensaje.exito}>
							{mensaje.respuesta}
						</Alerta>
					)}

					<div className="flex sm:flex-row flex-col gap-4">
						<CustomButton
							texto="Guardar Cambios"
							color="yellow"
							masEstilos="group w-full justify-center gap-x-2 rounded-xl"
						>
							<svg width="18" viewBox="0 0 33 40">
								<path
									className="fill-black group-hover:fill-primary"
									id="Vector"
									d="M29.7219 2.5H5C4.33696 2.5 3.70107 2.76339 3.23223 3.23223C2.76339 3.70107 2.5 4.33696 2.5 5V35C2.5 35.663 2.76339 36.2989 3.23223 36.7678C3.70107 37.2366 4.33696 37.5 5 37.5H35C35.6625 37.4981 36.2973 37.2342 36.7657 36.7657C37.2342 36.2973 37.4981 35.6625 37.5 35V10.2781L29.7219 2.5ZM8.75 13.75V8.75H23.75V13.75H8.75ZM26.243 27.7938C26.1861 29.0036 25.7789 30.1708 25.0709 31.1535C24.363 32.1362 23.3847 32.892 22.2551 33.3291C21.1256 33.7661 19.8934 33.8655 18.7084 33.6153C17.5233 33.365 16.4366 32.7758 15.5802 31.9193C14.7238 31.0628 14.1347 29.976 13.8846 28.791C13.6345 27.6059 13.734 26.3737 14.1712 25.2442C14.6084 24.1147 15.3643 23.1365 16.3471 22.4287C17.3299 21.7208 18.4972 21.3138 19.707 21.257C20.5756 21.2188 21.4426 21.3617 22.253 21.6767C23.0633 21.9917 23.7992 22.4718 24.4139 23.0866C25.0287 23.7014 25.5087 24.4374 25.8236 25.2478C26.1385 26.0582 26.2813 26.9252 26.243 27.7938Z"
								/>
							</svg>
						</CustomButton>
						<Link to="/perfil">
							<CustomButton
								color="red"
								texto="Cancelar"
								masEstilos="text-white w-full justify-center gap-x-2 rounded-xl"
							>
								<svg
									className="size-5"
									width="40"
									viewBox="0 0 30 30"
								>
									<path
										className="fill-white group-hover:fill-red-700"
										d="M15 0C6.73 0 0 6.73 0 15s6.73 15 15 15 15-6.73 15-15S23.27 0 15 0Zm5.43 18.8a1.15 1.15 0 1 1-1.63 1.63l-3.8-3.8-3.8 3.8a1.15 1.15 0 0 1-1.63-1.63l3.8-3.8-3.8-3.8a1.15 1.15 0 0 1 1.63-1.63l3.8 3.8 3.8-3.8a1.15 1.15 0 0 1 1.63 1.63l-3.8 3.8 3.8 3.8Z"
									/>
								</svg>
							</CustomButton>
						</Link>
					</div>
				</form>
			</div>
		</section>
	);
}
