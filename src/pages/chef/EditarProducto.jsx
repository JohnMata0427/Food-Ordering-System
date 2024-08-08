import { CustomButton } from "@components/CustomButton";
import { useContext, useState } from "react";
import Alerta from "@components/Alerta";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function EditarProductoComponent() {
  const {id} = useParams()
  const [producto, setProducto] = useState({
  nombre:"",
	descripcion:"",
	precio:"",
	categoria:"",
	foto:
    {url:""},
	to:"",
  })
  const [mensaje, setMensaje] = useState({})

  useEffect(() => {
    const consultarProducto = async () => {
      try {
        const token = localStorage.getItem('token')
        const url = `${import.meta.env.VITE_BACKEND_URL}/producto/${id}`;
        const options = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`    
          }
        }
        const respuesta = await axios.get(url, options)
        setProducto(respuesta.data)
        console.log(respuesta);
      } catch (error) {
        console.log(error);
      } 
    }
    consultarProducto()
  }, [])
  const HandleSubmit = (second) => { third }
  const HandleChange = (second) => { third }
  
 
  return (
    <div>
      <form
        className="flex flex-col items-center w-[80vw] h-[100vh] justify-center"
        onSubmit={HandleSubmit}
        id="addproducto"
      >
        <div className="mt-32">
          <h1 className="text-3xl w-full text-center">EDITAR PRODUCTOS</h1>
        </div>
        <div className="w-full my-auto">
          <div className="flex justify-around w-full">
            <div>
              <div className="flex flex-col mb-9">
                <div className=" relative ">
                  <label htmlFor="">Nuevo nombre del Producto</label>
                  <input
                    type="text"
                    id="nombre_producto"
                    onChange={HandleChange}
                    className=" rounded-lg border-black flex-1 appearance-none border  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus "
                    name="pseudo"
                    value={producto.nombre}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-9">
                <div className=" relative ">
                  <label htmlFor="precio_producto">Nuevo precio Producto</label>
                  <input
                    type="text"
                    onChange={HandleChange}
                    id="precio_producto"
                    className=" rounded-lg border-black  flex-1 appearance-none border  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus "
                    name="pseudo"
                    value={producto.precio}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-9">
                <div className=" relative ">
                  <label htmlFor="precio_producto">Nuevo categoría del Producto</label>
                  <input
                    type="text"
                    onChange={HandleChange}
                    id="precio_producto"
                    className=" rounded-lg border-black  flex-1 appearance-none border  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus "
                    name="pseudo"
                    value={producto.categoria}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-9">
                <label htmlFor="descripcion_producto">
                  Nueva descripcion del Producto
                </label>
                <div className=" relative ">
                  <input
                    type="text"
                    id="descripcion_producto"
                    onChange={HandleChange}
                    className=" rounded-lg border-black flex-1 appearance-none border  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus "
                    name="pseudo"
                    value={producto.descripcion}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-9">
                <label htmlFor="descripcion_producto">
                  Cantidad 
                </label>
                <div className=" relative ">
                  <input
                    type="text"
                    id="cantidad"
                    onChange={HandleChange}
                    className=" rounded-lg border-black flex-1 appearance-none border  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus "
                    name="pseudo"
                    value={producto.cantidad}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className=" mr-auto">
                <h3 className=" text-xl text-start">Imagen Producto</h3>
              </div>
              <img src={producto.foto.url} className=" w-[40rem] h-[18rem] rounded-xl object-contain overflow-hidden"></img>
              <CustomButton
                texto="Subir"
                color="yellow"
                masEstilos="text-black gap-x-2 rounded-xl mt-4 mx-auto"
              >
                <svg
                  baseProfile="tiny"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="25px"
                >
                  <path d="M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zm.707-7l2.646-2.646a.502.502 0 000-.707.502.502 0 00-.707 0L12 11.293 9.354 8.646a.5.5 0 00-.707.707L11.293 12l-2.646 2.646a.5.5 0 00.707.708L12 12.707l2.646 2.646a.5.5 0 10.708-.706L12.707 12z" />
                </svg>
              </CustomButton>
            </div>
          </div>
        </div>
      </form>
      {mensaje.respuesta && (
        <Alerta exito={mensaje.exito}>{mensaje.respuesta}</Alerta>
      )}
    </div>
  );
}
