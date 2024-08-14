import { Link } from "react-router-dom";
import Product from "../components/Product";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Categorias() {
    const [productos, setProductos] = useState([]);

    const getProducts = async () =>
        setProductos(
            (await axios.get(`${import.meta.env.VITE_BACKEND_URL}/productos`))
                .data,
        );

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <img
                className="w-full"
                src="https://t4.ftcdn.net/jpg/03/27/03/53/360_F_327035327_SOn72QASojS0rl65XDrq4iYhcb9r6pMO.jpg"
                alt="Fondo de Inicio"
            />
            <section className="flex flex-col">
                <div className="my-4 bg-black text-center text-2xl font-bold uppercase text-white">
                    <h1>Almuerzos</h1>
                </div>
                <div
                    className="grid w-full place-content-center gap-x-4 gap-y-8 px-10 py-5"
                    style={{
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(400px, 1fr))",
                    }}
                >
                    {productos
                        .filter((producto) => producto.categoria === "Comidas")
                        .map((producto) => (
                            <div
                                key={producto._id}
                                className="flex items-center justify-center"
                            >
                                <Product
                                    nombre={producto.nombre}
                                    descripcion={producto.descripcion}
                                    precio={producto.precio}
                                    categoria="comida"
                                    imageUrl={producto.foto.url}
                                    to={`/producto/${producto._id}`}
                                />
                            </div>
                        ))}
                </div>
            </section>

            <section className="flex flex-col">
                <div className="my-4 bg-black text-center text-2xl font-bold uppercase text-white">
                    <h1>Bebidas</h1>
                </div>
                <div
                    className="grid w-full place-content-center gap-x-4 gap-y-8 px-10 py-5"
                    style={{
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(400px, 1fr))",
                    }}
                >
                    {productos
                        .filter((producto) => producto.categoria === "Bebidas")
                        .map((producto) => (
                            <div
                                key={producto._id}
                                className="flex items-center justify-center"
                            >
                                <Product
                                    nombre={producto.nombre}
                                    descripcion={producto.descripcion}
                                    precio={producto.precio}
                                    categoria="bebida"
                                    imageUrl={producto.foto.url}
                                    to={`/producto/${producto._id}`}
                                />
                            </div>
                        ))}
                </div>
            </section>

            <section className="flex flex-col">
                <div className="my-4 bg-black text-center text-2xl font-bold uppercase text-white">
                    <h1>Snacks</h1>
                </div>
                <div
                    className="grid w-full place-content-center gap-x-4 gap-y-8 px-10 py-5"
                    style={{
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(400px, 1fr))",
                    }}
                >
                    {productos
                        .filter((producto) => producto.categoria === "Snacks")
                        .map((producto) => (
                            <div
                                key={producto._id}
                                className="flex items-center justify-center"
                            >
                                <Product
                                    nombre={producto.nombre}
                                    descripcion={producto.descripcion}
                                    precio={producto.precio}
                                    categoria="snack"
                                    imageUrl={producto.foto.url}
                                    to={`/producto/${producto._id}`}
                                />
                            </div>
                        ))}
                </div>
            </section>
        </>
    );
}
