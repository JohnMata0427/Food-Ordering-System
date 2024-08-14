import { Link } from "react-router-dom";

export default function Home() {
    const categorias = ["Comidas", "Bebidas", "Postres"];

    return (
        <>
            <img src="fondo-inicio.png" alt="Fondo de Inicio" />
            <section className="flex flex-col">
                <h1 className="my-4 text-center text-2xl font-bold uppercase">
                    Menú
                </h1>
                <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
                    {categorias.map((categoria) => (
                        <Link
                            key={categoria}
                            className="w-3/5 hover:scale-105 sm:w-1/4"
                            to={`/categorias/${categoria.toLowerCase()}`}
                        >
                            <article className="rounded-2xl bg-black text-white">
                                <h2 className="p-1.5 text-center text-xl font-bold">
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
