import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function Drinks() {
  const categorias = ["Pepsi", "Agua Cielo", "Frutaris", "Fanta", "Coca Cola"];

  const GetDrinks = async () => {
    const respuesta = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/productos`
    );
    console.log(respuesta);
  };

  useEffect(() => {
    GetDrinks();
  }, []);

  return (
    <>
      <img
        className="w-full h-[700px]"
        src="/Bebidas.png"
        alt="Fondo de Bebidas"
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
                <div className="h-[250px]">
                  <img
                    className="size-full rounded-b-2xl"
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
