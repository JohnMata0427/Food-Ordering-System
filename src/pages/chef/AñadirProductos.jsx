import FormProductos from "../../components/FormProductos";

export default function AddProducts() {
    return (
        <section className="flex w-full flex-col items-center gap-y-8 border-t-8 border-secondary p-8">
            <h1 className="text-center text-3xl">Agregar Producto</h1>
            <FormProductos />
        </section>
    );
}
