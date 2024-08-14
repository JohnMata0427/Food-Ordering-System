import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    const urlActual = useLocation().pathname;
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);

    return (
        <header className="relative flex w-full items-center justify-between border-b-4 border-b-red-700 bg-black px-4 py-2">
            <nav className="flex items-center gap-x-16">
                <img
                    className="h-12 w-auto"
                    src="/logo-con-texto.png"
                    alt="Logo"
                />
                <ul className="flex gap-x-8">
                    <li>
                        <Link
                            className={`${
                                urlActual === "/inicio"
                                    ? "text-primary"
                                    : "text-white hover:text-primary"
                            } text-sm`}
                            to="/inicio"
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${
                                urlActual === "/categorias"
                                    ? "text-primary"
                                    : "text-white hover:text-primary"
                            } text-sm`}
                            to="/categorias"
                        >
                            Categorias
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${
                                urlActual === "/ordenar"
                                    ? "text-primary"
                                    : "text-white hover:text-primary"
                            } text-sm`}
                            to="/ordenar"
                        >
                            Ordenar
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${
                                urlActual === "/contacto"
                                    ? "text-primary"
                                    : "text-white hover:text-primary"
                            } text-sm`}
                            to="/contacto"
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center justify-end gap-x-4">
                <div className="relative">
                    <input
                        className="w-96 rounded-2xl px-4 py-1.5 text-sm"
                        type="search"
                        placeholder="Buscar..."
                    />
                    <svg
                        className="absolute inset-y-0 right-4 my-auto size-4"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill="#000"
                            d="M19.694 17.992 15.16 13.46a8.376 8.376 0 0 0 1.678-5.04C16.838 3.777 13.061 0 8.42 0S0 3.777 0 8.42c0 4.642 3.777 8.418 8.42 8.418a8.376 8.376 0 0 0 5.039-1.678l4.534 4.534a1.205 1.205 0 0 0 1.7-1.701ZM2.404 8.42a6.014 6.014 0 1 1 6.014 6.014 6.02 6.02 0 0 1-6.014-6.014Z"
                        />
                    </svg>
                </div>
                <button
                    className={`${
                        urlActual === "/perfil" || menu
                            ? "text-primary *:fill-primary"
                            : "text-white hover:text-primary *:fill-white"
                    } group flex items-center gap-x-2 p-2`}
                    onClick={() => setMenu(true)}
                >
                    <svg width="27" viewBox="0 0 50 50">
                        <path
                            className="group-hover:fill-primary"
                            d="M24.97 4.69A20.03 20.03 0 0 0 4.69 24.97 20.06 20.06 0 0 0 24.4 44.69 20.02 20.02 0 0 0 44.68 24.4 20.05 20.05 0 0 0 24.97 4.69Zm12.15 31.46a.38.38 0 0 1-.59-.03 11.95 11.95 0 0 0-3.11-2.84 16.33 16.33 0 0 0-8.73-2.44c-3.19 0-6.29.87-8.74 2.44-1.2.75-2.25 1.72-3.1 2.84a.38.38 0 0 1-.6.03 16.86 16.86 0 0 1-4.49-11.17A17.03 17.03 0 0 1 24.65 7.76a16.93 16.93 0 0 1 12.47 28.4Z"
                        />
                        <path
                            className="group-hover:fill-primary"
                            d="M25 14.06c-1.93 0-3.67.72-4.9 2.04a6.62 6.62 0 0 0-1.72 5.07c.28 3.83 3.25 6.95 6.62 6.95s6.33-3.12 6.62-6.95a6.56 6.56 0 0 0-1.73-5.06A6.63 6.63 0 0 0 25 14.06Z"
                        />
                    </svg>
                    <span className="text-sm group-hover:text-primary">
                        Perfil
                    </span>
                </button>

                {menu && (
                    <>
                        <div
                            className="fixed inset-0 z-10"
                            onClick={() => setMenu(false)}
                        ></div>
                        <div className="absolute right-8 top-14 z-20 rounded-lg bg-neutral-200 shadow-lg shadow-black/30">
                            <ul className="flex flex-col gap-y-3 px-5 py-3">
                                <li>
                                    <Link
                                        className="group flex items-center gap-x-2 text-sm text-black hover:scale-105 hover:text-neutral-700"
                                        to="/perfil"
                                        onClick={() => setMenu(false)}
                                    >
                                        <svg width="15" viewBox="0 0 417 417">
                                            <path
                                                className="fill-black group-hover:fill-neutral-700"
                                                d="M209 0a208 208 0 1 0 0 417 208 208 0 0 0 0-417Zm-51 117c13-13 31-21 51-21 19 0 37 8 50 21 13 14 19 32 18 52-3 39-34 71-68 71-35 0-65-32-68-71-2-20 5-38 17-52Zm51 267a175 175 0 0 1-126-53c9-13 21-25 35-33 25-17 58-26 91-26s65 9 91 26c13 8 25 20 35 33a175 175 0 0 1-126 53Z"
                                            />
                                        </svg>
                                        Ver perfil
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="group flex items-center gap-x-2 text-sm text-black hover:scale-105 hover:text-neutral-700"
                                        to="/historial"
                                        onClick={() => setMenu(false)}
                                    >
                                        <svg width="15" viewBox="0 0 449 449">
                                            <path
                                                className="fill-black group-hover:fill-neutral-700"
                                                d="M449 168V45a45 45 0 0 0-45-45H281c-8 0-16 4-21 9L14 255a45 45 0 0 0 0 63l117 117a45 45 0 0 0 63 0l246-245c6-6 9-14 9-22Zm-96-40a32 32 0 1 1 0-64 32 32 0 0 1 0 64Z"
                                            />
                                        </svg>
                                        Pedidos
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            localStorage.removeItem("token");
                                            navigate("/auth/iniciar-sesion");
                                        }}
                                        className="group flex items-center gap-x-2 text-sm text-red-700 hover:scale-105 hover:text-red-400"
                                    >
                                        <svg width="15" viewBox="0 0 416 352">
                                            <path
                                                className="fill-red-700 group-hover:fill-red-400"
                                                d="M112 160h160V16a16 16 0 0 0-16-16H16A16 16 0 0 0 0 16v320a16 16 0 0 0 16 16h240a16 16 0 0 0 16-16V192H112v-32Zm299 5-91-92-23 23 64 64h-89v32h89l-64 64 23 23 91-92a16 16 0 0 0 0-22Z"
                                            />
                                        </svg>
                                        Cerrar sesión
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
}
