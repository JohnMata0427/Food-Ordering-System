import { CustomButton } from "@components/CustomButton";

export default function DetallePedido() {
    return (
        <>
            <h1 className="my-4 text-center text-2xl font-bold uppercase">
                DETALLES DE PEDIDOS
            </h1>
            <div className="mb-4 mt-3 flex items-center gap-x-10">
                <CustomButton
                    texto="Regresar"
                    color="yellow"
                    masEstilos="group justify-center w-1/6 gap-x-2 rounded-xl"
                >
                    <svg
                        width="20"
                        viewBox="0 0 417 417"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="group-hover:fill-primary"
                            d="M0.39209 208.154C0.39209 323.024 93.5221 416.154 208.392 416.154C323.262 416.154 416.392 323.024 416.392 208.154C416.392 93.284 323.262 0.154053 208.392 0.154053C93.5221 0.154053 0.39209 93.284 0.39209 208.154ZM213.042 116.794C214.534 118.274 215.72 120.033 216.532 121.971C217.344 123.91 217.766 125.989 217.775 128.09C217.783 130.192 217.377 132.274 216.581 134.219C215.784 136.164 214.612 137.932 213.132 139.424L160.812 192.154H294.392C298.636 192.154 302.705 193.84 305.706 196.84C308.706 199.841 310.392 203.911 310.392 208.154C310.392 212.398 308.706 216.467 305.706 219.468C302.705 222.468 298.636 224.154 294.392 224.154H160.812L213.132 276.884C214.612 278.377 215.783 280.147 216.579 282.093C217.375 284.039 217.78 286.122 217.771 288.225C217.762 290.327 217.338 292.407 216.525 294.346C215.712 296.284 214.525 298.044 213.032 299.524C211.539 301.004 209.769 302.175 207.823 302.971C205.877 303.767 203.794 304.172 201.691 304.163C199.589 304.154 197.509 303.73 195.57 302.917C193.632 302.104 191.872 300.917 190.392 299.424L111.002 219.424C108.028 216.427 106.359 212.376 106.359 208.154C106.359 203.932 108.028 199.881 111.002 196.884L190.392 116.884C191.872 115.389 193.633 114.201 195.573 113.387C197.513 112.573 199.595 112.15 201.698 112.141C203.802 112.133 205.887 112.54 207.834 113.338C209.78 114.136 211.55 115.311 213.042 116.794Z"
                            fill="black"
                        />
                    </svg>
                </CustomButton>
            </div>

            <div className="flex flex-col gap-x-10">
                <div className="flex items-center">
                    <h2 className="font-bold">Numero de pedido:</h2>
                    <span className="ml-2">12345</span>
                </div>
                <div className="flex items-center">
                    <h2 className="font-bold">Fecha:</h2>
                    <span className="ml-2">03/08/2024</span>
                </div>
                <div className="flex items-center">
                    <h2 className="font-bold">Estado:</h2>
                    <span className="ml-2">Entregado</span>
                </div>
                <div className="flex items-center">
                    <h2 className="font-bold">Contacto:</h2>
                    <a className="ml-2" href="tel:+593992664340">
                        +593 992664340
                    </a>
                </div>
                <div className="flex items-center">
                    <h2 className="font-bold">Descripción:</h2>
                    <span className="ml-2">Milanesa de Pollo</span>
                </div>
            </div>
        </>
    );
}
