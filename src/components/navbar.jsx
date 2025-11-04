import { useCart } from "../context/CartContext";
import { useState } from "react";
import CartSidebar from "./CartSidebar";

function Navbar() {
    const { cart } = useCart();
    const [open, setOpen] = useState(false);
    const totalQty = cart.reduce((acc, x) => acc + x.qty, 0);

    return (
        <>
        <nav className="bg-slate-900 px-6 py-4 flex justify-between items-center border-b border-slate-700">
            <h1 className="text-xl font-bold flex items-center gap-2">🛍️ Mi Tienda</h1>
            <button
                onClick={() => setOpen(true)}
                className="relative bg-slate-700 px-3 py-2 rounded hover:bg-slate-600"
            >
                🛒 Carrito
                {totalQty > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-2">
                    {totalQty}
                </span>
                )}
            </button>
        </nav>
        <CartSidebar open={open} setOpen={setOpen} />
    </>
    );
}

export default Navbar;
