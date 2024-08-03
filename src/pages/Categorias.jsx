import { Link } from "react-router-dom";

export default function Categorias() {
  const categorias = [
    "Milanesa de Pollo",
    "Milanesa de Carne",
    "Pollo Broaster",
    "Camarón Apanado",
    "Chuleta",
  ];
  const categorias2 = ["Pepsi", "Agua Cielo", "Frutaris", "Fanta", "Coca Cola"];
  const categorias3 = [
    "Galletas Amor",
    "Pipas",
    "Pastelitos",
    "Papas",
    "Yuca Frita",
  ];

  return (
    <>
      <img src="/fondo-inicio.png" alt="Fondo de Inicio" />
      <section className="flex flex-col">
        <h1 className="font-bold text-2xl text-center uppercase my-4">Menú</h1>
        <h1 className="font-bold text-2xl text-center uppercase my-4">
          Comidas
        </h1>
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

      <section className="flex flex-col">
        <h1 className="font-bold text-2xl text-center uppercase my-4">
          Bebidas
        </h1>
        <div className="flex sm:flex-row flex-col items-center justify-center gap-8">
          {categorias2.map((categoria) => (
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

      <section className="flex flex-col">
        <h1 className="font-bold text-2xl text-center uppercase my-4">
          Postres
        </h1>
        <div className="flex sm:flex-row flex-col items-center justify-center gap-8">
          {categorias3.map((categoria) => (
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
