// eslint-disable-next-line
const API_URL = 'https://melodic-centaur-2d31fb.netlify.app/.netlify/functions/server';

export async function getSortedProductsByPagination(
  category: string,
  sortBy: string,
  page: number,
  limit: number | string,
) {
  const response = await fetch(`${API_URL}/products?category=${category}&sort=${sortBy}&page=${page}&limit=${limit}`);

  return response.json();
}

export async function getProductsQuantity() {
  const response = await fetch(`${API_URL}/products/quantity`);

  return response.json();
}

export async function getProductById(phoneId: string) {
  const response = await fetch(`${API_URL}/products/${phoneId}`);

  return response.json();
}

export async function getProductByParameters(
  model: string,
  capacity: string,
  color: string,
) {
  const response = await fetch(`${API_URL}/products/parameters?model=${model}&capacity=${capacity}&color=${color}`);

  return response.json();
}

export async function getNewProducts() {
  const response = await fetch(`${API_URL}/products/new`);

  return response.json();
}

export async function getProductsByDiscount() {
  const response = await fetch(`${API_URL}/products/discount`);

  return response.json();
}

export async function getRecommendedProducts(phoneId: string) {
  const response = await fetch(`${API_URL}/products/${phoneId}/recommended`);

  return response.json();
}
