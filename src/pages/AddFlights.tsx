import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'; // Import dispatch from redux
import flightData from '../components/API Responses/Flights.json';
import { setSelectedFlights, removeSelectedFlight } from '../redux/flightsSlice';

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
  selected: boolean; // Add selected property to each flight
}

const FlightList: React.FC = () => {
  const dispatch = useDispatch(); // Access the dispatch function
  const [flights, setFlights] = useState<FlightSegment[]>([]);
  const [filteredFlights, setFilteredFlights] = useState<FlightSegment[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    try {
      const mappedFlights = flightData.data.flightOffers.map((offer: any) => {
        const segment = offer.segments[0] || {};
        return {
          departureAirport: {
            name: segment?.departureAirport?.name || '',
            cityName: segment?.departureAirport?.cityName || '',
            countryName: segment?.departureAirport?.countryName || '',
          },
          arrivalAirport: {
            name: segment?.arrivalAirport?.name || '',
            cityName: segment?.arrivalAirport?.cityName || '',
            countryName: segment?.arrivalAirport?.countryName || '',
          },
          departureTime: segment?.departureTime || '',
          arrivalTime: segment?.arrivalTime || '',
          flightNumber: segment?.flightNumber || '',
          airline: segment?.airline || '',
          selected: false, // Initialize selected property to false
        };
      });
      setFlights(mappedFlights);
      setFilteredFlights(mappedFlights);
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError('Failed to load flight data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const lowerTerm = searchTerm.toLowerCase();
    const filtered = flights.filter((flight) => {
      const matchesSearchTerm =
        (flight.airline || '').toLowerCase().includes(lowerTerm) ||
        (flight.departureAirport?.cityName || '').toLowerCase().includes(lowerTerm) ||
        (flight.arrivalAirport?.cityName || '').toLowerCase().includes(lowerTerm);

      const matchesDepartureDate =
        departureDate === '' ||
        new Date(flight.departureTime).toISOString().split('T')[0] === departureDate;

      return matchesSearchTerm && matchesDepartureDate;
    });

    setFilteredFlights(filtered);
  }, [searchTerm, departureDate, flights]);

  const handleSelectFlight = (index: number) => {
    const newFlights = flights.map((f, i) =>
      i === index ? { ...f, selected: !f.selected } : f
    );

    setFlights(newFlights);
    dispatch(setSelectedFlights(newFlights.filter((f) => f.selected))); // Dispatch selected flights action
  };

  if (loading) return <p className="text-center text-lg font-medium">Loading flights...</p>;
  if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;

  return (
    <div className="w-full px-8 mx-auto py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Available Flight Offers</h1>

      <div className="mb-6 gap-4 w-full">
        <div className="flex items-center gap-4 w-full lg:flex-row md:flex-row flex-col">
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <p className="text-xl font-semibold my-2">Search by Airline, Departure or Arrival City</p>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by airline, departure or arrival city"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <p className="text-xl font-semibold my-2">Departure Date</p>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {flight.airline} Flight {flight.flightNumber}
                </h2>
                <p className="text-gray-600 mt-2">
                  <strong>Departure:</strong> {flight.departureAirport.cityName}, {flight.departureAirport.countryName}{' '}
                  at {new Date(flight.departureTime).toLocaleString()}
                </p>
                <p className="text-gray-600 mt-1">
                  <strong>Arrival:</strong> {flight.arrivalAirport.cityName}, {flight.arrivalAirport.countryName} at{' '}
                  {new Date(flight.arrivalTime).toLocaleString()}
                </p>
                <button
                  onClick={() => handleSelectFlight(index)}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  {flight.selected ? 'Deselect Flight' : 'Select Flight'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center text-lg font-medium">No flights found</p>
        )}
      </div>
    </div>
  );
};

export default FlightList;
