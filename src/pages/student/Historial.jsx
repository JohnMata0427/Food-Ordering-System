import { useEffect } from "react";
import axios from "axios";

export default function Historial() {
    const GetHistorial = async () => {
        const respuesta = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/pedidos`,
        );
        console.log(respuesta);
    };

    useEffect(() => {
        GetHistorial();
    }, []);

    return (
        <section className="flex min-h-screen flex-col items-center gap-8">
            <h1 className="my-4 text-center text-2xl font-bold uppercase">
                HISTORIAL DE PEDIDOS
            </h1>
            <div className="relative">
                <input
                    className="w-96 rounded-2xl border border-black px-4 py-1.5"
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
            <table className="w-3/5 rounded-lg border border-black">
                <tr className="rounded-t-lg bg-gray-300">
                    <th> Fecha </th>
                    <th> Estado </th>
                    <th> Número </th>
                    <th> Descripción </th>
                </tr>
                <tr className="*:text-center">
                    <td>03/08/2024</td>
                    <td>Entregado</td>
                    <td>12345</td>
                    <td>Milanesa de Pollo</td>
                </tr>
            </table>
        </section>
    );
}
