import axios from "axios"
const BASE_URL = "https://youtube-v31.p.rapidapi.com"
const options = {
    method: 'GET',
    url: BASE_URL,
    params: {maxResults: 50},
    headers: {
      'X-RapidAPI-Key': "605c63dbd6mshb26914674222b0ep1eef3cjsn2cc536c067c9",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data
}