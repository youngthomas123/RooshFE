import axios from "axios";

const BASE_URL = "http://localhost:8080";

const AirportsApi ={
    getAll: () =>  axios.get(`${BASE_URL}/Airports`),
    addAirports: async (provider) =>  axios.post(`${BASE_URL}/Airports`, provider),
    
}

export default AirportsApi