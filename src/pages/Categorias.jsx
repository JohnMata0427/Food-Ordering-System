import { Link } from "react-router-dom";
import Product from "../components/Product";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Categorias() {
	const [productos, setProductos] = useState([]);

	const getProducts = async () =>
		setProductos(
			(await axios.get(`${import.meta.env.VITE_BACKEND_URL}/productos`))
				.data
		);

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<>
			<img
				className="w-full"
				src="https://t4.ftcdn.net/jpg/03/27/03/53/360_F_327035327_SOn72QASojS0rl65XDrq4iYhcb9r6pMO.jpg"
				alt="Fondo de Inicio"
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
					{productos
						.filter((producto) => producto.categoria === "Comidas")
						.map((producto) => (
							<Link
								className="flex justify-center items-center"
								to={`/producto/${producto._id}`}
							>
								<Product
									key={producto.nombre}
									nombre={producto.nombre}
									descripcion={producto.descripcion}
									precio={producto.precio}
									categoria="comida"
									imageUrl={producto.foto.url}
								/>
							</Link>
						))}
				</div>
			</section>

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
					{productos
						.filter((producto) => producto.categoria === "Bebidas")
						.map((producto) => (
							<Link
								className="flex justify-center items-center"
								to={`/producto/${producto._id}`}
							>
								<Product
									key={producto.nombre}
									nombre={producto.nombre}
									descripcion={producto.descripcion}
									precio={producto.precio}
									categoria="bebida"
									imageUrl={producto.foto.url}
								/>
							</Link>
						))}
				</div>
			</section>

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
					{productos
						.filter((producto) => producto.categoria === "Snacks")
						.map((producto) => (
							<Link
								className="flex justify-center items-center"
								to={`/producto/${producto._id}`}
							>
								<Product
									key={producto.nombre}
									nombre={producto.nombre}
									descripcion={producto.descripcion}
									precio={producto.precio}
									categoria="snack"
									imageUrl={producto.foto.url}
								/>
							</Link>
						))}
				</div>
			</section>
		</>
	);
}
