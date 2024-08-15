export function CustomButton({
    children,
    texto,
    color = "black",
    hover = "white",
    masEstilos,
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
        >
            <span className={`font-semibold ${variantsColor[color][1]}`}>
                {texto}
            </span>
            {children}
            <span
                className={`absolute bottom-0 left-1/2 -z-[1] h-full w-0 -translate-x-1/2 duration-300 ease-in-out group-hover:w-[105%] group-focus:w-[105%] ${variantsHoverColor[hover]}`}
            ></span>
        </button>
    );
}
