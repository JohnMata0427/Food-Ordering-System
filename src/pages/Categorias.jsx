import { Link } from "react-router-dom";
import Product from "../components/Product";

export default function Categorias() {
	const categorias = [
		"Milanesa de Pollo",
		"Milanesa de Carne",
		"Pollo Broaster",
		"Camarón Apanado",
		"Chuleta",
	];
	const categorias2 = [
		"Pepsi",
		"Agua Cielo",
		"Frutaris",
		"Fanta",
		"Coca Cola",
	];
	const categorias3 = [
		"Galletas Amor",
		"Pipas",
		"Pastelitos",
		"Papas",
		"Yuca Frita",
	];

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
