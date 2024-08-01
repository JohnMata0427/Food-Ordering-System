// Importación de imágenes
import chefsImg from "@assets/ui/chefs.png";
import { CustomButton } from "@components/CustomButton";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ConfirmEmail() {
    useEffect(() => {
        document.title = "Asociación de la ESFOT - Email Confirmado";
    }, []);
    return (
        <>
            <div className="flex flex-col justify-center items-center sm:w-2/5 w-full py-4">
                <img className="h-40" src={chefsImg} alt="Icono de Chefs" />
                <h1 className="text-2xl font-semibold mb-2 text-center uppercase pt-2 pb-5">
                    CORREO ELECTRÓNICO CONFIRMADO
                </h1>
                <h5 className="text-base font-normal mb-2 text-center pt-2 pb-5">
                    ¡Genial! Ya puedes iniciar sesión regresa al inicio.
                </h5>
                <div className="flex flex-col items-center gap-y-2">
                    <Link to="/home">
                        <CustomButton
                            texto="Volver al Inicio"
                            color="black"
                            masEstilos="group w-full justify-center gap-x-2 rounded-xl mb-2 text-white"
                        >
                            <svg className="z-10" width="20" height="20" viewBox="0 0 40 40">
                                <path
                                    className="fill-white group-hover:fill-[#000]"
                                    id="Vector"
                                    d="M20.4344 7.9125C20.3181 7.80124 20.1633 7.73914 20.0023 7.73914C19.8414 7.73914 19.6866 7.80124 19.5703 7.9125L5.1875 21.6523C5.12642 21.7108 5.07782 21.781 5.04466 21.8587C5.01149 21.9365 4.99444 22.0202 4.99453 22.1047L4.99219 35C4.99219 35.663 5.25558 36.2989 5.72442 36.7678C6.19326 37.2366 6.82915 37.5 7.49219 37.5H15C15.3315 37.5 15.6495 37.3683 15.8839 37.1339C16.1183 36.8995 16.25 36.5815 16.25 36.25V25.625C16.25 25.4592 16.3158 25.3003 16.4331 25.1831C16.5503 25.0658 16.7092 25 16.875 25H23.125C23.2908 25 23.4497 25.0658 23.5669 25.1831C23.6842 25.3003 23.75 25.4592 23.75 25.625V36.25C23.75 36.5815 23.8817 36.8995 24.1161 37.1339C24.3505 37.3683 24.6685 37.5 25 37.5H32.5047C33.1677 37.5 33.8036 37.2366 34.2725 36.7678C34.7413 36.2989 35.0047 35.663 35.0047 35V22.1047C35.0048 22.0202 34.9877 21.9365 34.9546 21.8587C34.9214 21.781 34.8728 21.7108 34.8117 21.6523L20.4344 7.9125Z"
                                />
                                <path
                                    className="fill-white group-hover:fill-[#000]"
                                    id="Vector"
                                    d="M38.3524 19.0742L32.5086 13.4836V5C32.5086 4.66848 32.3769 4.35054 32.1425 4.11612C31.9081 3.8817 31.5901 3.75 31.2586 3.75H27.5086C27.1771 3.75 26.8592 3.8817 26.6247 4.11612C26.3903 4.35054 26.2586 4.66848 26.2586 5V7.5L21.7336 3.17344C21.3102 2.74531 20.6805 2.5 20 2.5C19.3219 2.5 18.6938 2.74531 18.2703 3.17422L1.65315 19.0727C1.16722 19.5414 1.10628 20.3125 1.54847 20.8203C1.65951 20.9485 1.79547 21.0527 1.94808 21.1267C2.10068 21.2007 2.26674 21.2428 2.43615 21.2506C2.60557 21.2583 2.77478 21.2315 2.9335 21.1718C3.09222 21.112 3.23713 21.0206 3.3594 20.9031L19.5703 5.4125C19.6867 5.30124 19.8414 5.23914 20.0024 5.23914C20.1633 5.23914 20.3181 5.30124 20.4344 5.4125L36.6469 20.9031C36.8857 21.1321 37.2056 21.2571 37.5364 21.2507C37.8673 21.2442 38.182 21.1069 38.4117 20.8687C38.8914 20.3719 38.8516 19.5516 38.3524 19.0742Z"
                                />
                            </svg>
                        </CustomButton>
                    </Link>
                </div>
            </div>
        </>
    );
}
