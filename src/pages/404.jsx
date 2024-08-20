import { Link } from "react-router-dom";
import chefHat from "/public/favicon.svg";
import { CustomButton } from "@components/CustomButton";

export default function NotFound() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center space-y-4">
            <img
                className="size-20 animate-bounce"
                src={chefHat}
                alt="Icono de Gorro de Chef Dorado"
            />
            <h1 className="text-4xl font-bold text-primary">404</h1>
            <span className="text-lg">Page not found</span>
            <Link to="/iniciar-sesion">
                <CustomButton
                    texto="Volver al inicio"
                    color="black"
                    masEstilos="group w-full justify-center gap-x-2 rounded-xl mb-2 text-white"
                >
                    <svg className="size-5" viewBox="0 0 40 40">
                        <path
                            className="fill-white group-hover:fill-black"
                            d="M20.4 8a.6.6 0 0 0-.8 0L5.2 21.6a.6.6 0 0 0-.2.4v13a2.5 2.5 0 0 0 2.5 2.5H15a1.3 1.3 0 0 0 1.3-1.3V25.6a.6.6 0 0 1 .6-.6H23a.6.6 0 0 1 .6.6v10.6a1.3 1.3 0 0 0 1.3 1.3h7.5A2.5 2.5 0 0 0 35 35V22.1a.6.6 0 0 0-.2-.4L20.4 7.9Z"
                        />
                        <path
                            className="fill-white group-hover:fill-black"
                            d="m38.4 19-5.9-5.5V5a1.3 1.3 0 0 0-1.2-1.3h-3.8A1.3 1.3 0 0 0 26.3 5v2.5l-4.6-4.3c-.4-.5-1-.7-1.7-.7s-1.3.2-1.7.7L1.7 19c-.5.4-.6 1.2-.2 1.7a1.3 1.3 0 0 0 1.9.1L19.6 5.4a.6.6 0 0 1 .8 0L36.6 21a1.3 1.3 0 0 0 1.8 0c.5-.5.5-1.3 0-1.8Z"
                        />
                    </svg>
                </CustomButton>
            </Link>
        </div>
    );
}
