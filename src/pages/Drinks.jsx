import { useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Drinks() {
    const [drinks, setDrinks] = useState([]);

    const getDrinks = async () => {
        setDrinks(
            (
                await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/productos/Bebidas`,
                )
            ).data,
        );
        console.log(drinks);
    };

    useEffect(() => {
        getDrinks();
    }, []);

    return (
        <>
            <img
                className="w-full"
                src="https://www.shutterstock.com/image-photo/soft-drinks-colorful-flavorful-glasses-600nw-2186376175.jpg"
                alt="Fondo de Bebidas"
            />
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
                    {drinks.map((drink) => (
                        <div
                            key={drink._id}
                            className="flex items-center justify-center"
                        >
                            <Product
                                nombre={drink.nombre}
                                descripcion={drink.descripcion}
                                precio={drink.precio}
                                categoria="bebida"
                                imageUrl={drink.foto.url}
                                to={`/producto/${drink._id}`}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
