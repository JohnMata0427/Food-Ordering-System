import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";

export default function Drinks() {
	const categorias = [
		"Pepsi",
		"Agua Cielo",
		"Frutaris",
		"Fanta",
		"Coca Cola",
	];

	const GetDrinks = async () => {
		const respuesta = await axios.get(
			`${import.meta.env.VITE_BACKEND_URL}/productos`
		);
		console.log(respuesta);
	};

	useEffect(() => {
		GetDrinks();
	}, []);

	return (
		<>
			<img
				className="w-full"
				src="https://www.shutterstock.com/image-photo/soft-drinks-colorful-flavorful-glasses-600nw-2186376175.jpg"
				alt="Fondo de Bebidas"
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
						nombre="Agua Cielo"
						descripcion="Agua de marca cielo, helada o al clima"
						precio="0.50"
						categoria="bebida"
					/>
					<Product
						nombre="Pepsi"
						descripcion="Refresco de cola, helado o al clima"
						precio="1.00"
						categoria="bebida"
					/>
					<Product
						nombre="Frutaris"
						descripcion="Refresco de frutas, helado o al clima"
						precio="0.25"
						categoria="bebida"
					/>
					<Product
						nombre="Fanta"
						descripcion="Refresco de naranja, helado o al clima"
						precio="1.00"
						categoria="bebida"
					/>
					<Product
						nombre="Coca Cola"
						descripcion="Refresco de cola, helado o al clima"
						precio="1.00"
						categoria="bebida"
					/>
					<Product
						nombre="Coca Cola"
						descripcion="Refresco de cola, helado o al clima"
						precio="1.00"
						categoria="bebida"
					/>
				</div>
			</section>
		</>
	);
}
