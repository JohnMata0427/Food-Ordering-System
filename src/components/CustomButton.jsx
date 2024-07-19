export default function CustomButton({ children, colorDesde, colorHasta, icono }) {
    return (
        <button className={`bg-gradient-to-r from-${colorDesde} to-${colorHasta}`}>
            <img src={icono} alt={icono} />
        </button>
    );
}