export default ({ children, exito }) => {
    return (
        <div
            className={`flex items-center rounded-lg border-l-4 p-4 text-sm ${
                exito
                    ? "border-green-500 bg-green-50 text-green-500"
                    : "border-red-500 bg-red-50 text-red-500"
            }`}
        >
            {exito ? (
                <svg className="size-5" fill="none" viewBox="0 0 40 40">
                    <path
                        className="fill-current text-green-500"
                        d="M20 3.8a16.3 16.3 0 1 0 0 32.5 16.3 16.3 0 0 0 0-32.5Zm8.5 10.8L18 27a1.2 1.2 0 0 1-1 .4 1.3 1.3 0 0 1-1-.4l-4.4-5a1.2 1.2 0 1 1 1.8-1.7l3.6 4 9.5-11.5a1.2 1.2 0 0 1 2 1.7Z"
                    />
                </svg>
            ) : (
                <svg className="size-5" fill="none" viewBox="0 0 30 30">
                    <path
                        className="fill-current text-red-500"
                        d="M15 0a15 15 0 1 0 0 30 15 15 0 0 0 0-30Zm5.4 18.8a1.2 1.2 0 1 1-1.6 1.6L15 16.6l-3.8 3.8a1.2 1.2 0 0 1-1.6-1.6l3.8-3.8-3.8-3.8a1.2 1.2 0 0 1 1.6-1.6l3.8 3.8 3.8-3.8a1.2 1.2 0 0 1 1.6 1.6L16.6 15l3.8 3.8Z"
                    />
                </svg>
            )}
            <span className="ml-3">{children}</span>
        </div>
    );
};
