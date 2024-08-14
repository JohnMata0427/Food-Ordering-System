import { useNavigate } from "react-router-dom"

export default function ProductViewer({name , precio, foto , description , categoria , id }){  
  const navigate = useNavigate()
  return(
        <button onClick={() => navigate(`${id}`)} class="flex items-center justify-center ">
        <div class="p-4 w-80 h-full">
          <div class="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
            <div class="prod-title">
              <p class="text-2xl font-bold text-gray-900 uppercase">
               {name}
              </p>
              <p class="text-sm text-gray-400 uppercase">
                {description}
              </p>
            </div>
            <p class="mt-4 text-lg text-gray-900 dark:text-white">
                {categoria}
            </p>
            <div class="prod-img">
              <img
                src={foto.url}
                class=" object-contain object-center w-60 h-40"
              />
            </div>
            <div class="grid gap-10 prod-info">
              <div class="flex flex-col items-center justify-between text-gray-900 md:flex-row">
                <p class="text-xl font-bold">{precio}</p>
              </div>
            </div>
          </div>
        </div>
      </button>
    )
}