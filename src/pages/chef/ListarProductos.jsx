import axios from "axios";
import { useEffect, useState } from "react";
import Alerta from "../../components/Alerta";

export default function ListarProductos() {
    const [productos, setProductos] = useState([]);
    const [mensaje, setMensaje] = useState({});

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
        <section className="flex flex-col items-center justify-center gap-y-8 w-full p-8 border-t-8 border-secondary">
            <h1 className="text-center text-3xl">Listar Productos</h1>
            {mensaje.response && (
                <Alerta exito={mensaje.exito}>{mensaje.response}</Alerta>
            )}
            <table className="rounded-lg first:rounded-t-lg last:rounded-b-lg ">
                <tr className="bg-primary *:py-1.5 *:px-4 border border-black">
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Categoria</th>
                    <th>Precio</th>
                </tr>
                {productos.map((producto) => (
                    <tr className="border border-black *:py-1.5 *:px-4 odd:bg-white even:bg-neutral-200">
                        <td>
                            <img
                                src={producto.foto.url}
                                alt={producto.nombre}
                                className=" m-auto h-12"
                            />
                        </td>
                        <td>{producto.nombre}</td>
                        <td>{producto.descripcion}</td>
                        <td>{producto.categoria}</td>
                        <td>${producto.precio}</td>
                    </tr>
                ))}
            </table>
        </section>
    );
}
