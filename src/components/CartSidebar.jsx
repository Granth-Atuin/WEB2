function CartSidebar({ isOpen, onClose }) {
    return (
        <div
            className={`cart-panel fixed top-0 right-0 h-full w-80 bg-[#111827] shadow-xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <div className="flex justify-between items-center p-4 text-lg font-bold">
                <span>🛒 Carrito</span>
                <button onClick={onClose} className="text-2xl">✖</button>
            </div>
            <div className="px-4 text-sm">
                <p>Papas Lays Clásicas</p>
                <p className="text-green-400">9 × $1200</p>
            </div>
            <button className="mt-4 ml-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
                Vaciar carrito
            </button>
        </div>
    );
}

export default CartSidebar;
