import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Food() {
  const categorias = [
    "Milanesa de Pollo",
    "Milanesa de Carne",
    "Pollo Broaster",
    "Camarón Apanado",
    "Chuleta",
  ];

  const GetFood = async () => {
    const respuesta = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/productos`
    );
    console.log(respuesta);
  };

  useEffect(() => {
    GetFood();
  }, []);

  return (
    <>
      <img
        className="w-full h-[700px]"
        src="/Comidas.png"
        alt="Fondo de Comidas"
      />
      <section className="flex flex-col">
        <h1 className="font-bold text-2xl text-center uppercase my-4">Menú</h1>
        <div className="flex sm:flex-row flex-col items-center justify-center gap-8">
          {categorias.map((categoria) => (
            <Link
              key={categoria}
              className="sm:w-1/4 w-3/5 hover:scale-105"
              to={`/categorias/${categoria.toLowerCase()}`}
            >
              <article className="bg-black text-white rounded-2xl">
                <h2 className="font-bold text-xl p-1.5 text-center">
                  {categoria}
                </h2>
                <div className="h-[200px]">
                  <img
                    className="size-full rounded-b-2xl "
                    src={`/${categoria}.png`}
                    alt=""
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
