import fondoPerfil from "@assets/ui/fondo-perfil.png";
import { CustomButton } from "@components/CustomButton";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "@contexts/AuthProvider";

export default function PerfilChef() {
    const { auth } = useContext(AuthContext);

    return (
        <section className="m-8 flex flex-col justify-center gap-x-8 sm:flex-row">
            <div className="relative sm:h-[550px]">
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

            <div className="flex w-full flex-col items-center justify-center pl-6 sm:w-3/5">
                <h1 className="mb-7 mt-2 text-7xl font-semibold">
                    {auth.nombre + " " + auth.apellido}
                </h1>

                <div className="w-9/10 flex flex-col items-center gap-y-8">
                    <div className="flex w-full flex-col gap-y-4">
                        <p>{auth.trayectoria}</p>

                        <h3 className="my-2 font-aoboshi text-2xl font-semibold">
                            Especialidades
                        </h3>

                        <ul>🍴 {auth.especialidad}</ul>
                    </div>
                </div>
                <Link to="/actualizar-perfil">
                    <CustomButton
                        color="yellow"
                        texto="Actualizar Perfil"
                        masEstilos="mt-8 gap-x-2"
                    >
                        <svg
                            className="size-4"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                        >
                            <path
                                className="fill-black group-hover:fill-primary"
                                d="M5.28846 40H0V34.7115L29.8211 4.81635L35.1836 10.1798L5.28846 40ZM36.3192 9.03847L30.9615 3.68078L34.0058 0.7327C34.476 0.259624 35.1971 8.50305e-06 35.8654 8.50305e-06C36.1944 -0.000850969 36.5202 0.063453 36.8242 0.189209C37.1282 0.314965 37.4043 0.499682 37.6365 0.7327L39.2711 2.36732C39.5032 2.59927 39.687 2.87484 39.8121 3.17816C39.9372 3.48147 40.0011 3.80653 40 4.13462C40 4.8077 39.7394 5.52405 39.2673 5.99616L36.3192 9.03847Z"
                            />
                        </svg>
                    </CustomButton>
                </Link>
            </div>
        </section>
    );
}
