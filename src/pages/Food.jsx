import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Product from "../components/Product";

export default function Food() {
	const categorias = [
		"Milanesa de Pollo",
		"Milanesa de Carne",
		"Pollo Broaster",
		"Camarón Apanado",
		"Chuleta",
	];

	const GetFood = async () => {
		const respuesta = await axios.get(
			`${import.meta.env.VITE_BACKEND_URL}/productos`
		);
		console.log(respuesta);
	};

	useEffect(() => {
		GetFood();
	}, []);

	return (
		<>
			<img
				className="w-full"
				src="https://media.istockphoto.com/id/1480830650/photo/mexican-food-top-border-overhead-view-on-a-dark-wood-banner-background.jpg?b=1&s=170667a&w=0&k=20&c=TriC-qRQTMlwdoNIMg508NQLueIPSFGjT6ozE-Plbeg="
				alt="Fondo de Comidas"
			/>
			<section className="flex flex-col">
				<div className="bg-black text-white font-bold text-2xl text-center uppercase my-4">
					<h1>Almuerzos</h1>
				</div>
				{/* <div className="flex sm:flex-row flex-col items-center justify-center gap-8">
					{categorias.map((categoria) => (
						<Link
							key={categoria}
							className="sm:w-1/4 w-3/5 hover:scale-105"
							to={`/categorias/${categoria.toLowerCase()}`}
						>
							<article className="bg-black text-white rounded-2xl">
								<h2 className="font-bold text-xl p-1.5 text-center">
									{categoria}
								</h2>
								<div className="h-[200px]">
									<img
										className="size-full rounded-b-2xl "
										src={`/${categoria}.png`}
										alt=""
									/>
								</div>
							</article>
						</Link>
					))}
				</div> */}
				<div
					className="grid place-content-center px-10 py-5 w-full gap-x-4 gap-y-8"
					style={{
						gridTemplateColumns:
							"repeat(auto-fit, minmax(400px, 1fr))",
					}}
				>
					<Product
						nombre="Milanesa de Pollo"
						descripcion="Milanesa de pollo con arroz, fideo y ensalada"
						precio="2.00"
						categoria="comida"
					/>
					<Product
						nombre="Milanesa de Carne"
						descripcion="Milanesa de carne con arroz, fideo y ensalada"
						precio="2.50"
						categoria="comida"
					/>
					<Product
						nombre="Pollo Broaster"
						descripcion="Pollo broaster con papas fritas"
						precio="3.00"
						categoria="comida"
					/>
					<Product
						nombre="Camarón Apanado"
						descripcion="Camarón apanado con arroz y ensalada"
						precio="4.00"
						categoria="comida"
					/>
					<Product
						nombre="Chuleta"
						descripcion="Chuleta con arroz, fideo y ensalada"
						precio="3.50"
						categoria="comida"
					/>
					<Product
						nombre="Chuleta"
						descripcion="Chuleta con arroz, fideo y ensalada"
						precio="3.50"
						categoria="comida"
					/>
				</div>
			</section>
		</>
	);
}
