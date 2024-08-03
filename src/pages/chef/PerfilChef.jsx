import fondoPerfil from "@assets/ui/fondo-perfil.png";
import fotoPerfil from "@assets/ui/Samuel.png";
import { CustomButton } from "@components/CustomButton";
import { Link } from "react-router-dom";

export default function PerfilChef() {
	return (
		<section className="flex sm:flex-row flex-col justify-center m-8 gap-x-8">
			<div className="sm:h-[550px] relative">
				<img
					className="sm:h-full"
					src={fondoPerfil}
					alt="Foto de Perfil del Chef"
				/>
				<img
					className="absolute inset-0 my-auto"
					src={fotoPerfil}
					alt="Foto de Perfil del Chef"
				/>
			</div>

			<div className="flex flex-col justify-center items-center sm:w-3/5 w-full pl-6">
				<h1 className="text-7xl font-semibold mt-2 mb-7">Li Chang</h1>

				<div className="flex flex-col gap-y-8 items-center w-9/10">
					<div className="flex flex-col gap-y-4 w-full">
						<p>
							Chef Li Wei, nacido en Chengdu, es un maestro de la cocina china
							con más de 20 años de experiencia. Con formación en la Academia
							Culinaria de Beijing, ha trabajado en restaurantes prestigiosos en
							Beijing, Shanghai, Guangzhou y Hong Kong. Conocido por su dominio
							del Pato laqueado de Beijing y su habilidad en dim sum cantoneses,
							Li Wei combina técnicas tradicionales con innovaciones modernas,
							creando platos de fusión únicos. Actualmente, es el chef ejecutivo
							del aclamado restaurante "Dragón Imperial" en Shanghai, donde
							continúa deleitando a sus comensales con su pasión y creatividad
							culinaria.
						</p>

						<h3 className="text-2xl font-semibold font-aoboshi my-2">
							Especialidades
						</h3>

						<ul>
							<li>🍴 Dumplings de cerdo al vapor</li>
							<li>🍴 Baozi relleno de cerdo BBQ </li>
							<li>🍴 Siu Mai (dumplings abiertos de cerdo y camarón)</li>
						</ul>
					</div>
				</div>
				<Link to="/actualizar-perfil">
					<CustomButton
						color="yellow"
						texto="Actualizar Perfil"
						masEstilos="mt-8 gap-x-2"
					>
						<svg className="size-4" width="40" height="40" viewBox="0 0 40 40">
							<path
								className="fill-black group-hover:fill-[#DCB50E]"
								d="M5.28846 40H0V34.7115L29.8211 4.81635L35.1836 10.1798L5.28846 40ZM36.3192 9.03847L30.9615 3.68078L34.0058 0.7327C34.476 0.259624 35.1971 8.50305e-06 35.8654 8.50305e-06C36.1944 -0.000850969 36.5202 0.063453 36.8242 0.189209C37.1282 0.314965 37.4043 0.499682 37.6365 0.7327L39.2711 2.36732C39.5032 2.59927 39.687 2.87484 39.8121 3.17816C39.9372 3.48147 40.0011 3.80653 40 4.13462C40 4.8077 39.7394 5.52405 39.2673 5.99616L36.3192 9.03847Z"
							/>
						</svg>
					</CustomButton>
				</Link>
			</div>
		</section>
	);
}
