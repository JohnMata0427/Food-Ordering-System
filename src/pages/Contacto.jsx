import usuarioIcon from "@assets/icons/usuario.svg";
import correoIcon from "@assets/icons/correo.svg";
import mensajeIcon from "@assets/icons/mensaje.svg";
import asuntoIcon from "@assets/icons/asunto.svg";
import { useState } from "react";
import { CustomButton } from "@components/CustomButton";
import Alerta from "@components/Alerta";

export default function Contacto() {
    const [form, setForm] = useState({
        nombre: "",
        asunto: "",
        mensaje: "",
        email: "",
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
        console.log(form);
    };

    return (
        <>
            <img
                className="w-full"
                src="https://www.epn.edu.ec/wp-content/uploads/2016/03/ESFOT-EPN.jpg"
                alt="Fondo de Inicio"
            />

            <section className="mt-20 flex items-center justify-center gap-x-10">
                <form
                    className="flex w-1/2 flex-col items-center gap-y-8 rounded-xl bg-neutral-200 p-4 shadow-md shadow-black/30"
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-2xl font-bold uppercase">Contacto</h1>
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
                                className="text-md w-full rounded-xl border border-black p-2.5 pl-11 placeholder-slate-700 hover:border-slate-800"
                                placeholder="Ingrese su nombre"
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
                                className="text-md w-full rounded-xl border border-black p-2.5 pl-11 placeholder-slate-700 hover:border-slate-800"
                                placeholder="Ingrese su correo electrónico"
                            />
                        </div>

                        <div className="relative">
                            <img
                                className="absolute inset-y-0 left-4 my-auto size-4"
                                src={asuntoIcon}
                                alt="Icono de asunto"
                            />
                            <input
                                id="asunto"
                                name="asunto"
                                value={form.asunto || ""}
                                onChange={handleChange}
                                type="text"
                                className="text-md w-full rounded-xl border border-black p-2.5 pl-11 placeholder-slate-700 hover:border-slate-800"
                                placeholder="Asunto"
                            />
                        </div>

                        <div className="relative">
                            <img
                                className="absolute left-4 top-4 size-4"
                                src={mensajeIcon}
                                alt="Icono de mensaje"
                            />
                            <textarea
                                id="mensaje"
                                name="mensaje"
                                value={form.mensaje || ""}
                                onChange={handleChange}
                                type="text"
                                className="text-md w-full rounded-xl border border-black p-2.5 pl-11 placeholder-slate-700 hover:border-slate-800"
                                placeholder="Mensaje"
                            />
                        </div>
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
                            <svg width="20" viewBox="0 0 33 31">
                                <path
                                    className="fill-black group-hover:fill-primary"
                                    id="Vector"
                                    d="M31.4856 13.2879L31.4747 13.2827L2.27979 0.135588C2.03422 0.0239993 1.76702 -0.0197646 1.50206 0.00821157C1.23711 0.0361877 0.982679 0.135031 0.761524 0.295901C0.527868 0.462128 0.33594 0.688816 0.20301 0.955569C0.0700801 1.22232 0.000317936 1.52077 3.7325e-07 1.82406V10.2323C0.00013021 10.6469 0.133478 11.0485 0.37706 11.3678C0.620643 11.6872 0.959199 11.9042 1.33438 11.9816L17.2573 15.1782C17.3199 15.1911 17.3764 15.2273 17.417 15.2806C17.4576 15.3338 17.4798 15.4008 17.4798 15.4699C17.4798 15.5391 17.4576 15.606 17.417 15.6593C17.3764 15.7125 17.3199 15.7487 17.2573 15.7616L1.33506 18.9582C0.959987 19.0354 0.62145 19.2522 0.377759 19.5712C0.134068 19.8903 0.00047853 20.2916 3.7325e-07 20.7061V29.1158C-0.000181173 29.4054 0.0658672 29.6905 0.192218 29.9456C0.31857 30.2006 0.501271 30.4177 0.723926 30.5771C0.991757 30.7704 1.30608 30.8736 1.62764 30.874C1.85119 30.8738 2.07244 30.8251 2.27842 30.7308L31.4727 17.6586L31.4856 17.652C31.8786 17.4686 32.2135 17.1642 32.4487 16.7763C32.684 16.3885 32.8094 15.9343 32.8094 15.4699C32.8094 15.0055 32.684 14.5513 32.4487 14.1635C32.2135 13.7757 31.8786 13.4713 31.4856 13.2879Z"
                                    fill="black"
                                />
                            </svg>
                        </CustomButton>
                    </div>
                </form>
                <div className="w-1/4 rounded-xl bg-neutral-200 p-4 shadow-md shadow-black/30">
                    <h2 className="font-bold">Dirección</h2>
                    <span>
                        Asociación de la Facultad de la Escuela de Formación de
                        Tecnólogos
                    </span>
                    <h2 className="font-bold">Teléfono</h2>
                    <a href="tel:+593992664340">+593 992664340</a>
                </div>
            </section>
        </>
    );
}
