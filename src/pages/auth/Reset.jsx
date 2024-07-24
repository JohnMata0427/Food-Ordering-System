// Importación de imágenes
import chefsImg from "@assets/ui/chefs.png";
import contraseñaIcon from "@assets/icons/contraseña.svg";
import { useNavigate } from 'react-router-dom';
import { CustomButton } from "@components/CustomButton";

import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Alerta from "@components/Alerta";
import axios from "axios";

export default function Reset() {

    const { token } = useParams();
    const [mensaje, setMensaje] = useState({})
    const [tokenback, setTokenBack] = useState(false)

    const navigate = useNavigate();

    const [form, setForm] = useState({
        password: "",
        confirmarpassword: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/chef/nuevopassword/${token}`
            const respuesta = await axios.post(url, form)
            setForm({})
            setMensaje({ respuesta: respuesta.data.msg, tipo: true })
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        } catch (error) {
            setMensaje({ respuesta: error.response.data.msg, tipo: false })
        }
    }

    const verifyToken = async () => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/chef/recuperarpassword/${token}`
            const respuesta = await axios.get(url)
            setTokenBack(true)
            setMensaje({ respuesta: respuesta.data.msg, tipo: true })
        } catch (error) {
            setMensaje({ respuesta: error.response.data.msg, tipo: false })
        }
    }
    useEffect(() => {
        verifyToken()
    }, [])

    return (
        <>
            <div className="w-1/2 min-h-screen bg-[url('/fondo-autenticacion.png')] bg-no-repeat bg-cover bg-center sm:block hidden"></div>

            <div className="flex flex-col justify-center items-center sm:w-1/2 w-full py-4">
                <img className="h-40" src={chefsImg} alt="Icono de Chefs" />
                <h1 className="text-2xl font-semibold mb-2 text-center uppercase pt-2 pb-5">
                    Restablecer Contraseña
                </h1>
                {tokenback &&
                    <form
                        className="flex flex-col gap-y-8 items-center sm:w-[65%] w-3/4"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col gap-y-4 w-full">
                            <div className="relative">
                                <img
                                    className="absolute top-[9px] left-3 size-4"
                                    src={contraseñaIcon}
                                    alt="Icono de contraseña"
                                />
                                <input
                                    id="password"
                                    name="password"
                                    value={form.password || ""}
                                    onChange={handleChange}
                                    type="password"
                                    className="border border-black placeholder-slate-700 text-md p-1 rounded-xl pl-9 w-full hover:border-slate-800 transition-all shadow-md shadow-black/20"
                                    placeholder="Ingrese una contraseña"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <img
                                    className="absolute top-[9px] left-3 size-4"
                                    src={contraseñaIcon}
                                    alt="Icono de contraseña"
                                />
                                <input
                                    id="confirmarpassword"
                                    name="confirmarpassword"
                                    value={form.confirmarpassword || ""}
                                    onChange={handleChange}
                                    type="password"
                                    className="border border-black placeholder-slate-700 text-md p-1 rounded-xl pl-9 w-full hover:border-slate-800 transition-all shadow-md shadow-black/20"
                                    placeholder="Repita su contraseña"
                                    required
                                />
                            </div>
                        </div>

                        {mensaje.mensaje && (
                            <Alerta exito={mensaje.exito}>{mensaje.mensaje}</Alerta>
                        )}

                        <div className="flex flex-col items-center gap-y-2">
                            <CustomButton
                                texto="Guardar cambios"
                                color="yellow"
                                masEstilos="group w-full justify-center gap-x-2 rounded-xl mb-2"
                            >
                                <svg className="z-10" width="20" viewBox="0 0 33 31">
                                    <path
                                        className="fill-black group-hover:fill-[#DCB50E]"
                                        id="Vector"
                                        d="M31.4856 13.2879L31.4747 13.2827L2.27979 0.135588C2.03422 0.0239993 1.76702 -0.0197646 1.50206 0.00821157C1.23711 0.0361877 0.982679 0.135031 0.761524 0.295901C0.527868 0.462128 0.33594 0.688816 0.20301 0.955569C0.0700801 1.22232 0.000317936 1.52077 3.7325e-07 1.82406V10.2323C0.00013021 10.6469 0.133478 11.0485 0.37706 11.3678C0.620643 11.6872 0.959199 11.9042 1.33438 11.9816L17.2573 15.1782C17.3199 15.1911 17.3764 15.2273 17.417 15.2806C17.4576 15.3338 17.4798 15.4008 17.4798 15.4699C17.4798 15.5391 17.4576 15.606 17.417 15.6593C17.3764 15.7125 17.3199 15.7487 17.2573 15.7616L1.33506 18.9582C0.959987 19.0354 0.62145 19.2522 0.377759 19.5712C0.134068 19.8903 0.00047853 20.2916 3.7325e-07 20.7061V29.1158C-0.000181173 29.4054 0.0658672 29.6905 0.192218 29.9456C0.31857 30.2006 0.501271 30.4177 0.723926 30.5771C0.991757 30.7704 1.30608 30.8736 1.62764 30.874C1.85119 30.8738 2.07244 30.8251 2.27842 30.7308L31.4727 17.6586L31.4856 17.652C31.8786 17.4686 32.2135 17.1642 32.4487 16.7763C32.684 16.3885 32.8094 15.9343 32.8094 15.4699C32.8094 15.0055 32.684 14.5513 32.4487 14.1635C32.2135 13.7757 31.8786 13.4713 31.4856 13.2879Z"
                                    />
                                </svg>
                            </CustomButton>
                            <CustomButton
                                texto="Cancelar"
                                color="yellow"
                                masEstilos="group w-full justify-center gap-x-2 rounded-xl mb-2"
                            >
                                <svg className="z-10" width="20" viewBox="0 0 33 31">
                                    <path
                                        className="fill-black group-hover:fill-[#DCB50E]"
                                        id="Vector"
                                        d="M31.4856 13.2879L31.4747 13.2827L2.27979 0.135588C2.03422 0.0239993 1.76702 -0.0197646 1.50206 0.00821157C1.23711 0.0361877 0.982679 0.135031 0.761524 0.295901C0.527868 0.462128 0.33594 0.688816 0.20301 0.955569C0.0700801 1.22232 0.000317936 1.52077 3.7325e-07 1.82406V10.2323C0.00013021 10.6469 0.133478 11.0485 0.37706 11.3678C0.620643 11.6872 0.959199 11.9042 1.33438 11.9816L17.2573 15.1782C17.3199 15.1911 17.3764 15.2273 17.417 15.2806C17.4576 15.3338 17.4798 15.4008 17.4798 15.4699C17.4798 15.5391 17.4576 15.606 17.417 15.6593C17.3764 15.7125 17.3199 15.7487 17.2573 15.7616L1.33506 18.9582C0.959987 19.0354 0.62145 19.2522 0.377759 19.5712C0.134068 19.8903 0.00047853 20.2916 3.7325e-07 20.7061V29.1158C-0.000181173 29.4054 0.0658672 29.6905 0.192218 29.9456C0.31857 30.2006 0.501271 30.4177 0.723926 30.5771C0.991757 30.7704 1.30608 30.8736 1.62764 30.874C1.85119 30.8738 2.07244 30.8251 2.27842 30.7308L31.4727 17.6586L31.4856 17.652C31.8786 17.4686 32.2135 17.1642 32.4487 16.7763C32.684 16.3885 32.8094 15.9343 32.8094 15.4699C32.8094 15.0055 32.684 14.5513 32.4487 14.1635C32.2135 13.7757 31.8786 13.4713 31.4856 13.2879Z"
                                    />
                                </svg>
                            </CustomButton>

                        </div>
                    </form>
                }
            </div>
        </>
    )

}
