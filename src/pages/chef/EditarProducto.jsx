import { CustomButton } from "@components/CustomButton";
import { useContext, useState } from "react";
import Alerta from "@components/Alerta";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function EditarProductoComponent() {
    const [mensaje, setMensaje] = useState({});
    const AddProductoAsync = async (formData) => {
        const token = localStorage.getItem("token");
        console.log(token);

        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/productos/registro`;
            const option = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            };
            const respuesta = await axios.post(url, formData, option);
            return respuesta;
        } catch (error) {
            return error;
        }
        /*
    const solicitud = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/productos/registro`,
      {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body:JSON.stringify(formData),
        mode:"cors"

      }
    );
    const respuesta = await solicitud.json();
    return respuesta;*/
    };

    const HandleSubmit = async (e) => {
        e.preventDefault();
        const resultado = await AddProductoAsync(form);
        console.log(resultado);
    };

    const [form, setForm] = useState({
        nombre: "",
        precio: "",
        descripcion: "",
        categoria: "",
        cantidad: "",
        image: "",
    });

    const HandleChange = (event) => {
        setForm({ ...form, [event.target.id]: event.target.value });
    };

    return (
        <div>
            <form
                className="flex h-[100vh] w-[80vw] flex-col items-center justify-center"
                onSubmit={HandleSubmit}
                id="addproducto"
            >
                <div className="mt-10">
                    <h1 className="w-full text-center text-3xl">
                        EDITAR PRODUCTOS
                    </h1>
                </div>
                <div className="my-auto w-full">
                    <div className="flex w-full justify-around">
                        <div>
                            <div className="mb-9 flex flex-col">
                                <div className="relative">
                                    <label htmlFor="">
                                        Nuevo nombre del Producto
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre_producto"
                                        onChange={HandleChange}
                                        className="focus w-full flex-1 appearance-none rounded-lg border border-black bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        name="pseudo"
                                        value={producto.nombre}
                                    />
                                </div>
                            </div>
                            <div className="mb-9 flex flex-col">
                                <div className="relative">
                                    <label htmlFor="precio_producto">
                                        Nuevo precio Producto
                                    </label>
                                    <input
                                        type="text"
                                        onChange={HandleChange}
                                        id="precio_producto"
                                        className="focus w-full flex-1 appearance-none rounded-lg border border-black bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        name="pseudo"
                                        value={producto.precio}
                                    />
                                </div>
                            </div>
                            <div className="mb-9 flex flex-col">
                                <div className="relative">
                                    <label htmlFor="precio_producto">
                                        Nuevo categoría del Producto
                                    </label>
                                    <input
                                        type="text"
                                        onChange={HandleChange}
                                        id="precio_producto"
                                        className="focus w-full flex-1 appearance-none rounded-lg border border-black bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        name="pseudo"
                                        value={producto.categoria}
                                    />
                                </div>
                            </div>
                            <div className="mb-9 flex flex-col">
                                <label htmlFor="descripcion_producto">
                                    Nueva descripcion del Producto
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="descripcion_producto"
                                        onChange={HandleChange}
                                        className="focus w-full flex-1 appearance-none rounded-lg border border-black bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        name="pseudo"
                                        value={producto.descripcion}
                                    />
                                </div>
                            </div>
                            <div className="mb-9 flex flex-col">
                                <label htmlFor="descripcion_producto">
                                    Cantidad
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="cantidad"
                                        onChange={HandleChange}
                                        className="focus w-full flex-1 appearance-none rounded-lg border border-black bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        name="pseudo"
                                        value={producto.cantidad}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mr-auto">
                                <h3 className="text-start text-xl">
                                    Imagen Producto
                                </h3>
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    value={form.image}
                                    onChange={HandleChange}
                                />
                            </div>
                            <img
                                src={producto.foto.url}
                                className="h-[18rem] w-[40rem] overflow-hidden rounded-xl object-contain"
                            ></img>
                            <CustomButton
                                texto="Subir"
                                color="yellow"
                                masEstilos="text-black gap-x-2 rounded-xl mt-4 mx-auto"
                            >
                                <svg
                                    baseProfile="tiny"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="25px"
                                >
                                    <path d="M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zm.707-7l2.646-2.646a.502.502 0 000-.707.502.502 0 00-.707 0L12 11.293 9.354 8.646a.5.5 0 00-.707.707L11.293 12l-2.646 2.646a.5.5 0 00.707.708L12 12.707l2.646 2.646a.5.5 0 10.708-.706L12.707 12z" />
                                </svg>
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </form>
            {mensaje.respuesta && (
                <Alerta exito={mensaje.exito}>{mensaje.respuesta}</Alerta>
            )}
        </div>
    );
}
