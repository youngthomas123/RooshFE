import axios from "axios";

const BASE_URL = "http://localhost:8080";

const ProvidersApi ={
    //temporary, delete this later
    addProviderbyName: (providername) =>  axios.get(`${BASE_URL}/providers/add/${providername}`),
    getAll: () =>  axios.get(`${BASE_URL}/providers`),
    addProvider: async (provider) =>  axios.post(`${BASE_URL}/providers`, provider),

    // deleteGenre: (id) =>  axios.delete(`${BASE_URL}/genres/${id}`),
    // saveGenre: async (genre) => axios.post(`${BASE_URL}/genres`, genre),
    // editGenre: async (genre) => axios.put(`${BASE_URL}/genres/${genre.id}`, genre)
}

export default ProvidersApi