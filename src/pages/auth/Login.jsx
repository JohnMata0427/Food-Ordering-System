// Importación de imágenes
import chefsImg from "@assets/ui/chefs.png";
import correoIcon from "@icons/correo.svg";
import { CustomButton } from "@components/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Alerta from "@components/Alerta";
import axios from "axios";
import PasswordInput from "@components/PasswordInput";
import { PacmanLoader } from "react-spinners";

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [mensaje, setMensaje] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/login`, form)
            .then(({ data }) => {
                console.log(data.token);

                localStorage.setItem("token", data.token);
                navigate("/inicio");
            })
            .catch(({ response }) => {
                setMensaje({
                    respuesta: response.data.msg,
                    exito: false,
                });
                setLoading(false);

                setTimeout(() => {
                    setMensaje({});
                }, 5000);
            });
    };

    return (
        <>
            <div className="flex w-full flex-col items-center justify-center py-4 sm:w-2/5">
                <img className="h-40" src={chefsImg} alt="Icono de Chefs" />
                <h1 className="mb-7 mt-2 text-center text-2xl font-semibold uppercase">
                    Iniciar Sesión
                </h1>

                <form
                    className="flex w-3/4 flex-col items-center"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4 flex w-full flex-col gap-y-4">
                        <div className="relative">
                            <img
                                className="absolute left-4 top-3.5 my-auto size-4"
                                src={correoIcon}
                                alt="Icono de correo"
                            />
                            <input
                                id="email"
                                name="email"
                                value={form.email || ""}
                                onChange={handleChange}
                                type="email"
                                className="text-md peer w-full rounded-xl border border-black p-2.5 pl-11 placeholder-slate-700 shadow-md shadow-black/20 invalid:border-pink-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 focus:invalid:border-pink-700 focus:invalid:ring-pink-700 focus:invalid:ring-opacity-50"
                                placeholder="Ingrese su correo electrónico"
                            />
                            <p class="mt-2 hidden text-sm text-pink-700 peer-invalid:block">
                                Ingrese un correo válido (ej:
                                usuario@ejemplo.com)
                            </p>
                        </div>

                        <PasswordInput
                            value={form.password}
                            onChange={handleChange}
                        />
                    </div>

                    {mensaje.respuesta && (
                        <Alerta exito={mensaje.exito}>
                            {mensaje.respuesta}
                        </Alerta>
                    )}

                    <div className="mt-4 flex flex-col items-center gap-y-4">
                        <CustomButton
                            texto={loading ? "Cargando" : "Iniciar Sesión"}
                            color="yellow"
                            masEstilos="group justify-center w-full gap-x-2 rounded-xl mb-2"
                        >
                            {loading ? (
                                <PacmanLoader size={10} />
                            ) : (
                                <svg className="size-5" viewBox="0 0 33 31">
                                    <path
                                        className="fill-black group-hover:fill-primary"
                                        d="M31.5 13.3 2.3 0A1.5 1.5 0 0 0 .8.3C.5.5.3.7.2 1a2 2 0 0 0-.2.8v8.4c0 .4.1.8.4 1.2.2.3.6.5 1 .6l15.9 3.2h.1v.5h-.1L1.3 19c-.3 0-.7.3-1 .6-.2.3-.3.7-.3 1.1v8.4c0 .3 0 .6.2.8l.5.7a1.5 1.5 0 0 0 1.6.1l29.2-13c.4-.2.7-.5 1-1a2.5 2.5 0 0 0 0-2.5l-1-1Z"
                                    />
                                </svg>
                            )}
                        </CustomButton>
                    </div>
                    <span className="mt-2 text-center text-sm">
                        ¿No tienes cuenta?{" "}
                        <Link
                            className="font-bold text-secondary hover:underline"
                            to="/auth/registro"
                        >
                            Registrate
                        </Link>
                    </span>
                    <Link
                        className="mt-2 text-center text-sm font-bold text-secondary hover:underline"
                        to="/auth/recuperar-password"
                    >
                        ¿Olvidaste tu contraseña?
                    </Link>
                </form>
            </div>
        </>
    );
}
