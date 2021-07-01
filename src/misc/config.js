const API_BASE_URL = 'https://api.tvmaze.com';

export async function apiGet(qureyString) {
  const response = await fetch(`${API_BASE_URL}${qureyString}`).then(r =>
    r.json()
  );
  return response;
}
