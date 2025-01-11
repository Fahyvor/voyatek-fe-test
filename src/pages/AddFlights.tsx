import React, { useState, useEffect } from 'react';

// Sample flight data
import flightData from '../components/API Responses/Flights.json'

interface FlightSegment {
  departureAirport: {
    name: string;
    cityName: string;
    countryName: string;
  };
  arrivalAirport: {
    name: string;
    cityName: string;
    countryName: string;
  };
  departureTime: string;
  arrivalTime: string;
  flightNumber: string;
  airline: string;
}

const FlightList: React.FC = () => {
  const [flights, setFlights] = useState<FlightSegment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    try {
      // Simulating API response with static data
      const mappedFlights = flightData.data.flightOffers.map((offer: any) => {
        const segment = offer.segments[0];
        return {
          departureAirport: {
            name: segment.departureAirport.name,
            cityName: segment.departureAirport.cityName,
            countryName: segment.departureAirport.countryName,
          },
          arrivalAirport: {
            name: segment.arrivalAirport.name,
            cityName: segment.arrivalAirport.cityName,
            countryName: segment.arrivalAirport.countryName,
          },
          departureTime: segment.departureTime,
          arrivalTime: segment.arrivalTime,
          flightNumber: segment.flightNumber,
          airline: segment.airline,
        };
      });
      setFlights(mappedFlights);
    } catch (err) {
      setError('Failed to load flight data');
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return <p>Loading flights...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="w-full px-10 mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Available Flights Offers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {flights.map((flight, index) => (
          <div key={index} className="border rounded-lg overflow-hidden border-gray-300">
            <div className="p-4">
              <h2 className="text-xl font-semibold">
                {flight.airline} Flight {flight.flightNumber}
              </h2>
              <p className="text-gray-600">
                Departure: {flight.departureAirport.cityName}, {flight.departureAirport.countryName} at {flight.departureTime}
              </p>
              <p className="text-gray-600">
                Arrival: {flight.arrivalAirport.cityName}, {flight.arrivalAirport.countryName} at {flight.arrivalTime}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightList;
