import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DescripcionProducto() {
	const { id } = useParams();
	const [product, setProduct] = useState({});

    const getProduct = async () => {
        setProduct(
			(
				await axios.get(
					`${import.meta.env.VITE_BACKEND_URL}/productos/${id}`
				)
			).data
		);
    }

	useEffect(() => {
		getProduct();
        console.log(product);
	}, []);

	return (
		<section className="w-full">
			<article>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h1>{product.nombre}</h1>
                    <p>{product.descripcion}</p>
                    <span>{product.precio}</span>
                </div>
            </article>
		</section>
	);
}
