import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <main className="flex justify-center content-center w-full min-h-screen">
            <Outlet />
        </main>
    );
}
