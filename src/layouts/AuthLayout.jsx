import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    const location = useLocation().pathname.split("/")[2].replace(/-/g, " ");
    const locationCapitalized =
        location.charAt(0).toUpperCase() + location.slice(1);

    useEffect(() => {
        document.title = `Asociación de la ESFOT - ${locationCapitalized}`;
    }, []);

    return (
        <main className="flex min-h-screen w-full content-center justify-center">
            <div className="hidden min-h-screen w-3/5 bg-[url('/fondo-autenticacion.png')] bg-cover bg-center bg-no-repeat sm:block"></div>
            <Outlet />
        </main>
    );
}
