export function CustomButton({
    children,
    texto,
    cargando = false,
    color = "black",
    hover = "white",
    masEstilos,
    onClick,
}) {
    const variantsColor = {
        black: [
            "bg-black border-black",
            "group-hover:text-black focus:text-black",
            "group-hover:fill-black",
        ],
        yellow: [
            "bg-primary border-primary",
            "group-hover:text-primary focus:text-primary",
            "group-hover:fill-primary",
        ],
        white: [
            "bg-white border-white",
            "group-hover:text-white focus:text-white",
            "group-hover:fill-white",
        ],
        red: [
            "bg-red-700 border-red-700",
            "group-hover:text-red-700 focus:text-red-700",
            "group-hover:fill-red-700",
        ],
    };

    const variantsHoverColor = {
        white: "bg-white",
        black: "bg-black",
    };

    return (
        <button
            className={`group relative z-10 inline-flex h-11 select-none items-center justify-center overflow-hidden rounded-md border-2 border-solid px-6 py-0 text-base tracking-wide outline-0 duration-300 ease-in-out ${variantsColor[color][0]} ${masEstilos}`}
            onClick={onClick}
        >
            {!cargando ? (
                <>
                    <span
                        className={`font-semibold ${variantsColor[color][1]}`}
                    >
                        {texto}
                    </span>
                    {children}
                </>
            ) : (
                <svg
                    aria-hidden="true"
                    role="status"
                    className={`ml-3 inline h-4 w-4 animate-spin text-black`}
                    viewBox="0 0 100 101"
                    fill="none"
                >
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                    />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                    />
                </svg>
            )}
            <span
                className={`absolute bottom-0 left-1/2 -z-[1] h-full w-0 -translate-x-1/2 duration-300 ease-in-out group-hover:w-[105%] group-focus:w-[105%] ${variantsHoverColor[hover]}`}
            ></span>
        </button>
    );
}
