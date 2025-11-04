import ProductCard from "../ProductCard";
import { useRef } from "react";

function ProductSection({ title, products = [] }) {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    scrollRef.current.scrollBy({
      left: offset,
      behavior: "smooth"
    });
  };

  return (
    <section className="carousel-container w-full">
        <h2 className="text-center text-3xl font-bold mb-8">{title}</h2>
        <div className="relative flex items-center">
            <button
                onClick={() => scroll(-300)}
                className="carousel-btn absolute left-0 bg-[#1E2A38] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
            >
            ‹
            </button>
            <div
                ref={scrollRef}
                onWheel={(e) => scroll(e.deltaY * 1.2)}
                className="flex gap-6 overflow-hidden no-scrollbar px-12"
            >
                {products.slice(0, 8).map((product, index) => (
                <div key={index} className="min-w-[200px]">
                    <ProductCard {...product} />
                </div>
                ))}
            </div>
            <button
                onClick={() => scroll(300)}
                className="carousel-btn absolute right-0 bg-[#1E2A38] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
            >
                ›
            </button>
        </div>
    </section>
    );
}

export default ProductSection;
