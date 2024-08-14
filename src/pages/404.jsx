import chefHat from "/public/favicon.svg";

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
        </div>
    );
}
