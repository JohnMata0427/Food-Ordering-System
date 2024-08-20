import { useEffect } from "react";
import axios from "axios";
import Product from "@components/Product";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Snacks() {
    const [snacks, setSnacks] = useState([]);

    const getSnacks = async () => {
        setSnacks(
            (
                await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/productos/Snacks`,
                )
            ).data,
        );
    };

    useEffect(() => {
        getSnacks();
    }, []);

    return (
        <>
            <img
                className="w-full"
                src="https://cavinkare.com/wp-content/uploads/2017/08/garden_021.jpg"
                alt="Fondo de Postres"
            />
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
                    {snacks.map((snack) => (
                        <Link
                            key={snack._id}
                            className="flex items-center justify-center"
                        >
                            <Product
                                nombre={snack.nombre}
                                descripcion={snack.descripcion}
                                precio={snack.precio}
                                categoria="snack"
                                imageUrl={snack.foto.url}
                                to={`/producto/${snack._id}`}
                            />
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}
