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

  // Get airplanes from Redux store
  const airplanes = useSelector((state: { flights: { airplanes: AirplaneProps[] } }) => state.flights.airplanes);

  return (
    <div className="bg-[#F0F2F5] my-7 p-4 mx-6">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <img src="/Warehouse.svg" alt="" />
          <p className="font-semibold text-white text-sm">Flights</p>
        </div>
        <div className="text-sm bg-white rounded-lg py-3 px-6 text-[#344054] font-semibold cursor-pointer" onClick={() => navigate('/add-flights')}>
          <p>Add Flight</p>
        </div>
      </div>

      {/* Conditional rendering for flights */}
      {airplanes.length === 0 ? (
        <div className="flex flex-col gap-2 py-20 justify-center items-center bg-white p-4 rounded-lg mt-4">
          <img src='/plane.svg' alt='' className='' />
          <p className="text-sm font-semibold text-gray-600">No Request available</p>
          <button
            className="bg-[#0D6EFD] text-white px-6 py-3 rounded-md text-sm font-medium"
            onClick={() => navigate('/add-flight')}
          >Add Flight</button>
        </div>
      ) : (
        <div className="">
          {airplanes.map((flight, index) => (
            <div key={index} className="flex gap-3 items-center bg-white pl-4 w-full my-4">
              <div className="flex bg-white rounded-lg gap-3 w-full items-center">
                <div className="flight_image flex items-center lg:w-1/6">
                  <img src="/plane-icon.svg" alt="" className="object-cover w-full h-full" />
                </div>

                <div className="flight_details py-3 w-5/6 flex flex-col gap-1">
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-2xl">{flight.airline}</p>
                      <p className="text-md font-medium">{flight.departure} to {flight.arrival}</p>

                      <div className="flex gap-5 items-center">
                        <div className="flex gap-2 items-center">
                          <img src="/MapPin.svg" alt="" />
                          <p className="text-[#0D6EFD] font-medium">Show on map</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <img src="/Clock.svg" alt="" />
                          <p>{flight.duration}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <img src="/Baggage.svg" alt="" />
                          <p>{flight.baggage}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <p className="text-2xl font-semibold">{flight.price}</p>
                    </div>
                  </div>

                  <hr className="w-full border border-gray-200" />

                  <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                      <p>Facilities:</p>
                      <div className="flex gap-3 items-center">
                        <img src="/Meal.svg" alt="" />
                        <p>{flight.meal}</p>
                      </div>

                      <div className="flex gap-3 items-center">
                        <img src="/USB.svg" alt="" />
                        <p>{flight.usb}</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="flex gap-3 items-center">
                        <img src="/CalendarBlack.svg" alt="" />
                        <p>Departs: {flight.departureDate} at {flight.departureTime}</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <img src="/CalendarBlack.svg" alt="" />
                        <p>Arrives: {flight.arrivalDate} at {flight.arrivalTime}</p>
                      </div>
                    </div>
                  </div>

                  <hr className="w-full border border-gray-200" />

                  <div className="flex justify-between py-3 items-center text-[#0D6EFD]">
                    <div className="flex gap-5 items-center">
                      <p>Flight details</p>
                      <p>Price details</p>
                    </div>
                    <div className="">Edit details</div>
                  </div>
                </div>

                <div className="delete_ticket bg-[#FBEAE9] h-full flex py-28 px-2 cursor-pointer">
                  <img src="/X.svg" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Flights;
