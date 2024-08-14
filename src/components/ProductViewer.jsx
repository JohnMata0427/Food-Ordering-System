import { useNavigate } from "react-router-dom";

export default function ProductViewer({
    name,
    precio,
    foto,
    description,
    categoria,
    id,
}) {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate(`${id}`)}
            class="flex items-center justify-center"
        >
            <div class="h-full w-80 p-4">
                <div class="card flex flex-col justify-center rounded-lg bg-white p-10 shadow-2xl">
                    <div class="prod-title">
                        <p class="text-2xl font-bold uppercase text-gray-900">
                            {name}
                        </p>
                        <p class="text-sm uppercase text-gray-400">
                            {description}
                        </p>
                    </div>
                    <p class="mt-4 text-lg text-gray-900 dark:text-white">
                        {categoria}
                    </p>
                    <div class="prod-img">
                        <img
                            src={foto.url}
                            class="h-40 w-60 object-contain object-center"
                        />
                    </div>
                    <div class="prod-info grid gap-10">
                        <div class="flex flex-col items-center justify-between text-gray-900 md:flex-row">
                            <p class="text-xl font-bold">{precio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    );
}
