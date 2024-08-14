// Importación de imágenes
import chefsImg from "@assets/ui/chefs.png";
import { CustomButton } from "@components/CustomButton";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Alerta from "@components/Alerta";
import axios from "axios";

export default function ConfirmEmail() {
    const { token } = useParams();
    const navigate = useNavigate();
    const [mensaje, setMensaje] = useState({});
    const verifyToken = async () => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/confirmar/${token}`;
            const respuesta = await axios.get(url);
            console.log(respuesta);
            navigate("/auth/email-confirmado");
        } catch (error) {
            setMensaje({ respuesta: error.response.data.msg, exito: false });
        }
    };
    return (
        <>
            <div className="flex w-full flex-col items-center justify-center py-4 sm:w-2/5">
                <img className="h-40" src={chefsImg} alt="Icono de Chefs" />
                <h1 className="mb-2 pb-5 pt-2 text-center text-2xl font-semibold uppercase">
                    CONFIRMAR DIRECCIÓN DE CORREO ELECTRÓNICO
                </h1>
                <div className="mb-6 flex flex-col items-center gap-y-4">
                    <h2 className="relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md border-2 border-solid border-primary bg-primary px-6 py-0 text-base outline-0 ease-in-out">
                        alan.rios.hd@gmail.com
                    </h2>
                </div>
                <h5 className="mb-6 pb-5 pt-2 text-center text-base font-normal">
                    Para confirmar tu dirección de correo electrónico haz click
                    en el siguiente enlace:
                </h5>
                <div className="flex flex-col items-center gap-y-2">
                    <CustomButton
                        texto="Verifica tu email"
                        color="yellow"
                        masEstilos="group w-full justify-center gap-x-2 rounded-xl mb-2"
                        onClick={verifyToken}
                    >
                        <svg width="20" viewBox="0 0 33 31">
                            <path
                                className="fill-black group-hover:fill-primary"
                                id="Vector"
                                d="M31.4856 13.2879L31.4747 13.2827L2.27979 0.135588C2.03422 0.0239993 1.76702 -0.0197646 1.50206 0.00821157C1.23711 0.0361877 0.982679 0.135031 0.761524 0.295901C0.527868 0.462128 0.33594 0.688816 0.20301 0.955569C0.0700801 1.22232 0.000317936 1.52077 3.7325e-07 1.82406V10.2323C0.00013021 10.6469 0.133478 11.0485 0.37706 11.3678C0.620643 11.6872 0.959199 11.9042 1.33438 11.9816L17.2573 15.1782C17.3199 15.1911 17.3764 15.2273 17.417 15.2806C17.4576 15.3338 17.4798 15.4008 17.4798 15.4699C17.4798 15.5391 17.4576 15.606 17.417 15.6593C17.3764 15.7125 17.3199 15.7487 17.2573 15.7616L1.33506 18.9582C0.959987 19.0354 0.62145 19.2522 0.377759 19.5712C0.134068 19.8903 0.00047853 20.2916 3.7325e-07 20.7061V29.1158C-0.000181173 29.4054 0.0658672 29.6905 0.192218 29.9456C0.31857 30.2006 0.501271 30.4177 0.723926 30.5771C0.991757 30.7704 1.30608 30.8736 1.62764 30.874C1.85119 30.8738 2.07244 30.8251 2.27842 30.7308L31.4727 17.6586L31.4856 17.652C31.8786 17.4686 32.2135 17.1642 32.4487 16.7763C32.684 16.3885 32.8094 15.9343 32.8094 15.4699C32.8094 15.0055 32.684 14.5513 32.4487 14.1635C32.2135 13.7757 31.8786 13.4713 31.4856 13.2879Z"
                            />
                        </svg>
                    </CustomButton>
                </div>
                {mensaje.respuesta && (
                    <Alerta exito={mensaje.exito}>{mensaje.respuesta}</Alerta>
                )}
            </div>
        </>
    );
}
