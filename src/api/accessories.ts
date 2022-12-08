// eslint-disable-next-line
const API_URL = 'https://melodic-centaur-2d31fb.netlify.app/.netlify/functions/server';

export async function getAccessoriesByPagination(
  sortBy: string,
  page: number,
  limit: number | string,
) {
  const response = await fetch(`${API_URL}/accessories?sort=${sortBy}&page=${page}&limit=${limit}`);

  return response.json();
}

export async function getAccessoryById(accessoryId: string) {
  const response = await fetch(`${API_URL}/accessories/${accessoryId}`);

  return response.json();
}

export async function getAccessoryByParameters(
  model: string,
  capacity: string,
  color: string,
) {
  const response = await fetch(`${API_URL}/accessories/parameters?model=${model}&capacity=${capacity}&color=${color}`);

  return response.json();
}

export async function getNewAccessories() {
  const response = await fetch(`${API_URL}/accessories/new`);

  return response.json();
}

export async function getAccessoriesByDiscount() {
  const response = await fetch(`${API_URL}/accessories/discount`);

  return response.json();
}
