import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CustomButton } from "@components/CustomButton";
import NumberInput from "@components/NumberInput";
import { useLocation } from "react-router-dom";

export default function DescripcionProducto() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [count, setCount] = useState(1);

    const getProduct = async () => {
        setProduct(
            (
                await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/producto/${id}`,
                )
            ).data,
        );
        console.log(product.data);
    };

    useEffect(() => {
        getProduct();
    }, []);

    useEffect(() => {
        document.title = `${product.nombre} - Asociación de la ESFOT`;
    }, [product]);

    return (
        <section className="flex w-full justify-center">
            <article className="mt-10 flex w-[300px] flex-col gap-5 rounded-xl p-10 shadow-lg shadow-black/40 sm:w-[450px]">
                <div className="flex h-auto w-full justify-center">
                    <img
                        className="h-full"
                        src={product.foto?.url}
                        alt={`Imagen de ${product.nombre}`}
                    />
                </div>
                <div className="flex flex-col justify-start">
                    <h1 className="text-xl">{product.nombre}</h1>
                    <p>{product.descripcion}</p>
                    <span className="my-3 text-sm">
                        Categoría:{" "}
                        <strong className="rounded-lg bg-amber-400 p-1">
                            {product.categoria}
                        </strong>
                    </span>
                    <span className="my-1 text-sm">
                        Stock:{" "}
                        <strong className="p-1">{product.cantidad}</strong>
                    </span>
                    <span className="text-lg font-bold">{`$${product.precio}`}</span>
                </div>
                <NumberInput
                    value={count}
                    size="medium"
                    max={product.cantidad}
                />

                <CustomButton
                    texto="Añadir al carrito"
                    color="black"
                    masEstilos="text-white text-xs h-9"
                >
                    <svg width="25" viewBox="0 0 513 513">
                        <path
                            className="fill-white group-hover:fill-black"
                            d="M177 448a32 32 0 1 0 0-64 32 32 0 0 0 0 64ZM401 448a32 32 0 1 0 0-64 32 32 0 0 0 0 64ZM168 304h262l38-192H135l-9-48H33v32h66l48 272h286v-32H174l-6-32Z"
                        />
                    </svg>
                </CustomButton>
            </article>
        </section>
    );
}
