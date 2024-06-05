import axios from 'axios';

const URL = 'https://api.thecatapi.com/v1';
const BREEDS_ENDPOINT = '/breeds';
const KEY =
  'live_B9grJgv4HqzW6TZpqeLqnlyqi2vhD7LVDuhx5sgYT8L76L0WiuGpLioEPRoZa1XP';

export function fetchBreeds() {
  return axios.get(URL + BREEDS_ENDPOINT, {
    headers: {
      'x-api-key': KEY,
    },
  });
}

export function fetchCatByBreed(breedId) {
  return axios.get(URL + '/images/search?', {
    headers: {
      'x-api-key': KEY,
    },
    params: {
      breed_ids: breedId,
    },
  });
}
