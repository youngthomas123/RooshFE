

const BASE_URL = "http://localhost:8080";

async function getAllAirports()
{
  const url = `${BASE_URL}/airports`;
  
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
    console.log("API error getAllAirports(...)");
    throw error;
  }

}

async function AddAirport(providerId, airport)
{
    const url = `${BASE_URL}/providers/${providerId}/airports`;
    const body = JSON.stringify({ 
      name: airport.name,
      code : airport.code,
      streetname : airport.streetname,
      streetnumber: airport.streetnumber,
      zipCode : airport.zipCode,
      city : airport.city,
      country : airport.country,
      longtitude : airport.longtitude,
      latitude : airport.latitude,
      terminal : airport.terminal

     });
    console.log("stringify : " + body);
  
  const headers = {
    'Content-Type': 'application/json',
  };

  try
  {
    const response = await fetch(url,{
      method: 'POST',
      headers,
     body
      
    });
    return response;
  }
  catch(error)
  {
    console.log("API error addAirport(...)");
    throw error;
  }

}

async function searchAirport(city, country)
{
  const url = `${BASE_URL}/airports/search?city=${city}&country=${country}`;
  
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
    console.log("API error searchAirport(...)");
    throw error;
  }

}

const AirportApi = {
    getAllAirports,
    AddAirport,
    searchAirport,
}

export default AirportApi;