//🐢 SECCIÓN API CLIENT (configurable en un solo lugar)
const BASE_URL = "http://161.35.104.211:8000"; // ajustable

async function http(path, options = {}) {
    const url = `${BASE_URL}${path}`;
    const res = await fetch(url, {
        headers: { "Accept": "application/json" },
        ...options,
    });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return res.json();
}

// 🚧 Ajustá estos paths según la documentación real
export async function getProducts() {
    // Ejemplos tentativos: "/products" o "/api/products" o "/productos"
    return http("/products");
}

export async function getFeatured() {
    // Ej: "/products/featured" o "/destacados"
    return http("/products/featured");
}

export async function getCategories() {
    // Ej: "/categories" o "/api/categories"
    return http("/categories");
}
