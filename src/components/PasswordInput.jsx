import contraseñaIcon from "@assets/icons/contraseña.svg";
import { useState } from "react";

export default function PasswordInput({
    name,
    value,
    onChange,
    masEstilos,
    placeholder,
}) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="relative">
            <img
                className="absolute inset-y-0 left-4 my-auto size-4"
                src={contraseñaIcon}
                alt="Icono de contraseña"
            />
            <input
                id={name || "password"}
                name={name || "password"}
                value={value || ""}
                onChange={onChange}
                type={visible ? "text" : "password"}
                className={`text-md w-full rounded-xl border border-black p-2.5 pl-11 placeholder-slate-700 shadow-md shadow-black/20 hover:border-slate-800 ${masEstilos}`}
                placeholder={placeholder || "Ingrese una contraseña"}
                required
            />
            <svg
                onClick={() => setVisible(!visible)}
                className="absolute inset-y-0 right-4 my-auto size-5 cursor-pointer *:fill-black"
                viewBox="0 0 513 513"
            >
                {visible ? (
                    <>
                        <path d="M257 320a64 64 0 1 0 0-128 64 64 0 0 0 0 128Z" />
                        <path d="M492 239c-27-41-61-76-100-101-42-27-89-42-136-42-42 0-84 13-124 37-41 24-77 60-109 106a32 32 0 0 0-1 35c26 41 60 76 98 101 43 27 89 41 136 41s94-14 137-41c38-25 72-60 99-101a32 32 0 0 0 0-35ZM257 352a96 96 0 1 1 0-192 96 96 0 0 1 0 192Z" />
                    </>
                ) : (
                    <>
                        <path d="M432 448a16 16 0 0 1-11-5L69 91a16 16 0 0 1 22-22l352 352a16 16 0 0 1-11 27ZM248 316l-52-52a2 2 0 0 0-3 1v1a64 64 0 0 0 53 53 2 2 0 0 0 2-3Zm16-120 52 52a2 2 0 0 0 3-2 64 64 0 0 0-53-53 2 2 0 0 0-2 3Z" />
                        <path d="M491 273a32 32 0 0 0 0-34c-27-41-61-76-99-101-43-27-90-42-136-42a227 227 0 0 0-74 13 4 4 0 0 0 0 5l48 48a4 4 0 0 0 3 1 96 96 0 0 1 116 116 4 4 0 0 0 1 4l68 68a4 4 0 0 0 6 0c26-23 49-49 67-78Zm-235 79a96 96 0 0 1-93-119 4 4 0 0 0-1-3l-67-67a4 4 0 0 0-6-1c-24 21-47 47-67 76a32 32 0 0 0-1 36c26 41 60 76 98 100a248 248 0 0 0 209 30 4 4 0 0 0 2-6l-48-48a4 4 0 0 0-3-1c-8 2-15 3-23 3Z" />
                    </>
                )}
            </svg>
        </div>
    );
}
