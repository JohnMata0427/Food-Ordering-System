import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {

    const location = useLocation().pathname.split("/")[2].replace(/-/g, " ")
    const locationCapitalized = location.charAt(0).toUpperCase() + location.slice(1);

    useEffect(() => {
        document.title = `Asociación de la ESFOT - ${locationCapitalized}`;
    }, []);

    return (
        <main className="flex justify-center content-center w-full min-h-screen">
            <div className="w-3/5 min-h-screen bg-[url('/fondo-autenticacion.png')] bg-no-repeat bg-cover bg-center sm:block hidden"></div>
            <Outlet />
        </main>
    );
}
