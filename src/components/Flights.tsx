import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFlights } from '../redux/flightsSlice';
import { useNavigate } from 'react-router-dom';

interface AirplaneProps {
  id: number;
  type: string;
  airline: string;
  refNo: string;
  departure: string;
  arrival: string;
  departureDate: string;
  arrivalDate: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  baggage: string;
  cabinBaggage: string;
  entertainment: string;
  meal: string;
  usb: string;
  price: string;
}

interface Props {
  airplaneArray: AirplaneProps[];
}

const Flights = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const airplanes = useSelector((state: { flights: { airplanes: AirplaneProps[] } }) => state.flights.airplanes);

  return (
    <div className="bg-gray-50 my-7 p-6 mx-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-3 items-center">
          <img src="/Warehouse.svg" alt="Flights Icon" className="w-6 h-6" />
          <p className="font-semibold text-lg text-gray-800">Flights</p>
        </div>
        <button
          className="bg-blue-600 text-white rounded-lg py-2 px-4 text-sm font-semibold hover:bg-blue-700"
          onClick={() => navigate('/add-flight')}
        >
          Add Flight
        </button>
      </div>

      {airplanes.length === 0 ? (
        <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-md">
          <img src="/plane.svg" alt="No Flights" className="w-16 h-16" />
          <p className="text-sm font-semibold text-gray-600">No Flights Available</p>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            onClick={() => navigate('/add-flight')}
          >
            Add Flight
          </button>
        </div>
      ) : (
        <div className="grid gap-6">
          {airplanes.map((flight, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start gap-4 w-full">
                <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-md">
                  <img src="/plane-icon.svg" alt="Plane Icon" className="w-10 h-10 object-contain" />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800">{flight.airline}</h3>
                  <p className="text-sm text-gray-600">{`${flight.departure} to ${flight.arrival}`}</p>
                  <div className="flex gap-4 text-sm mt-2 text-gray-600">
                    <div className="flex items-center gap-1">
                      <img src="/MapPin.svg" alt="Map Pin" className="w-4 h-4" />
                      <span className="text-blue-600 cursor-pointer hover:underline">Show on map</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="/Clock.svg" alt="Clock" className="w-4 h-4" />
                      <span>{flight.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="/Baggage.svg" alt="Baggage" className="w-4 h-4" />
                      <span>{flight.baggage}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className="text-2xl font-bold text-gray-800">{flight.price}</p>
                <button
                  className="text-blue-600 font-medium hover:underline"
                  onClick={() => console.log('Edit Flight')}
                >
                  Edit details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Flights;
