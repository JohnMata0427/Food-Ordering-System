// Importación de imágenes
import chefsImg from "@assets/ui/chefs.png";
import verificationicon from "@assets/icons/codigo-verificacion.svg";
import { CustomButton } from "@components/CustomButton";

import { useState } from "react";
import Alerta from "@components/Alerta";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Verification() {
	const [verificationCode, setVerificationCode] = useState("");
	const [mensaje, setMensaje] = useState({});
	const navigate = useNavigate();

	const handleVerificationCodeChange = (e) => {
		setVerificationCode(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `${import.meta.env.VITE_BACKEND_URL}/verificarcodigo`;
			const respuesta = await axios.post(url, { verificationCode });
			setMensaje({ respuesta: respuesta.data.msg, exito: true });
			setTimeout(() => {
				navigate(`/auth/reestablecer-contraseña?i=${respuesta.data.id}&v=${respuesta.data.verificationCode}`);
			}, 3000);
		} catch (error) {
			setMensaje({ respuesta: error.response.data.msg, exito: false });
		}
	};

	return (
		<>
			<div className="flex flex-col justify-center items-center sm:w-2/5 w-full py-4">
				<img className="h-40" src={chefsImg} alt="Icono de Chefs" />
				<h1 className="text-2xl font-semibold text-center uppercase mt-2 mb-7">
					Codigo de Verificación
				</h1>

				<form
					className="flex flex-col gap-y-8 items-center sm:w-[65%] w-3/4"
					onSubmit={handleSubmit}
				>
					<div className="relative w-full">
						<img
							className="absolute inset-y-0 my-auto left-4 size-4"
							src={verificationicon}
							alt="Icono de verificación"
						/>
						<input
							id="verificationCode"
							name="verificationCode"
							onChange={handleVerificationCodeChange}
							type="text"
							className="border border-black placeholder-slate-700 text-md p-2.5 rounded-xl pl-11 w-full hover:border-slate-800  shadow-md shadow-black/20"
							placeholder="Ingrese el código de verificación"
							required
						/>
					</div>

					{mensaje.respuesta && (
						<Alerta exito={mensaje.exito}>{mensaje.respuesta}</Alerta>
					)}

					<div className="flex flex-col items-center gap-y-2">
						<CustomButton
							texto="Enviar"
							color="yellow"
							masEstilos="group w-full justify-center gap-x-2 rounded-xl mb-2"
						>
							<svg width="20" viewBox="0 0 33 31">
								<path
									className="fill-black group-hover:fill-[#DCB50E]"
									id="Vector"
									d="M31.4856 13.2879L31.4747 13.2827L2.27979 0.135588C2.03422 0.0239993 1.76702 -0.0197646 1.50206 0.00821157C1.23711 0.0361877 0.982679 0.135031 0.761524 0.295901C0.527868 0.462128 0.33594 0.688816 0.20301 0.955569C0.0700801 1.22232 0.000317936 1.52077 3.7325e-07 1.82406V10.2323C0.00013021 10.6469 0.133478 11.0485 0.37706 11.3678C0.620643 11.6872 0.959199 11.9042 1.33438 11.9816L17.2573 15.1782C17.3199 15.1911 17.3764 15.2273 17.417 15.2806C17.4576 15.3338 17.4798 15.4008 17.4798 15.4699C17.4798 15.5391 17.4576 15.606 17.417 15.6593C17.3764 15.7125 17.3199 15.7487 17.2573 15.7616L1.33506 18.9582C0.959987 19.0354 0.62145 19.2522 0.377759 19.5712C0.134068 19.8903 0.00047853 20.2916 3.7325e-07 20.7061V29.1158C-0.000181173 29.4054 0.0658672 29.6905 0.192218 29.9456C0.31857 30.2006 0.501271 30.4177 0.723926 30.5771C0.991757 30.7704 1.30608 30.8736 1.62764 30.874C1.85119 30.8738 2.07244 30.8251 2.27842 30.7308L31.4727 17.6586L31.4856 17.652C31.8786 17.4686 32.2135 17.1642 32.4487 16.7763C32.684 16.3885 32.8094 15.9343 32.8094 15.4699C32.8094 15.0055 32.684 14.5513 32.4487 14.1635C32.2135 13.7757 31.8786 13.4713 31.4856 13.2879Z"
								/>
							</svg>
						</CustomButton>
						<Link to="/auth/iniciar-sesion">
							<CustomButton
								texto="Volver al inicio"
								color="black"
								hover="white"
								masEstilos="group w-full justify-center gap-x-2 rounded-xl mb-2 text-white"
							>
								<svg
									width="20"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g id="home">
										<path
											id="Vector"
											className="fill-white group-hover:fill-black"
											d="M20.4344 7.9125C20.3181 7.80124 20.1633 7.73914 20.0023 7.73914C19.8414 7.73914 19.6866 7.80124 19.5703 7.9125L5.1875 21.6523C5.12642 21.7108 5.07782 21.781 5.04466 21.8587C5.01149 21.9365 4.99444 22.0202 4.99453 22.1047L4.99219 35C4.99219 35.663 5.25558 36.2989 5.72442 36.7678C6.19326 37.2366 6.82915 37.5 7.49219 37.5H15C15.3315 37.5 15.6495 37.3683 15.8839 37.1339C16.1183 36.8995 16.25 36.5815 16.25 36.25V25.625C16.25 25.4592 16.3158 25.3003 16.4331 25.1831C16.5503 25.0658 16.7092 25 16.875 25H23.125C23.2908 25 23.4497 25.0658 23.5669 25.1831C23.6842 25.3003 23.75 25.4592 23.75 25.625V36.25C23.75 36.5815 23.8817 36.8995 24.1161 37.1339C24.3505 37.3683 24.6685 37.5 25 37.5H32.5047C33.1677 37.5 33.8036 37.2366 34.2725 36.7678C34.7413 36.2989 35.0047 35.663 35.0047 35V22.1047C35.0048 22.0202 34.9877 21.9365 34.9546 21.8587C34.9214 21.781 34.8728 21.7108 34.8117 21.6523L20.4344 7.9125Z"
											fill="white"
										/>
										<path
											id="Vector_2"
											className="fill-white group-hover:fill-black"
											d="M38.3524 19.0742L32.5086 13.4836V5C32.5086 4.66848 32.3769 4.35054 32.1425 4.11612C31.9081 3.8817 31.5901 3.75 31.2586 3.75H27.5086C27.1771 3.75 26.8592 3.8817 26.6247 4.11612C26.3903 4.35054 26.2586 4.66848 26.2586 5V7.5L21.7336 3.17344C21.3102 2.74531 20.6805 2.5 20 2.5C19.3219 2.5 18.6938 2.74531 18.2703 3.17422L1.65315 19.0727C1.16722 19.5414 1.10628 20.3125 1.54847 20.8203C1.65951 20.9485 1.79547 21.0527 1.94808 21.1267C2.10068 21.2007 2.26674 21.2428 2.43615 21.2506C2.60557 21.2583 2.77478 21.2315 2.9335 21.1718C3.09222 21.112 3.23713 21.0206 3.3594 20.9031L19.5703 5.4125C19.6867 5.30124 19.8414 5.23914 20.0024 5.23914C20.1633 5.23914 20.3181 5.30124 20.4344 5.4125L36.6469 20.9031C36.8857 21.1321 37.2056 21.2571 37.5364 21.2507C37.8673 21.2442 38.182 21.1069 38.4117 20.8687C38.8914 20.3719 38.8516 19.5516 38.3524 19.0742Z"
											fill="white"
										/>
									</g>
								</svg>
							</CustomButton>
						</Link>
					</div>
				</form>
			</div>
		</>
	);
}
