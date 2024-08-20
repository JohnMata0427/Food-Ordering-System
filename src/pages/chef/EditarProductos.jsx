import { useEffect } from "react";
import FormProductos from "@components/FormProductos";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function EditarProducts() {
    const { id } = useParams();
    const [mensaje, setMensaje] = useState({});
    const [producto, setProducto] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/producto/${id}`,
                );
                setProducto(response.data);
                setMensaje({
                    response: "Producto cargado correctamente",
                    exito: true,
                });
            } catch ({ response }) {
                setMensaje({
                    response: response.data.msg,
                    exito: false,
                });
            }
        };
        getProduct();
    });

    return (
        <section className="flex w-full flex-col items-center gap-y-8 border-t-8 border-secondary p-8">
            {producto._id ? (
                <>
                    <h1 className="text-center text-3xl">Editar Producto</h1>
                    <FormProductos producto={producto} />
                </>
            ) : (
                <h1 className="text-center text-3xl">Cargando...</h1>
            )}
        </section>
    );
}
