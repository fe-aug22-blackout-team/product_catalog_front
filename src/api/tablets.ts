// eslint-disable-next-line
const API_URL = 'https://melodic-centaur-2d31fb.netlify.app/.netlify/functions/server';

export async function getTabletsByPagination(
  sortBy: string,
  page: number,
  limit: number | string,
) {
  const response = await fetch(`${API_URL}/tablets?sort=${sortBy}&page=${page}&limit=${limit}`);

  return response.json();
}

export async function getTabletById(tabletId: string) {
  const response = await fetch(`${API_URL}/tablets/${tabletId}`);

  return response.json();
}

export async function getTabletByParameters(
  model: string,
  capacity: string,
  color: string,
) {
  const response = await fetch(`${API_URL}/tablets/parameters?model=${model}&capacity=${capacity}&color=${color}`);

  return response.json();
}

export async function getNewTablets() {
  const response = await fetch(`${API_URL}/tablets/new`);

  return response.json();
}

export async function getTabletsByDiscount() {
  const response = await fetch(`${API_URL}/tablets/discount`);

  return response.json();
}
