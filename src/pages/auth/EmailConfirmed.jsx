// Importación de imágenes
import chefsImg from "@assets/ui/chefs.png";
import { CustomButton } from "@components/CustomButton";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Alerta from "../../components/Alerta";
import { useState } from "react";

export default function ConfirmEmail() {
    const { token } = useParams();

    const [mensaje, setMensaje] = useState({});

    useEffect(() => {
        const confirmEmail = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/confirmar/${token}`,
                );
                setMensaje({
                    response: response.data.msg,
                    exito: true,
                });
            } catch ({ response }) {
                setMensaje({
                    response: response.data.msg,
                    exito: false,
                });
            }
        };
        confirmEmail();
    }, []);

    return (
        <>
            <div className="flex w-full flex-col items-center justify-center px-20 py-4 sm:w-2/5">
                <img className="h-40" src={chefsImg} alt="Icono de Chefs" />
                <h1 className="mb-7 mt-2 text-center text-2xl font-semibold uppercase">
                    Confirmación de Correo Electrónico
                </h1>
                <h5 className="mb-5 text-center text-sm">
                    {mensaje.exito
                        ? "¡Genial! Ya puedes iniciar sesión regresa al inicio."
                        : "Ups! Algo salió mal, por favor verifica el enlace."}
                </h5>
                {mensaje.response && (
                    <Alerta exito={mensaje.exito}> {mensaje.response} </Alerta>
                )}
                <Link className="mt-5" to="/home">
                    <CustomButton
                        texto="Volver al Inicio"
                        color="black"
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
                    </CustomButton>
                </Link>
            </div>
        </>
    );
}
