import { useNavigate } from 'react-router-dom';

export default function ProductViewer({
  name,
  precio,
  foto,
  description,
  categoria,
  id,
}) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`${id}`)}
      className="flex items-center justify-center"
    >
      <div className="h-full w-80 p-4">
        <div className="card flex flex-col justify-center rounded-lg bg-white p-10 shadow-2xl">
          <div className="prod-title">
            <p className="text-2xl font-bold uppercase text-gray-900">{name}</p>
            <p className="text-sm uppercase text-gray-400">{description}</p>
          </div>
          <p className="mt-4 text-lg text-gray-900 dark:text-white">
            {categoria}
          </p>
          <div className="prod-img">
            <img
              src={foto.url}
              className="h-40 w-60 object-contain object-center"
            />
          </div>
          <div className="prod-info grid gap-10">
            <div className="flex flex-col items-center justify-between text-gray-900 md:flex-row">
              <p className="text-xl font-bold">{precio}</p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
