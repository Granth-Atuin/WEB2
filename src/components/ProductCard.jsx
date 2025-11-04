import { useCart } from "../context/CartContext";

function ProductCard({ name, price, img }) {
    const { addToCart } = useCart();
    return (
        <div className="w-44 h-64 bg-slate-800 rounded-lg p-3 shadow-md flex flex-col hover:scale-105 transition">
            <div className="w-full h-24 bg-slate-700 rounded mb-2 overflow-hidden flex items-center justify-center">
                {img ? (
                    <img src={img} alt={name} className="object-contain w-full h-full" />
                ) : (
            <span className="text-slate-300 text-xs">IMG</span>
            )}
            </div>
            <h3 className="h-10 text-sm font-semibold leading-tight overflow-hidden text-ellipsis">
                {name}
            </h3>
            <p className="text-teal-300 font-bold text-sm">${price}</p>
            <button
                onClick={() => addToCart({ name, price, img })}
                className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 rounded"
            >
                Agregar
            </button>
        </div>
    );
}

export default ProductCard;
