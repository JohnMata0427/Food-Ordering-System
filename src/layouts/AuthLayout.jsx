import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <main className="flex justify-center content-center w-full min-h-screen">
            <div className="w-3/5 min-h-screen bg-[url('/fondo-autenticacion.png')] bg-no-repeat bg-cover bg-center sm:block hidden"></div>
            <Outlet />
        </main>
    );
}
