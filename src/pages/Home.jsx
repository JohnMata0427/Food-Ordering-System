import { Link } from "react-router-dom";

export default function Home() {
	const categorias = ["Comidas", "Bebidas", "Postres"];

	return (
		<>
			<img src="fondo-inicio.png" alt="Fondo de Inicio" />
			<section className="flex flex-col">
				<h1 className="font-bold text-2xl text-center uppercase my-4">Menú</h1>
				<div className="flex sm:flex-row flex-col items-center justify-center gap-8">
					{categorias.map((categoria) => (
						<Link key={categoria} className="sm:w-1/4 w-3/5 hover:scale-105" to={`/categorias/${categoria.toLowerCase()}`}>
							<article
								className="bg-black text-white rounded-2xl"
							>
								<h2 className="font-bold text-xl p-1.5 text-center">
									{categoria}
								</h2>
								<img
									className="size-full rounded-b-2xl"
									src={`${categoria}.png`}
									alt=""
								/>
							</article>
						</Link>
					))}
				</div>
			</section>
		</>
	);
}
