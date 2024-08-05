import { useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Snacks() {
	const [snacks, setSnacks] = useState([]);

	const getSnacks = async () => {
		setSnacks(
			(
				await axios.get(
					`${import.meta.env.VITE_BACKEND_URL}/productos/Snacks`
				)
			).data
		);
	};

	useEffect(() => {
		getSnacks();
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

				<div
					className="grid place-content-center px-10 py-5 w-full gap-x-4 gap-y-8"
					style={{
						gridTemplateColumns:
							"repeat(auto-fit, minmax(400px, 1fr))",
					}}
				>
					{snacks.map((snack, index) => (
						<Link to={`/producto/${snack._id}`}>
							<Product
								key={index}
								nombre={snack.nombre}
								descripcion={snack.descripcion}
								precio={snack.precio}
								categoria="snack"
								imageUrl={snack.foto.url}
							/>
						</Link>
					))}
				</div>
			</section>
		</>
	);
}
