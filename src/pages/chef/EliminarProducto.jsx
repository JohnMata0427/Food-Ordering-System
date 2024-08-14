import { useEffect, useState } from "react";
import Product from "../../components/Product";
import ProductViewer from "../../components/ProductViewer";

export default function EliminarProducto() {
  const [dataProducts, setDataProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/productos`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dataJson = await response.json();
      setDataProducts(dataJson);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };
  const [category, setCategory] = useState("");

  const handleInputChange = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    getProducts();
    console.log(dataProducts);
  }, []);
  const filteredProducts = category
    ? dataProducts.filter((product) =>
        product.categoria.toLowerCase().includes(category.toLowerCase())
      )
    : dataProducts;

  const buscarNombre = {};

  return (
    <div>
      <div
        className="flex flex-col items-center w-[80vw] h-[100vh] justify-center"
        id="addproducto"
      >
        <div className="mt-32">
          <h1 className="text-3xl w-full text-center">ELIMINAR PRODUCTOS</h1>
        </div>
        <div className="w-full my-auto">
          <div className="flex justify-center w-full">
            <div className="relative w-full">
              <div className="w-full p-24">
                <div class="mr-auto w-[40%] relative border-black border rounded-2xl flex justify-center items-center h-[20%]">
                  <input
                    type="text"
                    id="rounded-email"
                    onChange={handleInputChange}
                    class="border-trasparent rounded-2xl focus:border-white flex-1 appearance-none placeholder-black  w-full py-2 px-4 bg-white text-gray-700 text-base focus:outline-none  focus:ring-white focus:border-transparent"
                    placeholder="Buscar Producto..."
                  />
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="25px"
                    className="m-3"
                  >
                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
                  </svg>
                </div>
                <div className="h-[60vh] relative flex overflow-x-scroll">
                  {filteredProducts.map((product) => (
                    <ProductViewer
                      id={product._id}
                      key={product.id} 
                      name={product.nombre}
                      precio={product.precio}
                      foto={product.foto}
                      description={product.descripcion}
                      categoria={product.categoria}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
