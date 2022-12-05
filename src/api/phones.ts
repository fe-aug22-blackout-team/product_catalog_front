// eslint-disable-next-line
const API_URL = 'https://638e0fbd3acec732984dac94--melodic-centaur-2d31fb.netlify.app/.netlify/functions/server';

export async function getPhonesByPagination(
  sortBy: string,
  page: number,
  limit: number | string,
) {
  const response = await fetch(`${API_URL}/phones?sort=${sortBy}&page=${page}&limit=${limit}`);

  return response.json();
}

export async function getAllSortedPhones(sortBy: string) {
  const response = await fetch(`${API_URL}/phones?sort=${sortBy}&page=1&limit=100`);

  return response.json();
}
