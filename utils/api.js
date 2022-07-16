export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function getCategories() {
  const categories = await fetchAPI("/categorias?populate=imagen");
  return categories;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export async function getSubcategory(slug) {
  const capitalizedSlug = capitalize(slug);
  const { data, meta } = await fetchAPI(
    `/subcategorias?filters[categoria][Nombre][$eq]=${capitalizedSlug}&populate=imagen`
  );
  return [data, meta, capitalizedSlug];
}

export async function getProducts() {
  const products = await fetchAPI("/products");
  return products;
}

export async function getProduct(slug) {
  const products = await fetchAPI(`/products?slug=${slug}`);
  return products?.[0];
}
