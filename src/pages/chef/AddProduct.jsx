import { CustomButton } from "@components/CustomButton";
import { useContext, useState } from "react";
import Alerta from "@components/Alerta";
import axios from "axios";

export default function AddProductComponent() {
  const [mensaje, setMensaje] = useState({});
  const [imageUrl, setImageUrl] = useState("")
  

//   const AddProductoAsync = async (formData) => {
    
// /*
//     const solicitud = await fetch(
//       `${import.meta.env.VITE_BACKEND_URL}/productos/registro`,
//       {
//         method:"POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body:JSON.stringify(formData),
//         mode:"cors"

//       }
//     );
//     const respuesta = await solicitud.json();
//     return respuesta;*/
//   };

  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    cantidad: "",
  
  });

  const HandleChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value });
  };



  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const url = `${import.meta.env.VITE_BACKEND_URL}/productos/registro`;

      const formData = new FormData()
      formData.append('nombre', form.nombre)
      formData.append('precio', form.precio)
      formData.append('descripcion', form.descripcion)
      formData.append('cantidad', form.cantidad)
      formData.append('image', form.imagen)


      const options = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      };
  
      const respuesta = await axios.post(url, formData, options);
      console.log(respuesta);
  
    } catch (error) {
      console.log(error);
    }
  };


  const HandleFileChange =(e)=> {
    const file = e.target.files[0]
    setForm({...form, imagen: file})
  }
  

  return (
    <div>
      <form
        className="flex flex-col items-center w-[80vw] h-[100vh] justify-center"
        onSubmit={HandleSubmit}
        id="addproducto"
      >
        <div className="mt-10">
          <h1 className="text-3xl w-full text-center">Agregar Producto</h1>
        </div>
        <div className="w-full my-auto">
          <div className="flex justify-around w-full">
            <div>
              <div className="flex flex-col mb-9">
                <div className=" relative ">
                  <label htmlFor="">Nombre Producto</label>
                  <input
                    type="text"
                    id="nombre_producto"
                    onChange={HandleChange}
                    className=" rounded-lg border-black flex-1 appearance-none border  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus "
                    name="pseudo"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-9">
                <div className=" relative ">
                  <label htmlFor="precio_producto">Precio Producto</label>
                  <input
                    type="text"
                    onChange={HandleChange}
                    id="precio_producto"
                    className=" rounded-lg border-black  flex-1 appearance-none border  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus "
                    name="pseudo"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-9">
                <label htmlFor="descripcion_producto">
                  Descripcion Producto
                </label>
                <div className=" relative ">
                  <input
                    type="text"
                    id="descripcion_producto"
                    onChange={HandleChange}
                    className=" rounded-lg border-black flex-1 appearance-none border  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus "
                    name="pseudo"
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
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <input type="file" onChange={HandleFileChange}/>
              <div className=" mr-auto">
                <h3 className=" text-xl text-start">Imagen Producto</h3>
              </div>
              <div className="bg-gray-500 w-[40rem] h-[18rem] rounded-xl">
                {imageUrl && <img src={imageUrl} alt="Imagen del Producto"/>}
              </div>
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
