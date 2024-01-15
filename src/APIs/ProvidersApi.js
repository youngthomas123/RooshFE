import axios from "axios";

 const BASE_URL = "http://localhost:8080";

const ProvidersApi ={
    //temporary, delete this later
    addProviderbyName: (providername) =>  axios.get(`${BASE_URL}/providers/add/${providername}`),
    getAll: () =>  axios.get(`${BASE_URL}/providers`),
    addProvider: async (provider) =>  axios.post(`${BASE_URL}/providers`, provider),


}

export default ProvidersApi;




async function getAllProviders()
{
    const url = `${BASE_URL}/providers`;
  
  const headers = {
    'Content-Type': 'application/json',
  };

  try
  {
    const response = await fetch(url,{
      method: 'GET',
      headers,
      
    });
    return response;
  }
  catch(error)
  {
    console.log("API error getAllProviders(...)");
    throw error;
  }
}




const ProvidersApifetch = {
    getAllProviders,
}

export {ProvidersApifetch};