import { Outlet, useNavigate } from "react-router-dom";

export default function ChefLayout() {
  const navigate = useNavigate()
  return (
    <div className="flex">

    <div className="flex flex-col w-[20vw] bg-black h-[100vh]">
      <div className="flex  items-center justify-center">
        <img className="h-10" src="/icons/rocket.svg" />
        <span className="text-gray-600  ml-4 text-2xl font-bold">Tail-Kit</span>
      </div>
      <nav className="mt-10 px-6 ">
        <button
          className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors  duration-200  text-white ounded-lg "
          onClick={()=> navigate("/chef/add-producto")}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height={"25px"}
            >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 100 16 8 8 0 000-16z"
              clipRule="evenodd"
              />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M13 7a1 1 0 10-2 0v4H7a1 1 0 100 2h4v4a1 1 0 102 0v-4h4a1 1 0 100-2h-4V7z"
              clipRule="evenodd"
            />
          </svg>
          <span className="mx-4 text-lg font-normal">Añadir Productos</span>
          <span className="flex-grow text-right"></span>
        </button>

        <button
          className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors  duration-200  text-white  rounded-lg "
          onClick={()=> navigate("/chef/editar-producto")}

          >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height={"25px"}
            >
            <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
          <span className="mx-4 text-lg font-normal">Editar Productos</span>
          <span className="flex-grow text-right"></span>
        </button>
        <button
          className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors   duration-200  text-white  rounded-lg "
          onClick={()=> navigate("/chef/eliminar-producto")}
          >
          <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height={"25px"}
    >
      <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z" />
    </svg>
          <span className="mx-4 text-lg font-normal">Eliminar Productos</span>
          <span className="flex-grow text-right"></span>
        </button>
      </nav>

    </div>
      <div className=" border-s-[10px] border-t-[10px] border-orange-600">
        <Outlet />
      </div>
      </div>
  );
}
