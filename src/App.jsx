import Navbar from "./components/navbar";
import ProductSection from "./components/sections/ProductSection";
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const featuredProducts = [
    { name: "Papas Lays Clásicas", price: 1200 },
    { name: "Coca-Cola 500ml", price: 700 },
    { name: "Pepsi Lata", price: 500 },
    { name: "Sprite 500ml", price: 650 },
    { name: "Galletitas Pepas Bagley", price: 800 },
    { name: "Chocolinas", price: 900 },
  ];

  const catalogProducts = [
    { name: "Alfajor Milka Oreo", price: 390 },
    { name: "Papas Lays Clásicas", price: 1200 },
    { name: "Coca-Cola 500ml", price: 700 },
    { name: "Pepsi Lata", price: 500 },
    { name: "Sprite 500ml", price: 650 },
    { name: "Galletitas Pepas Bagley", price: 800 },
  ];

  return (
    <div className="bg-[#0D1117] min-h-screen text-white overflow-y-auto flex flex-col">
      <Navbar openCart={() => setCartOpen(true)} />

      <main className="flex-1 p-6 space-y-20">
        <ProductSection title="Destacados" products={featuredProducts} />
        <ProductSection title="Catálogo" products={catalogProducts} />
      </main>

      <Footer />

      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}

export default App;
