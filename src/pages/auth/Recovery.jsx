import { useState } from "react";
import { Link } from "react-router-dom";

import chefsImg from "@assets/ui/chefs.png";
import correoIcon from "@assets/icons/correo.svg";
import verificationIcon from "@assets/icons/codigo-verificacion.svg";
import Alerta from "@components/Alerta";
import { CustomButton } from "@components/CustomButton";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Recovery() {
    const location = useLocation().pathname.split("/");
    const navigate = useNavigate();
    const [mensaje, setMensaje] = useState({});
    const [email, setEmail] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [sentEmail, setSentEmail] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let response;
            if (!sentEmail) {
                response = await axios.post(
                    `${import.meta.env.VITE_BACKEND_URL}/chef/recuperarpassword`,
                    { email },
                );
                setSentEmail(true);
            } else {
                response = await axios.post(
                    `${import.meta.env.VITE_BACKEND_URL}/verificarcodigo`,
                    { verificationCode },
                );
                navigate(
                    `/auth/restablecer-contraseña?i=${response.data.id}&v=${response.data.verificationCode}`,
                );
            }
            setMensaje({ respuesta: response.data.msg, exito: true });
        } catch ({ response }) {
            setMensaje({ respuesta: response.data.msg, exito: false });
        }
    };

    useEffect(() => {
        if (location.length > 3) {
            const verifyWithToken = async () => {
                try {
                    const response = await axios.get(
                        `${import.meta.env.VITE_BACKEND_URL}/chef/recuperarpassword/${location[3]}`,
                    );
                    navigate(
                        `/auth/restablecer-contraseña?i=${response.data.id}&v=${response.data.verificationCode}`,
                    );
                } catch ({ response }) {
                    console.log(response)
                    setMensaje({ respuesta: response.data.msg, exito: false });
                }
            };
            verifyWithToken();
        }
    }, []);

    return (
        <>
            <div className="flex w-full flex-col items-center justify-center py-4 sm:w-2/5">
                <img className="h-40" src={chefsImg} alt="Icono de Chefs" />
                <h1 className="mb-2 pb-5 pt-2 text-center text-2xl font-semibold uppercase">
                    {!sentEmail ? "Recuperar Contraseña" : "Verificar Código"}
                </h1>

                <form
                    className="flex w-3/4 flex-col items-center gap-y-4 sm:w-[65%]"
                    onSubmit={handleSubmit}
                >
                    <div className="relative w-full">
                        {!sentEmail ? (
                            <>
                                <img
                                    className="absolute inset-y-0 left-4 my-auto size-4"
                                    src={correoIcon}
                                    alt="Icono de correo"
                                />
                                <input
                                    id="email"
                                    name="email"
                                    value={email || ""}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    type="email"
                                    className="text-md w-full rounded-xl border border-black p-2.5 pl-11 placeholder-slate-700 shadow-md shadow-black/20 hover:border-slate-800"
                                    placeholder="Ingrese su correo electrónico"
                                    required
                                />
                            </>
                        ) : (
                            <>
                                <img
                                    className="absolute inset-y-0 left-4 my-auto size-4"
                                    src={verificationIcon}
                                    alt="Icono de verificación"
                                />
                                <input
                                    id="verificationCode"
                                    name="verificationCode"
                                    value={verificationCode || ""}
                                    onChange={(e) => {
                                        setVerificationCode(e.target.value);
                                    }}
                                    type="text"
                                    className="text-md w-full rounded-xl border border-black p-2.5 pl-11 placeholder-slate-700 shadow-md shadow-black/20 hover:border-slate-800"
                                    placeholder="Ingrese el código de verificación"
                                    required
                                />
                            </>
                        )}
                    </div>

                    {mensaje.respuesta && (
                        <Alerta exito={mensaje.exito}>
                            {mensaje.respuesta}
                        </Alerta>
                    )}

                    <div className="flex flex-col items-center gap-y-2">
                        <CustomButton
                            texto="Enviar"
                            color="yellow"
                            masEstilos="group w-full justify-center gap-x-2 rounded-xl mb-2"
                        >
                            <svg className="size-5" viewBox="0 0 33 31">
                                <path
                                    className="fill-black group-hover:fill-primary"
                                    d="M31.5 13.3 2.3 0A1.5 1.5 0 0 0 .8.3C.5.5.3.7.2 1a2 2 0 0 0-.2.8v8.4c0 .4.1.8.4 1.2.2.3.6.5 1 .6l15.9 3.2h.1v.5h-.1L1.3 19c-.3 0-.7.3-1 .6-.2.3-.3.7-.3 1.1v8.4c0 .3 0 .6.2.8l.5.7a1.5 1.5 0 0 0 1.6.1l29.2-13c.4-.2.7-.5 1-1a2.5 2.5 0 0 0 0-2.5l-1-1Z"
                                />
                            </svg>
                        </CustomButton>
                        <Link to="/iniciar-sesion">
                        <CustomButton
                            texto="Volver al inicio"
                            color="black"
                            hover="white"
                            masEstilos="group w-full justify-center gap-x-2 rounded-xl mb-2 text-white"
                        >
                            <svg className="size-5" viewBox="0 0 40 40">
                                <path
                                    className="fill-white group-hover:fill-black"
                                    d="M20.4 8a.6.6 0 0 0-.8 0L5.2 21.6a.6.6 0 0 0-.2.4v13a2.5 2.5 0 0 0 2.5 2.5H15a1.3 1.3 0 0 0 1.3-1.3V25.6a.6.6 0 0 1 .6-.6H23a.6.6 0 0 1 .6.6v10.6a1.3 1.3 0 0 0 1.3 1.3h7.5A2.5 2.5 0 0 0 35 35V22.1a.6.6 0 0 0-.2-.4L20.4 7.9Z"
                                />
                                <path
                                    className="fill-white group-hover:fill-black"
                                    d="m38.4 19-5.9-5.5V5a1.3 1.3 0 0 0-1.2-1.3h-3.8A1.3 1.3 0 0 0 26.3 5v2.5l-4.6-4.3c-.4-.5-1-.7-1.7-.7s-1.3.2-1.7.7L1.7 19c-.5.4-.6 1.2-.2 1.7a1.3 1.3 0 0 0 1.9.1L19.6 5.4a.6.6 0 0 1 .8 0L36.6 21a1.3 1.3 0 0 0 1.8 0c.5-.5.5-1.3 0-1.8Z"
                                />
                            </svg>
                        </CustomButton></Link>
                        <span className="text-sm">
                            ¿Tienes una cuenta?{" "}
                            <Link
                                className="font-bold text-secondary hover:underline"
                                to="/auth/iniciar-sesion"
                            >
                                Inicia sesión
                            </Link>
                        </span>
                        <span className="text-sm">
                            ¿No tienes cuenta?{" "}
                            <Link
                                className="font-bold text-secondary hover:underline"
                                to="/auth/registro"
                            >
                                Registrate
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
        </>
    );
}
