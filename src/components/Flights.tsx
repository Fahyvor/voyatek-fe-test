import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFlights, removeFlight, setSelectedFlights, removeSelectedFlight } from '../redux/flightsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  selected: boolean;
}

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

interface Props {
  airplaneArray: AirplaneProps[];
}

const Flights = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { selectedFlights: airplanes } = useSelector((state: { flights: { selectedFlights: AirplaneProps[] } }) => state.flights);

  const handleRemoveFlightAction = (hotel_id: number) => {
    dispatch({ type: "flights/removeFlight", payload: hotel_id });
    toast("Flight removed!");
  };

  //Here is the selectFlight, write the function to remove the flight
  const handleRemoveFlight = (index: number) => {
    const newFlights = airplanes.map((f, i) =>
      i === index ? { ...f, selected: !f.selected } : f
    );

    setFlights(newFlights);
      const selectedFlights = newFlights.filter((f) => f.selected);
      dispatch(setSelectedFlights(selectedFlights)); // Dispatch selected flights action
      if (!newFlights[index].selected) {
        handleRemoveFlightAction(index); // Dispatch remove selected flight action
      }
    dispatch(setSelectedFlights(newFlights.filter((f) => f.selected))); // Dispatch selected flights action
  };
  

  return (
    <div className="bg-gray-100 px-6 p-3 mt-5">
      <div className="flex gap-3 items-center justify-between">
        <div className="flex gap-3 items-center">
          <img src="/AirplaneInFlight.svg" alt="" className="" />
          <p className="text-lg font-bold">Flights</p>
        </div>
        <div className="bg-white text-[#0D6EFD] px-5 py-3 rounded-lg text-xs font-medium hover:bg-gray-300 hover:cursor-pointer"
            onClick={() => navigate('/add-flight')}
          >
          <p>Add Flights</p>
        </div>
      </div>

      {airplanes.length === 0 ? (
        <div className="flex flex-col py-20 items-center my-4 gap-4 bg-white p-6 rounded-lg shadow-md">
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
      <div className="mt-4">
        {airplanes.map((airplane, index) => (
          <div key={index} className="flex gap-2 lg:py-0 md:py-0 hover-hover:cursor-pointer py-4 items-center h-full hover:shadow-3xl hover:shadow-xl bg-white pl-4 w-full my-4">
            <div className="w-full">
              <div className="w-full flex flex-1 lg:flex-row md:flex-row flex-col items-start md:items-center lg:items-center gap-4 ticket_upper">
                <div className="flex gap-3 airline_logo items-center lg:w-1/4">
                  <img src="/airplane.svg" alt="" className="h-6 w-6" />
                  <div className="">
                    <p className="font-semibold text-lg">American Airlines</p>
                    <div className="flex gap-3 items-center text-sm">
                      <p className="font-medium">AA-829</p>
                      <p className="bg-[#0A369D] text-white rounded-md p-2 py-1 text-sm">First Class</p>
                    </div>
                  </div>
                </div>
                <div className="departure_details flex gap-6 md:items-center items-start lg:items-center lg:w-2/4 text-nowrap">
                  <div className="departure flex flex-col items-end">
                    <p className="font-semibold lg:text-2xl md:text-2xl text-md">{new Date(airplane.departureTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
                    <p className="lg:text-sm md:text-sm text-xs">{new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'long', day: '2-digit' }).format(new Date(airplane.departureTime))}</p>
                  </div>
                  <div className=" flex flex-col gap-3 w-full">
                    <div className="flex justify-between items-center gap-4">
                      <img src="/AirplaneTakeoff.svg" alt="" className="w-5 h-5 2xl:flex xl:flex lg:flex md:flex hidden" />
                      <p className="text-sm text-[#676E7E] font-medium">Duration: {airplane.duration}</p>
                      <img src="/AirplaneLanding.svg" alt="" className="w-5 h-5 2xl:flex xl:flex lg:flex md:flex hidden" />
                    </div>
                    <div className="range">
                      <div className="w-full bg-gray-300 h-2 rounded-md relative">
                        <div className="bg-blue-500 h-full rounded-md absolute left-1/2 transform -translate-x-1/2" style={{ width: "50%" }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                      <p className="font-semibold">{airplane.departure}</p>
                      <p className="text-sm text-[#676E7E] font-medium">Direct</p>
                      <p className="font-semibold">{airplane.arrival}</p>
                    </div>
                  </div>
                  <div className="arrival">
                    <p className="font-semibold lg:text-2xl md:text-2xl text-md">{new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' }).format(new Date(airplane.arrivalTime))}</p>
                    <p className="lg:text-sm md:text-sm text-xs">{new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'long', day: '2-digit' }).format(new Date(airplane.arrivalTime))}</p>
                  </div>
                </div>
                <div className="amount_container flex justify-center lg:w-1/4">
                  <p className=" font-bold lg:text-3xl md:text-3xl text-xl"><span className="line-through">N</span> 123,450.00</p>
                </div>
              </div>
              <hr className="w-full border border-gray-200" />

              <div className=" py-4 flex lg:flex-row md:flex-row flex-col lg:items-center gap-3 text-sm">
                <div className="flex lg:items-center gap-1">
                  <p>Facilities:</p>
                  <img src="/SuitcaseRolling.svg" alt="" className="w-5 h-5" />
                  <p>Baggage: 20kg, Cabin Baggage: 8kg</p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src="/FilmSlate.svg" alt="" className="w-5 h-5" />
                  <p>In flight entertainment</p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src="/ForkKnife.svg" alt="" className="w-5 h-5" />
                  <p>In flight meal</p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src="/Usb.svg" alt="" className="w-5 h-5" />
                  <p>USB Port</p>
                </div>
              </div>

              <hr className="w-full border border-gray-200" />

              <div className="flex justify-between py-3 items-center text-[#0D6EFD] hover:cursor-pointer">
                <div className="flex gap-5 items-center">
                  <p className="hover:cursor-pointer">Flight details</p>
                  <p className='hover:cursor-pointer'>Price details</p>
                </div>
                <div className="">Edit details</div>
              </div>
            </div>
            <div className="delete_ticket bg-[#FBEAE9] h-full flex 2xl:flex xl:flex lg:flex md:flex hidden py-[10%] px-2 hover:cursor-pointer"
              onClick={() => handleRemoveFlight(index)}
            >
              <img src="/X.svg" alt="" />
            </div>
          </div>
        ))}
      </div>
    )}
    </div>
  );
};

export default Flights;
