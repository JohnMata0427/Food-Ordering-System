import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";

export default function Snacks() {
	const categorias = [
		"Galletas Amor",
		"Pipas",
		"Pastelitos",
		"Papas",
		"Yuca Frita",
	];

	const GetSnacks = async () => {
		const respuesta = await axios.get(
			`${import.meta.env.VITE_BACKEND_URL}/productos`
		);
		console.log(respuesta);
	};

	useEffect(() => {
		GetSnacks();
	}, []);

	return (
		<>
			<img
				className="w-full"
				src="https://cavinkare.com/wp-content/uploads/2017/08/garden_021.jpg"
				alt="Fondo de Postres"
			/>
			<section className="flex flex-col">
				<div className="bg-black text-white font-bold text-2xl text-center uppercase my-4">
					<h1>Snacks</h1>
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
								<div className="h-[250px]">
									<img
										className="size-full rounded-b-2xl"
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
						nombre="Galletas Amor"
						descripcion="Galletas de chocolate, vainilla y fresa"
						precio="1.50"
						categoria="snack"
					/>
					<Product
						nombre="Pipas"
						descripcion="Pipas de girasol saladas, sin sal, con limón y ají"
						precio="0.75"
						categoria="snack"
					/>
					<Product
						nombre="Pastelitos"
						descripcion="Pastelitos de chocolate, vainilla y fresa"
						precio="1.00"
						categoria="snack"
					/>
					<Product
						nombre="Papas"
						descripcion="Papas fritas de queso, limón, ají y sal"
						precio="1.25"
						categoria="snack"
					/>
					<Product
						nombre="Yuca Frita"
						descripcion="Yuca frita con mayonesa y ketchup"
						precio="1.50"
						categoria="snack"
					/>
					<Product
						nombre="Yuca Frita"
						descripcion="Yuca frita con mayonesa y ketchup"
						precio="1.50"
						categoria="snack"
					/>
				</div>
			</section>
		</>
	);
}
