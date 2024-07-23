export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen space-y-4">
            <img className="size-20 animate-bounce" src="/public/favicon.svg" alt="Icono de Gorro de Chef Dorado" />
            <h1 className="text-4xl font-bold text-primary">404</h1>
            <span className="text-lg">Page not found</span>
        </div>
    );
}