import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });
    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((p) => p.name === product.name);
            if (existing) {
                return prev.map((p) =>
                p.name === product.name ? { ...p, qty: p.qty + 1 } : p
                );
            }
            return [...prev, { ...product, qty: 1 }];
        });
    };
    const removeFromCart = (name) => {
        setCart((prev) => prev.filter((p) => p.name !== name));
    };
    const clearCart = () => setCart([]);
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}
export const useCart = () => useContext(CartContext);
