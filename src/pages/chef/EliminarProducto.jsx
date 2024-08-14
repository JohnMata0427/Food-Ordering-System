import { useEffect, useState } from "react";
import Product from "../../components/Product";
import ProductViewer from "../../components/ProductViewer";

export default function EliminarProducto() {
    const [dataProducts, setDataProducts] = useState([]);
    const getProducts = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/productos`,
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const dataJson = await response.json();
            setDataProducts(dataJson);
        } catch (error) {
            console.error(
                "There has been a problem with your fetch operation:",
                error,
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
              product.categoria.toLowerCase().includes(category.toLowerCase()),
          )
        : dataProducts;

    const buscarNombre = {};

    return (
        <div>
            <div
                className="flex h-[100vh] w-[80vw] flex-col items-center justify-center"
                id="addproducto"
            >
                <div className="mt-32">
                    <h1 className="w-full text-center text-3xl">
                        ELIMINAR PRODUCTOS
                    </h1>
                </div>
                <div className="my-auto w-full">
                    <div className="flex w-full justify-center">
                        <div className="relative w-full">
                            <div className="w-full p-24">
                                <div class="relative mr-auto flex h-[20%] w-[40%] items-center justify-center rounded-2xl border border-black">
                                    <input
                                        type="text"
                                        id="rounded-email"
                                        onChange={handleInputChange}
                                        class="border-trasparent w-full flex-1 appearance-none rounded-2xl bg-white px-4 py-2 text-base text-gray-700 placeholder-black focus:border-transparent focus:border-white focus:outline-none focus:ring-white"
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
                                <div className="relative flex h-[60vh] overflow-x-scroll">
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
