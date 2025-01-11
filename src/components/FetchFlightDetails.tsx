import axios from "axios";
import { API_URL } from "../axios/apiUrl";

const fetchFlightDetails = async () => {
  const response = await axios.get(
    `${API_URL}flights/getFlightDetails?currency_code=AED`,
    {
      headers: {
        "x-rapidapi-host": `${process.env.HOST}`,
        "x-rapidapi-key" : `${process.env.API_KEY}`,
      },
    }
  );
  return response.data;
};

export default fetchFlightDetails;
