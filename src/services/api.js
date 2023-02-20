import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32898879-9fd6f99f665dcbb95d5335d80';

export const requestImg = async (query, page, per_page) => {
  const { data } = await axios.get(
    `${BASE_URL}?q=${query}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=${per_page}`
  );
  return data;
};
