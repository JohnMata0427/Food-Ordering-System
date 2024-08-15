// Importación de imágenes
import chefsImg from "@assets/ui/chefs.png";
import usuarioIcon from "@assets/icons/usuario.svg";
import telefonoIcon from "@assets/icons/telefono.svg";
import correoIcon from "@assets/icons/correo.svg";
import { CustomButton } from "@components/CustomButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import Alerta from "@components/Alerta";
import axios from "axios";
import PasswordInput from "../../components/PasswordInput";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [enviar, setEnviar] = useState(false);

    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [mensaje, setMensaje] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            setMensaje({
                respuesta: "Las contraseñas no coinciden",
                exito: false,
            });
            return;
        }

        axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/registro`, form)
            .then(() => {
                setEnviar(true);
                setMensaje({
                    respuesta:
                        "Registro exitoso, verifica tu correo electrónico",
                    exito: true,
                });
            })
            .catch((error) => {
                setMensaje({
                    respuesta: error.response.data.msg,
                    exito: false,
                });
            });
    };

    return (
        <>
            {!enviar ? (
                <div className="flex w-full flex-col items-center justify-center py-4 md:w-2/5">
                    <img className="h-40" src={chefsImg} alt="Icono de Chefs" />
                    <h1 className="mb-2 pb-5 pt-2 text-center text-2xl font-semibold uppercase">
                        Registro Chef
                    </h1>

                    <form
                        className="flex w-3/4 flex-col items-center gap-y-8"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex w-full flex-col gap-y-4">
                            <div className="relative">
                                <img
                                    className="absolute inset-y-0 left-4 my-auto size-4"
                                    src={usuarioIcon}
                                    alt="Icono de usuario"
                                />
                                <input
                                    id="nombre"
                                    type="text"
                                    name="nombre"
                                    value={form.nombre || ""}
                                    onChange={handleChange}
                                    className="text-md w-full rounded-xl border border-black p-2.5 pl-11 placeholder-slate-700 shadow-md shadow-black/20 hover:border-slate-800"
                                    placeholder="Ingrese su nombre"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <img
                                    className="absolute inset-y-0 left-4 my-auto size-4"
                                    src={usuarioIcon}
                                    alt="Icono de usuario"
                                />
                                <input
                                    id="apellido"
                                    type="text"
                                    name="apellido"
                                    value={form.apellido || ""}
                                    onChange={handleChange}
                                    className="text-md w-full rounded-xl border border-black p-2.5 pl-11 placeholder-slate-700 shadow-md shadow-black/20 hover:border-slate-800"
                                    placeholder="Ingrese su apellido"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <img
                                    className="absolute inset-y-0 left-4 my-auto size-4"
                                    src={telefonoIcon}
                                    alt="Icono de telefono"
                                />
                                <input
                                    id="telefono"
                                    type="tel"
                                    name="telefono"
                                    value={form.telefono || ""}
                                    onChange={handleChange}
                                    className="text-md w-full rounded-xl border border-black p-2.5 pl-11 placeholder-slate-700 shadow-md shadow-black/20 hover:border-slate-800"
                                    placeholder="Ingrese su número de teléfono"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <img
                                    className="absolute inset-y-0 left-4 my-auto size-4"
                                    src={correoIcon}
                                    alt="Icono de correo"
                                />
                                <input
                                    id="email"
                                    name="email"
                                    value={form.email || ""}
                                    onChange={handleChange}
                                    type="email"
                                    className="text-md w-full rounded-xl border border-black p-2.5 pl-11 placeholder-slate-700 shadow-md shadow-black/20 hover:border-slate-800"
                                    placeholder="Ingrese su correo electrónico"
                                    required
                                />
                            </div>

                            <PasswordInput
                                value={form.password}
                                onChange={handleChange}
                            />
                            <PasswordInput
                                value={form.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirme su contraseña"
                                name="confirmPassword"
                            />
                        </div>

                        {mensaje.respuesta && (
                            <Alerta exito={mensaje.exito}>
                                {mensaje.respuesta}
                            </Alerta>
                        )}

                        <div className="flex flex-col items-center gap-y-2">
                            <CustomButton
                                texto="Registrar"
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
                            <span className="text-sm">
                                ¿Tienes una cuenta?{" "}
                                <Link
                                    className="font-bold text-secondary hover:underline"
                                    to="/auth/iniciar-sesion"
                                >
                                    Inicia sesión
                                </Link>
                            </span>

                            <Link
                                className="text-sm font-bold text-secondary hover:underline"
                                to="/auth/recuperar-contraseña"
                            >
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="flex w-full flex-col items-center justify-center md:w-2/5">
                    <img className="h-40" src={chefsImg} alt="Icono de Chefs" />
                    <h1 className="mb-7 mt-2 text-center text-2xl font-semibold uppercase">
                        Confirmar dirección de correo electrónico
                    </h1>
                    <strong className="rounded-lg bg-primary px-6 py-2 font-semibold">
                        {form.email}
                    </strong>
                    <span className="text-center text-sm my-4">
                        Revisa tu correo electrónico y haz clic en el enlace para confirmar tu dirección de correo electrónico
                    </span>

                    {mensaje.respuesta && (
                        <Alerta exito={mensaje.exito}>
                            {mensaje.respuesta}
                        </Alerta>
                    )}
                </div>
            )}
        </>
    );
}
