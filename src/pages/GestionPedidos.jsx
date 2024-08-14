import axios from "axios";
import React, { useEffect, useState } from "react";

export default function GestionPedidos() {
    const [pedidos, setPedidos] = useState([]);

    const listarPedidos = async () => {
        try {
            const token = localStorage.getItem("token");
            const url = `${import.meta.env.VITE_BACKEND_URL}/pedidos`;
            const options = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const respuesta = await axios.get(url, options);
            console.log(respuesta);
            setPedidos(respuesta.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        listarPedidos();
    }, []);

    return (
        <>
            <section className="flex min-h-screen flex-col items-center gap-8 pt-10">
                <h1 className="my-4 text-center text-5xl font-bold uppercase">
                    GESTIÓN DE PEDIDOS
                </h1>

                {pedidos.length === 0 ? (
                    <div className="text-center">
                        <p className="text-lg font-semibold">
                            No existen registros
                        </p>
                    </div>
                ) : (
                    <table className="mt-5 w-full table-auto bg-white shadow-lg">
                        <thead className="bg-gray-800 text-slate-400">
                            <tr>
                                <th className="p-2">N°</th>
                                <th className="p-2">Cliente</th>
                                <th className="p-2">Correo Electrónico</th>
                                <th className="p-2">Celular</th>
                                <th className="p-2">Estado</th>
                                <th className="p-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pedidos.map((pedido, index) => (
                                <tr
                                    className="border-b text-center hover:bg-gray-300"
                                    key={pedido._id}
                                >
                                    <td>{index + 1}</td>
                                    <td>{`${pedido.cliente.nombre} ${pedido.cliente.apellido}`}</td>
                                    <td>{pedido.cliente.email}</td>
                                    <td>{pedido.cliente.celular}</td>
                                    <td>
                                        <span
                                            className={`mr-2 rounded px-2.5 py-0.5 text-xs font-medium ${pedido.estado === "activo" ? "bg-blue-100 text-green-500" : "bg-red-100 text-red-500"} dark:bg-blue-900 dark:text-blue-300`}
                                        >
                                            {pedido.estado}
                                        </span>
                                    </td>
                                    <td className="py-2 text-center">
                                        <button
                                            className="text-blue-500 hover:underline"
                                            onClick={() => {
                                                /* Acción para visualizar el pedido */
                                            }}
                                        >
                                            Ver
                                        </button>
                                        <button
                                            className="ml-4 text-red-500 hover:underline"
                                            onClick={() => {
                                                /* Acción para eliminar el pedido */
                                            }}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </>
    );
}
