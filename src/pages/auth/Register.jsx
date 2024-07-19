// Importación de imágenes
import chefsImg from "@assets/ui/chefs.png";
import usuarioIcon from "@assets/icons/usuario.svg";
import correoIcon from "@assets/icons/correo.svg";
import contraseñaIcon from "@assets/icons/contraseña.svg";
import enviarIcon from "@assets/icons/enviar.svg";

import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Register() {

    useEffect(() => {
        document.title = "Asociación de la ESFOT - Registro del Chef";
    }, []);

    return (
        <>
            <div className="w-1/2 min-h-screen bg-[url('/public/fondo-autenticacion.png')] bg-no-repeat bg-cover bg-center sm:block hidden"></div>

            <div className="flex flex-col justify-center items-center sm:w-1/2 w-full">
                <img className="h-40" src={chefsImg} alt="Icono de Chefs" />
                <h1 className="text-2xl font-semibold mb-2 text-center uppercase pt-2 pb-5">
                    Registro Chef
                </h1>

                <form
                    className="flex flex-col gap-y-8 items-center sm:w-[65%] w-3/4"
                >
                    <div className="flex flex-col gap-y-4 w-full">
                        <div className="relative">
                            <img
                                className="absolute top-[9px] left-3 size-4"
                                src={usuarioIcon}
                                alt=""
                            />
                            <input
                                className="border border-black placeholder-slate-700 text-md p-1 rounded-xl pl-9 w-full hover:border-slate-800 transition-all shadow-md shadow-black/20"
                                type="text"
                                placeholder="Ingrese su nombre"
                                required
                            />
                        </div>

                        <div className="relative">
                            <img
                                className="absolute top-[9px] left-3 size-4"
                                src={correoIcon}
                                alt=""
                            />
                            <input
                                className="border border-black placeholder-slate-700 text-md p-1 rounded-xl pl-9 w-full hover:border-slate-800 transition-all shadow-md shadow-black/20"
                                type="email"
                                placeholder="Ingrese su correo electrónico"
                                required
                            />
                        </div>

                        <div className="relative">
                            <img
                                className="absolute top-[9px] left-3 size-4"
                                src={contraseñaIcon}
                                alt=""
                            />
                            <input
                                className="border border-black placeholder-slate-700 text-md p-1 rounded-xl pl-9 w-full hover:border-slate-800 transition-all shadow-md shadow-black/20"
                                type="password"
                                placeholder="Ingrese una contraseña"
                                required
                            />
                        </div>

                        <div className="relative">
                            <img
                                className="absolute top-[9px] left-3 size-4"
                                src={contraseñaIcon}
                                alt=""
                            />
                            <input
                                className="border border-black placeholder-slate-700 text-md p-1 rounded-xl pl-9 w-full hover:border-slate-800 transition-all shadow-md shadow-black/20"
                                type="password"
                                placeholder="Repita su contraseña"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-y-2">
                        <button className="bg-gradient-to-r from-primary to-primary-dark py-1 px-16 flex items-center text-lg gap-x-2 rounded-xl hover:scale-105 transition-all shadow-md shadow-black/30">
                            Registrar
                            <img
                                className="h-4"
                                src={enviarIcon}
                                alt="Icono de Enviar"
                            />
                        </button>
                        <span className="text-sm ">
                            ¿Tienes una cuenta? <Link className="font-bold text-secondary hover:text-secondary/80 transition-all" to="/login"> Inicia sesión</Link>
                        </span>
                        <span className="text-sm ">
                            ¿Olvidaste tu contraseña? <Link className="font-bold text-secondary hover:text-secondary/80 transition-all" to="/login"> Recuperala</Link>
                        </span>
                    </div>
                </form>
            </div>
        </>
    );
}
