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
					`${import.meta.env.VITE_BACKEND_URL}/productos/Bebidas`
				)
			).data
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
				<div className="bg-black text-white font-bold text-2xl text-center uppercase my-4">
					<h1>Bebidas</h1>
				</div>

				<div
					className="grid place-content-center px-10 py-5 w-full gap-x-4 gap-y-8"
					style={{
						gridTemplateColumns:
							"repeat(auto-fit, minmax(400px, 1fr))",
					}}
				>
					{drinks.map((drink) => (
						<div className="flex justify-center items-center">
							<Product
								key={drink._id}
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
