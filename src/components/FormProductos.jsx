import { CustomButton } from "@components/CustomButton";
import { useContext, useState } from "react";
import Alerta from "@components/Alerta";
import axios from "axios";

export default function AddProductComponent({ producto }) {
    const [mensaje, setMensaje] = useState({});
    const [imagePreview, setImagePreview] = useState(producto?.foto?.url || "");

    const [form, setForm] = useState({
        nombre: producto?.nombre || "",
        precio: producto?.precio || "",
        descripcion: producto?.descripcion || "",
        categoria: producto?.categoria || "Comidas",
        cantidad: producto?.cantidad || "",
        image: producto?.foto?.url || "",
    });

    const handleChange = (event) => {
        setForm({ ...form, [event.target.id]: event.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setForm({ ...form, image: file });
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const respuesta = producto?._id
                ? await axios.put(
                      `${import.meta.env.VITE_BACKEND_URL}/producto/${producto?._id}`,
                      form,
                      {
                          headers: {
                              "Content-Type": "multipart/form-data",
                              Authorization: `Bearer ${localStorage.getItem("token")}`,
                          },
                      },
                  )
                : await axios.post(
                      `${import.meta.env.VITE_BACKEND_URL}/productos/registro`,
                      form,
                      {
                          headers: {
                              "Content-Type": "multipart/form-data",
                              Authorization: `Bearer ${localStorage.getItem("token")}`,
                          },
                      },
                  );
            setMensaje({ response: respuesta.data.msg, exito: true });
        } catch (error) {
            console.log(error);
            setMensaje({ response: error.response.data.msg, exito: false });
        }
    };

    return (
        <form className="flex flex-col gap-y-8" onSubmit={handleSubmit}>
            <div className="flex gap-x-4">
                <div className="flex flex-col gap-y-2">
                    <label className="font-bold" htmlFor="nombre">
                        Nombre del producto:
                    </label>
                    <input
                        id="nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        type="text"
                        className="rounded-lg border border-black p-1.5"
                    />
                    <label className="font-bold" htmlFor="descripcion">
                        Descripción del producto:
                    </label>
                    <input
                        id="descripcion"
                        name="descripcion"
                        value={form.descripcion}
                        onChange={handleChange}
                        type="text"
                        className="rounded-lg border border-black p-1.5"
                    />
                    <label className="font-bold" htmlFor="">
                        Categoria del producto:
                    </label>
                    <select
                        id="categoria"
                        name="cateogria"
                        value={form.categoria}
                        onChange={handleChange}
                        className="rounded-lg border border-black p-1.5"
                    >
                        <option value="Comidas">Comidas</option>
                        <option value="Bebidas">Bebidas</option>
                        <option value="Snacks">Snacks</option>
                    </select>
                    <label className="font-bold" htmlFor="precio">
                        Precio del producto
                    </label>
                    <input
                        id="precio"
                        name="precio"
                        value={form.precio}
                        onChange={handleChange}
                        type="number"
                        className="rounded-lg border border-black p-1.5"
                    />
                    <label className="font-bold" htmlFor="">
                        Cantidad del producto:
                    </label>
                    <input
                        id="cantidad"
                        name="cantidad"
                        value={form.cantidad}
                        onChange={handleChange}
                        type="number"
                        className="rounded-lg border border-black p-1.5"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <label className="font-bold" htmlFor="">
                        Imagen del producto:
                    </label>
                    <div
                        className="size-80 h-44 cursor-pointer rounded-lg bg-neutral-300"
                        onClick={() => {
                            document.getElementById("image").click();
                        }}
                    >
                        {imagePreview && (
                            <img
                                className="size-full object-cover"
                                src={imagePreview}
                                alt="Imagen del producto"
                            />
                        )}
                    </div>
                    <input
                        id="image"
                        name="image"
                        type="file"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center gap-y-4">
                {mensaje.response && (
                    <Alerta exito={mensaje.exito}>{mensaje.response}</Alerta>
                )}
                <CustomButton
                    texto={
                        producto?._id
                            ? "Actualizar Producto"
                            : "Agregar Producto"
                    }
                    color="yellow"
                ></CustomButton>
            </div>
        </form>
    );
}
