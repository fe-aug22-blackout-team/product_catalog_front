// eslint-disable-next-line
const API_URL = 'https://638727eca856ad00093d1adb--melodic-centaur-2d31fb.netlify.app/.netlify/functions/server/products';

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}
