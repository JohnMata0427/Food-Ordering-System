import { useState } from "react";
import { CustomButton } from "./CustomButton";
import NumberInput from "./NumberInput";
import { Link } from "react-router-dom";

export default function Product({
    nombre,
    descripcion,
    precio,
    categoria,
    imageUrl,
    to,
}) {
    const [count, setCount] = useState(1);

    const categorias = {
        comida: "bg-[#F9A826]",
        bebida: "bg-[#BF0914]",
        snack: "bg-green-500",
    };

    return (
        <article className="flex h-40 w-[400px] rounded-xl bg-slate-100 shadow-lg shadow-black/30">
            <div className="relative flex w-1/2 justify-center">
                <Link to={to}>
                    <img
                        className="h-full rounded-l-xl"
                        src={imageUrl}
                        alt={nombre}
                    />
                </Link>
                <div
                    className={`absolute bottom-2 right-0 ${categorias[categoria]} rounded-l-lg px-3 py-1 font-bold text-white`}
                >
                    ${precio}
                </div>
            </div>
            <div className="flex w-1/2 flex-col justify-between px-4 py-2">
                <div className="flex flex-col">
                    <h3 className="font-bold">{nombre}</h3>
                    <span className="text-xs">{descripcion}</span>
                </div>

                <NumberInput value={count} size="small" />

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
            </div>
        </article>
    );
}
