import { useState } from "react";
import { CustomButton } from "./CustomButton";
import NumberInput from "./NumberInput";

export default function Product({
	nombre,
	descripcion,
	precio,
	categoria,
	imageUrl,
}) {
	const [count, setCount] = useState(1);

	const categorias = {
		comida: "bg-[#F9A826]",
		bebida: "bg-[#BF0914]",
		snack: "bg-green-500",
	};

	return (
		<article className="flex bg-slate-100 rounded-xl shadow-lg shadow-black/30 w-[400px] h-40">
			<div className="w-1/2 flex justify-center relative">
				<img
					className="size-full rounded-l-xl"
					src={imageUrl}
					alt={nombre}
				/>
				<div
					className={`absolute bottom-2 right-0 ${categorias[categoria]} text-white font-bold py-1 px-3 rounded-l-lg`}
				>
					${precio}
				</div>
			</div>
			<div className="w-1/2 flex flex-col justify-between py-2 px-4">
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
