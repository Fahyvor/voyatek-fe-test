import React, { useEffect, useState } from 'react'
import { API_URL } from '../axios/apiUrl';
import axios from 'axios';

const FlightsLocation: React.FC = () => {
    const [ flights, setFlights ] = useState<[]>([]);
    
    // Endpoint to get Flights Location
    useEffect(() => {
        const getFlightLoction = async () => {
            try {
                console.log
                const response = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination', {
                    params: { query: 'new' },
                    headers: {
                      'x-rapidapi-key': 'd519197e58msh415a9f3412ea21ep10db71jsne318da1b291',
                      'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
                    }
                  });
                  console.log("Flights Location", response.data.data);
                  localStorage.setItem("flightLocation", JSON.parse(response.data.data));
                  if(response.data == 200) {
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.error('Axios error:', error.message);
                } else {
                    console.error('Unknown error:', error);
                }
                setFlights([]);
            }
        }
        getFlightLoction();
    }, [])
  return (
    <div>
        
    </div>
  )
}

export default FlightsLocation