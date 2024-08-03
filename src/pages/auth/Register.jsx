// Importación de imágenes
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
import PasswordInput from "../../components/PasswordInput";

export default function Register() {
	useEffect(() => {
		document.title = "Asociación de la ESFOT - Registro del Chef";
	}, []);

	const [form, setForm] = useState({
		nombre: "",
		apellido: "",
		telefono: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [message, setMessage] = useState({});

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (form.password !== form.confirmPassword) {
			setMessage({
				mensaje: "Las contraseñas no coinciden",
				exito: false,
			});
			return;
		}

		axios
			.post(`${import.meta.env.VITE_BACKEND_URL}/registro`, form)
			.then((response) => {
				console.log(response);
				setMessage({
					mensaje:
						"Usuario registrado correctamente, revise su correo electrónico para activar su cuenta",
					exito: true,
				});
			})
			.catch((error) => {
				console.log(error);
				setMessage({
					mensaje: error.response.data.msg,
					exito: false,
				});
			});
	};

	return (
		<>
			<div className="flex flex-col justify-center items-center sm:w-2/5 w-full py-4">
				<img className="h-40" src={chefsImg} alt="Icono de Chefs" />
				<h1 className="text-2xl font-semibold mb-2 text-center uppercase pt-2 pb-5">
					Registro Chef
				</h1>

				<form
					className="flex flex-col gap-y-8 items-center sm:w-[65%] w-3/4"
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
								placeholder="Ingrese su nombre"
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
								placeholder="Ingrese su apellido"
								required
							/>
						</div>

						<div className="relative">
							<img
								className="absolute inset-y-0 my-auto left-4 size-4"
								src={telefonoIcon}
								alt="Icono de telefono"
							/>
							<input
								id="telefono"
								type="tel"
								name="telefono"
								value={form.telefono || ""}
								onChange={handleChange}
								className="border border-black placeholder-slate-700 text-md p-2.5 rounded-xl pl-11 w-full hover:border-slate-800  shadow-md shadow-black/20"
								placeholder="Ingrese su número de teléfono"
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
								value={form.email || ""}
								onChange={handleChange}
								type="email"
								className="border border-black placeholder-slate-700 text-md p-2.5 rounded-xl pl-11 w-full hover:border-slate-800  shadow-md shadow-black/20"
								placeholder="Ingrese su correo electrónico"
								required
							/>
						</div>

						<PasswordInput value={form.password} onChange={handleChange} />
						<PasswordInput
							value={form.confirmPassword}
							onChange={handleChange}
							placeholder="Confirme su contraseña"
							name="confirmPassword"
						/>
					</div>

					{message.mensaje && (
						<Alerta exito={message.exito}>{message.mensaje}</Alerta>
					)}

					<div className="flex flex-col items-center gap-y-2">
						<CustomButton
							texto="Registrar"
							color="yellow"
							masEstilos="group w-full justify-center gap-x-2 rounded-xl mb-2"
						>
							<svg width="20" viewBox="0 0 33 31">
								<path
									className="fill-black group-hover:fill-[#DCB50E]"
									id="Vector"
									d="M31.4856 13.2879L31.4747 13.2827L2.27979 0.135588C2.03422 0.0239993 1.76702 -0.0197646 1.50206 0.00821157C1.23711 0.0361877 0.982679 0.135031 0.761524 0.295901C0.527868 0.462128 0.33594 0.688816 0.20301 0.955569C0.0700801 1.22232 0.000317936 1.52077 3.7325e-07 1.82406V10.2323C0.00013021 10.6469 0.133478 11.0485 0.37706 11.3678C0.620643 11.6872 0.959199 11.9042 1.33438 11.9816L17.2573 15.1782C17.3199 15.1911 17.3764 15.2273 17.417 15.2806C17.4576 15.3338 17.4798 15.4008 17.4798 15.4699C17.4798 15.5391 17.4576 15.606 17.417 15.6593C17.3764 15.7125 17.3199 15.7487 17.2573 15.7616L1.33506 18.9582C0.959987 19.0354 0.62145 19.2522 0.377759 19.5712C0.134068 19.8903 0.00047853 20.2916 3.7325e-07 20.7061V29.1158C-0.000181173 29.4054 0.0658672 29.6905 0.192218 29.9456C0.31857 30.2006 0.501271 30.4177 0.723926 30.5771C0.991757 30.7704 1.30608 30.8736 1.62764 30.874C1.85119 30.8738 2.07244 30.8251 2.27842 30.7308L31.4727 17.6586L31.4856 17.652C31.8786 17.4686 32.2135 17.1642 32.4487 16.7763C32.684 16.3885 32.8094 15.9343 32.8094 15.4699C32.8094 15.0055 32.684 14.5513 32.4487 14.1635C32.2135 13.7757 31.8786 13.4713 31.4856 13.2879Z"
									fill="black"
								/>
							</svg>
						</CustomButton>
						<span className="text-sm">
							¿Tienes una cuenta?{" "}
							<Link
								className="font-bold text-secondary hover:text-secondary/80 "
								to="/auth/iniciar-sesion"
							>
								Inicia sesión
							</Link>
						</span>

						<Link
							className="text-sm font-bold text-secondary hover:text-secondary/80"
							to="/auth/recuperar-contraseña"
						>
							¿Olvidaste tu contraseña?
						</Link>
					</div>
				</form>
			</div>
		</>
	);
}
