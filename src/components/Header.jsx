import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="flex justify-between items-center w-full bg-black border-b-4 border-b-red-700 py-2 px-4">
			<nav className="flex items-center gap-x-16">
				<img className="w-auto h-12" src="logo-con-texto.png" alt="Logo" />
				<ul className="flex gap-x-8 text-white">
					<li>
						<Link to="/home">Inicio</Link>
					</li>
					<li>
						<Link to="/categorias">Categorias</Link>
					</li>
					<li>
						<Link to="/ordernar">Ordenar</Link>
					</li>
					<li>
						<Link to="/contacto">Contacto</Link>
					</li>
				</ul>
			</nav>
			<div className="flex items-center justify-end gap-x-4">
				<div className="relative">
					<input
						className="py-1.5 px-4 rounded-2xl w-96"
						type="search"
						placeholder="Buscar..."
					/>
					<svg
						className="absolute size-4 inset-y-0 my-auto right-4"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							fill="#000"
							d="M19.694 17.992 15.16 13.46a8.376 8.376 0 0 0 1.678-5.04C16.838 3.777 13.061 0 8.42 0S0 3.777 0 8.42c0 4.642 3.777 8.418 8.42 8.418a8.376 8.376 0 0 0 5.039-1.678l4.534 4.534a1.205 1.205 0 0 0 1.7-1.701ZM2.404 8.42a6.014 6.014 0 1 1 6.014 6.014 6.02 6.02 0 0 1-6.014-6.014Z"
						/>
					</svg>
				</div>
				<Link to="/perfil" className="text-white flex items-center gap-x-2 p-2">
					<svg className="size-7" viewBox="0 0 50 50">
						<path
							className="fill-white group-hover:fill-black"
							d="M24.97 4.69A20.03 20.03 0 0 0 4.69 24.97 20.06 20.06 0 0 0 24.4 44.69 20.02 20.02 0 0 0 44.68 24.4 20.05 20.05 0 0 0 24.97 4.69Zm12.15 31.46a.38.38 0 0 1-.59-.03 11.95 11.95 0 0 0-3.11-2.84 16.33 16.33 0 0 0-8.73-2.44c-3.19 0-6.29.87-8.74 2.44-1.2.75-2.25 1.72-3.1 2.84a.38.38 0 0 1-.6.03 16.86 16.86 0 0 1-4.49-11.17A17.03 17.03 0 0 1 24.65 7.76a16.93 16.93 0 0 1 12.47 28.4Z"
						/>
						<path
							className="fill-white group-hover:fill-black"
							d="M25 14.06c-1.93 0-3.67.72-4.9 2.04a6.62 6.62 0 0 0-1.72 5.07c.28 3.83 3.25 6.95 6.62 6.95s6.33-3.12 6.62-6.95a6.56 6.56 0 0 0-1.73-5.06A6.63 6.63 0 0 0 25 14.06Z"
						/>
					</svg>
					<span>Perfil</span>
				</Link>
			</div>
		</header>
	);
}
