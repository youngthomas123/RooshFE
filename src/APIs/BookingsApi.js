import axios from "axios";

const BASE_URL = "http://localhost:8080/Bookings";

const BookingsApi ={

   
    getAllBookings: () =>  axios.get(`${BASE_URL}`),
    searchBookings: (referenceNumber) => axios.get(`${BASE_URL}/search`, { params: { referenceNumber } })

}

export default BookingsApi