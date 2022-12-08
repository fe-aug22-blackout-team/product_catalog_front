// eslint-disable-next-line
const API_URL = 'https://melodic-centaur-2d31fb.netlify.app/.netlify/functions/server';

export async function getPhonesByPagination(
  sortBy: string,
  page: number,
  limit: number | string,
) {
  const response = await fetch(`${API_URL}/phones?sort=${sortBy}&page=${page}&limit=${limit}`);

  return response.json();
}

//                                                  |
// delete whats below if we dont need this anymore \|/

export async function getAllSortedPhones(sortBy: string) {
  const response = await fetch(`${API_URL}/phones?sort=${sortBy}&page=1&limit=100`);

  return response.json();
}

export async function getPhoneById(phoneId: string) {
  const response = await fetch(`${API_URL}/phones/${phoneId}`);

  return response.json();
}

export async function getPhoneByParameters(
  model: string,
  capacity: string,
  color: string,
) {
  const response = await fetch(`${API_URL}/phones/parameters?model=${model}&capacity=${capacity}&color=${color}`);

  return response.json();
}

export async function getNewPhones() {
  const response = await fetch(`${API_URL}/phones/new`);

  return response.json();
}

export async function getPhonesByDiscount() {
  const response = await fetch(`${API_URL}/phones/discount`);

  return response.json();
}
