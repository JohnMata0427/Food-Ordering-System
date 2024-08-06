import { useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Food() {
	const [food, setFood] = useState([]);

	const getFood = async () => {
		setFood(
			(
				await axios.get(
					`${import.meta.env.VITE_BACKEND_URL}/productos/Comidas`
				)
			).data
		);
	};

	useEffect(() => {
		getFood();
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
				<div
					className="grid place-content-center px-10 py-5 w-full gap-x-4 gap-y-8"
					style={{
						gridTemplateColumns:
							"repeat(auto-fit, minmax(400px, 1fr))",
					}}
				>
					{food.map((food) => (
						<div
							key={food._id}
							className="flex justify-center items-center"
						>
							<Product
								nombre={food.nombre}
								descripcion={food.descripcion}
								precio={food.precio}
								categoria="comida"
								imageUrl={food.foto.url}
								to={`/producto/${food._id}`}
							/>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
