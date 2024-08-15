import axios from "axios";
import { useEffect, useState } from "react";
import Alerta from "../../components/Alerta";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ListarProductos() {
    const navigate = useNavigate();
    const [productos, setProductos] = useState([]);
    const [mensaje, setMensaje] = useState({});

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(
                `${import.meta.env.VITE_BACKEND_URL}/producto/${id}`,
            );
            setProductos(productos.filter((producto) => producto._id !== id));
            setMensaje({ response: response.data.msg, exito: true });
            setTimeout(() => {
                setMensaje({});
            }, 5000);
        } catch ({ response }) {
            setMensaje({ response: response.data.msg, exito: false });
        }
    }

    const getProductos = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/productos`,
            );
            setProductos(response.data);
            setMensaje({
                response: "Productos cargados correctamente",
                exito: true,
            });
            setTimeout(() => {
                setMensaje({});
            }, 5000);
        } catch ({ response }) {
            setMensaje({
                response: response.data.message,
                exito: false,
            });
        }
    };

    useEffect(() => {
        getProductos();
    }, []);

    return (
        <section className="flex w-full flex-col items-center justify-center gap-y-8 border-t-8 border-secondary p-8">
            <h1 className="text-center text-3xl">Listar Productos</h1>
            {mensaje.response && (
                <Alerta exito={mensaje.exito}>{mensaje.response}</Alerta>
            )}
            <table className="rounded-lg first:rounded-t-lg last:rounded-b-lg">
                <thead>
                    <tr className="border border-black bg-primary *:px-4 *:py-1.5">
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr
                            key={producto._id}
                            className="border border-black *:px-4 *:py-1.5 odd:bg-white even:bg-neutral-200"
                        >
                            <td>
                                <Link
                                    to={`/chef/detalle-producto/${producto._id}`}
                                >
                                    <img
                                        src={producto.foto.url}
                                        alt={producto.nombre}
                                        className="m-auto h-12"
                                    />
                                </Link>
                            </td>
                            <td>{producto.nombre}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.categoria}</td>
                            <td>${producto.precio}</td>
                            <td className="flex h-14 items-center justify-center gap-x-2">
                                <>
                                    <svg
                                        onClick={() => {
                                            navigate(
                                                `/chef/editar-producto/${producto._id}`,
                                            );
                                        }}
                                        className="size-5 *:fill-black cursor-pointer"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 40 40"
                                    >
                                        <path d="M5.3 40H0v-5.3L29.8 4.8l5.4 5.4L5.2 40Zm31-31L31 3.7l3-3a2.7 2.7 0 0 1 2.8-.5l.8.5 1.7 1.7A2.5 2.5 0 0 1 40 4c0 .7-.3 1.4-.7 1.9l-3 3Z" />
                                    </svg>
                                    <svg
                                        onClick={() => {
                                            handleDelete(producto._id);
                                        }}
                                        className="size-5 *:fill-red-700 cursor-pointer"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 35 40"
                                    >
                                        <path d="M34.2 5.7h-10V1.4A1.4 1.4 0 0 0 23 0H11.4A1.4 1.4 0 0 0 10 1.4v4.3H0v3.6h3l1.7 28A2.9 2.9 0 0 0 7.6 40h19.1a2.9 2.9 0 0 0 2.8-2.7l1.8-28h3V5.7ZM10 34.3l-.8-22.9h3l.7 22.9H10Zm8.6 0h-2.9V11.4h2.9v22.9Zm2.1-28.6h-7.1V3.2a.4.4 0 0 1 .3-.3h6.5a.4.4 0 0 1 .3.3v2.5Zm3.6 28.6h-3l.8-22.9h3l-.8 22.9Z" />
                                    </svg>
                                </>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
