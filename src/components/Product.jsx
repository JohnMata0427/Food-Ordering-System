import { useState } from "react";
import { CustomButton } from "./CustomButton";

export default function Product({ nombre, descripcion, precio, categoria }) {
	const [count, setCount] = useState(1);

	const categorias = {
		comida: 'bg-[#F9A826]',
		bebida: 'bg-[#BF0914]',
		snack: 'bg-green-500'
	}

	return (
		<article className="flex bg-slate-100 rounded-xl shadow-lg shadow-black/30 w-[400px] h-40">
			<div className="w-1/2 flex justify-center relative">
				<img
					className="size-full rounded-l-xl"
					src={`/${nombre}.png`}
					alt={nombre}
				/>
				<div className="absolute rounded-l-xl bg-black/10 inset-0"></div>
				<div className={`absolute bottom-2 right-0 ${categorias[categoria]} text-white font-bold py-1 px-3 rounded-l-lg`}>
					${precio}
				</div>
			</div>
			<div className="w-1/2 flex flex-col justify-between py-2 px-4">
				<div className="flex flex-col">
					<h3 className="font-bold">{nombre}</h3>
					<span className="text-xs">{descripcion}</span>
				</div>

				<div class="relative flex items-center">
					<button
						onClick={() => {
							if (count > 1) setCount(count - 1);
						}}
						class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
					>
						<svg
							class="w-2.5 h-2.5 text-gray-900 dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 18 2"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 1h16"
							/>
						</svg>
					</button>
					<input
						type="text"
						id="count"
						name="count"
						class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
						value={count}
						onChange={({ target }) => {
							if (target.value > 0 && target.value < 30)
								setCount(target.value);
						}}
						required
					/>
					<button
						onClick={() => {
							if (count < 30) setCount(count + 1);
						}}
						class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
					>
						<svg
							class="w-2.5 h-2.5 text-gray-900 dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 18 18"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 1v16M1 9h16"
							/>
						</svg>
					</button>
				</div>

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
