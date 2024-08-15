import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/ui/logo.png";

export default function ChefLayout() {
    return (
        <>
            <header className="flex h-[10vh] bg-black text-white">
                <div className="h-[10vh] w-[20vw] bg-black"></div>
                <div className="flex h-[10vh] w-[80vw] items-center justify-end gap-x-4 bg-black p-4">
                    <button className="group">
                        <svg
                            className="size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 35 40"
                        >
                            <path
                                className="fill-white group-hover:fill-primary"
                                d="m33.6 27.6-.4-.5c-2-2.4-3.2-3.8-3.2-10.5 0-3.5-.8-6.4-2.5-8.5a11.6 11.6 0 0 0-5-3.8c-.8-2.6-3-4.3-5.3-4.3a5.6 5.6 0 0 0-5.3 4.3h-.1c-5 2.2-7.5 6.1-7.5 12.2 0 6.8-1.2 8.2-3.1 10.6l-.5.5A3.1 3.1 0 0 0 .3 31a3.3 3.3 0 0 0 3 1.9H31c1.3 0 2.5-.8 3-2a3.1 3.1 0 0 0-.4-3.3ZM17.2 40a7.1 7.1 0 0 0 6.2-3.8.4.4 0 0 0-.3-.5h-12a.4.4 0 0 0-.2.5 7.1 7.1 0 0 0 6.3 3.8Z"
                            />
                        </svg>
                    </button>
                    <button className="group flex items-center gap-x-2 hover:text-primary">
                        <svg
                            className="size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 38 40"
                        >
                            <path
                                className="fill-white group-hover:fill-primary"
                                d="M25.4 3a9.2 9.2 0 0 0-6.8-3c-2.7 0-5.2 1-6.9 2.9A9.5 9.5 0 0 0 9.3 10c.4 5.5 4.6 9.9 9.3 9.9 4.7 0 8.8-4.4 9.2-9.9.2-2.7-.6-5.3-2.4-7.2Zm8.9 37H2.9a2.8 2.8 0 0 1-2.2-1 3 3 0 0 1-.6-2.6c.7-4.2 3-7.7 6.8-10.2C10 24.1 14.3 23 18.6 23c4.2 0 8.4 1.2 11.7 3.3 3.7 2.5 6 6 6.8 10.2.2 1 0 2-.7 2.6a2.8 2.8 0 0 1-2.1 1Z"
                            />
                        </svg>
                        <span>Perfil</span>
                    </button>
                </div>
            </header>
            <main className="flex min-h-[90vh]">
                <nav className="flex w-[20vw] flex-col items-center border-r-8 border-secondary bg-black p-4 text-white">
                    <img className="w-1/2" src={Logo} alt="Logo" />
                    <h1 className="text-center text-xl uppercase">Dashboard</h1>
                    <ul className="flex h-full flex-col gap-y-2 mt-8">
                        <li>
                            <Link
                                className="group flex gap-x-2 hover:text-primary"
                                to="/chef/listar-productos"
                            >
                                <svg
                                    className="size-5 *:fill-white *:group-hover:fill-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 41 41"
                                >
                                    <path d="M29.5 10Zm9.3-2.7h-7.6l.8-3 3.1-1c.7-.3 1.1-1 1-1.7a1.3 1.3 0 0 0-1.8-.9L30.4 2a1.3 1.3 0 0 0-.9 1l-1 4.3h-11c-.7 0-1.3.6-1.3 1.3a1.3 1.3 0 0 0 1.3 1.4h.2l.1.7a.7.7 0 0 0 .7.6c3.3 0 6.1 1 8.3 2.6a10.2 10.2 0 0 1 3.8 6c0 .2.1.3.3.4a6 6 0 0 1 2.2 7.2v.5a8 8 0 0 1-1.4 7.6 6 6 0 0 1-2.4 1.8c-.1.1-.3.2-.3.4a9 9 0 0 1-1.5 2.6.2.2 0 0 0 0 .2h4.2a4 4 0 0 0 4-3.6l3-27h.1a1.3 1.3 0 0 0 1.4-1.4c0-.7-.7-1.3-1.4-1.3Z" />
                                    <path d="M7.9 26a2 2 0 0 1 1.4.6l1.3 1.2a.3.3 0 0 0 .5 0l1.3-1.2a2 2 0 0 1 1.4-.6h16.4a.7.7 0 0 0 .6-.7 3.3 3.3 0 0 0-2.6-3.3 7.8 7.8 0 0 0-3-6c-1.7-1.3-4-2-6.7-2h-6c-5.7 0-9.5 3.2-9.7 8a3.3 3.3 0 0 0-2.6 3.3.7.7 0 0 0 .6.7h7Zm6.4 2.6a.7.7 0 0 0-.4.2L12 30.7a1.7 1.7 0 0 1-2.3 0l-1.9-1.9a.7.7 0 0 0-.5-.2H1.6a1.3 1.3 0 0 0-1.4 1.1v1c0 2.5 1.7 4.6 4 4.6a5.7 5.7 0 0 0 5.9 5.3H21c1.8 0 3.4-.7 4.5-2a7 7 0 0 0 1.4-3.3c2.2 0 4-2.1 4-4.7l-.1-.9a1.3 1.3 0 0 0-1.4-1h-15Z" />
                                </svg>
                                <span>Listar Productos</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="group flex gap-x-2 hover:text-primary"
                                to="/chef/añadir-producto"
                            >
                                <svg
                                    className="size-5 *:fill-white *:group-hover:fill-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 40 40"
                                >
                                    <path d="M20 0a20 20 0 1 0 0 40 20 20 0 0 0 0-40Zm7.7 21.5h-6.2v6.2a1.5 1.5 0 0 1-3 0v-6.2h-6.2a1.5 1.5 0 0 1 0-3h6.2v-6.2a1.5 1.5 0 0 1 3 0v6.2h6.2a1.5 1.5 0 0 1 0 3Z" />
                                </svg>
                                <span>Añadir Productos</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="group flex gap-x-2 hover:text-primary"
                                to="/chef/editar-producto"
                            >
                                <svg
                                    className="size-5 *:fill-white *:group-hover:fill-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 40 40"
                                >
                                    <path d="M5.3 40H0v-5.3L29.8 4.8l5.4 5.4L5.2 40Zm31-31L31 3.7l3-3a2.7 2.7 0 0 1 2.8-.5l.8.5 1.7 1.7A2.5 2.5 0 0 1 40 4c0 .7-.3 1.4-.7 1.9l-3 3Z" />
                                </svg>
                                <span>Editar Productos</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="group flex gap-x-2 hover:text-primary"
                                to="/chef/eliminar-producto"
                            >
                                <svg
                                    className="size-5 *:fill-white *:group-hover:fill-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 35 40"
                                >
                                    <path d="M34.2 5.7h-10V1.4A1.4 1.4 0 0 0 23 0H11.4A1.4 1.4 0 0 0 10 1.4v4.3H0v3.6h3l1.7 28A2.9 2.9 0 0 0 7.6 40h19.1a2.9 2.9 0 0 0 2.8-2.7l1.8-28h3V5.7ZM10 34.3l-.8-22.9h3l.7 22.9H10Zm8.6 0h-2.9V11.4h2.9v22.9Zm2.1-28.6h-7.1V3.2a.4.4 0 0 1 .3-.3h6.5a.4.4 0 0 1 .3.3v2.5Zm3.6 28.6h-3l.8-22.9h3l-.8 22.9Z" />
                                </svg>
                                <span>Eliminar Productos</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </main>
        </>
    );
}
