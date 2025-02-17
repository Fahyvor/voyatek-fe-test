import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import { useDispatch, useSelector } from 'react-redux';
import { removeHotel, removeSelectedHotel, setSelectedHotels } from "../redux/hotelSlice";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

interface HotelProps {
  image: string;
  name: string;
  address: string;
  rating: string;
  size: string;
  facilities: string;
  price: string;
  checkIn: string;
  checkOut: string;
  totalPrice: string;
}

interface Hotel {
  hotel_id: number;
  accessibilityLabel: string;
  property: {
    name: string;
    reviewScore: number;
    reviewScoreWord: string;
    photoUrls: string[];
    priceBreakdown: {
      grossPrice: {
        currency: string;
        value: number;
      };
    };
    wishlistName: string;
    checkinDate: string;
    checkoutDate: string;
  };
}

interface Props {
  hotelArray: HotelProps[];
}

const Hotels = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get selectedHotels from Redux store
  const selectedHotels = useSelector(
    (state: { hotel: { selectedHotels: HotelProps[] } }) => state.hotel.selectedHotels
  );

  // Dispatch action to set hotels in Redux store if selectedHotels are empty
  useEffect(() => {
    if (selectedHotels.length === 0) {
      dispatch(setSelectedHotels([])); // You can modify this to set default selected hotels
    }
  }, [dispatch, selectedHotels.length]);

  // Handle hotel selection
  const handleHotelSelect = (hotel: HotelProps) => {
    dispatch(setSelectedHotels([hotel])) 
  };

  const handleHotelClick = (hotel: HotelProps) => {
        const hotelToRemove = hotel.name;
        console.log("Hotel to remove", hotelToRemove);
        dispatch(removeSelectedHotel(hotelToRemove));
        toast("Hotel removed!");
      };

  return (
    <div className="bg-[#344054] p-4 mx-6">
       <div className='toastify-message'>
          <ToastContainer />
        </div>
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <img src="/Warehouse.svg" alt="" />
          <p className="font-semibold text-white text-sm">Hotels</p>
        </div>
        <div className="text-xs hover:bg-gray-300 bg-white rounded-lg py-3 px-6 text-[#344054] font-semibold hover:cursor-pointer"
        onClick={() => navigate('/add-hotel')}>
          <p>Add Hotels</p>
        </div>
      </div>

      {/* Conditional rendering for hotels */}
      {selectedHotels.length === 0 ? (
        <div className="flex flex-col gap-2 py-20 justify-center items-center bg-white p-4 rounded-lg mt-4">
          <img src='/hotel(1).svg' alt='' className='' />
          <p className="text-sm font-semibold text-gray-600">No Request yet</p>
          <button
            className="bg-[#0D6EFD] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-800"
            onClick={() => navigate('/add-hotel')}
          >Add Hotels</button>
        </div>
      ) : (
        <div className="w-full">
          {selectedHotels.map((hotel, index) => (
            <div key={index} className="flex gap-3 items-center hover:bg-gray-100 hover:shadow-3xl bg-white lg:pl-4 md:pl-4 pl-0 h-full w-full my-4">
              <div className="flex rounded-lg gap-3 w-full items-center lg:px-0 xl:px-0 md:px-0 px-3 h-full">
                <div className="flex flex-1 lg:flex-row md:flex-row flex-col gap-2 h-full">
                  <div className="hotel_image flex items-center lg:w-1/6 h-full">
                    <img src={hotel.image} alt="" className="object-cover w-full h-full" />
                  </div>

                  {/* Hotel Details */}
                  <div className="hotel_details w-5/6 flex flex-col gap-1 h-full">
                    <div className="flex justify-between lg:flex-row md:flex-row flex-col gap-4 h-full">
                      <div className="flex flex-col gap-2 w-full h-full">
                        <div className="flex justify-between lg:flex-row md:flex-row flex-col">
                          <div className="">
                            <p className="font-semibold text-2xl">{hotel.name}</p>
                            <p className="text-md font-medium w-5/6">{hotel.address}</p>
                          </div>
                          <div className="flex flex-col gap-2 lg:items-end md:items-end items-start">
                            <p className="text-2xl font-semibold"><span className="line-through">N</span>{hotel.price}</p>
                            <p className="font-medium text-nowrap">Total Price: {hotel.totalPrice}</p>
                            <p className="font-medium text-nowrap">1 room x 10 nights incl. taxes</p>
                          </div>
                        </div>

                        <hr className="w-full border border-gray-200 hidden lg:flex md:flex" />

                        {/* Facilities */}
                        <div className='flex justify-between lg:flex-row md:flex-row flex-col'>
                          <div className="hidden lg:flex md:flex mx-2 gap-5 items-center">
                            <div className="flex gap-2 items-center">
                              <img src="/MapPin.svg" alt="" />
                              <p className="text-[#0D6EFD] font-medium">Show in map</p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <img src="/Star.svg" alt="" />
                              <p>{hotel.rating}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <img src="/Bed.svg" alt="" />
                              <p>{hotel.size}</p>
                            </div>
                          </div>
                          <div className='flex lg:items-center md:items-center items-start gap-5 lg:flex-row md:flex-row flex-col'>
                            <div className="check_in flex ietms-center gap-1">
                              <img src="/CalendarBlack.svg" alt='' />
                              <p>Check In:</p>
                              <p>{hotel.checkIn}</p>
                            </div>

                            <div className="check_in flex ietms-center gap-1">
                              <img src="/CalendarBlack.svg" alt='' />
                              <p>Check Out:</p>
                              <p>{hotel.checkOut}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr className="w-full border border-gray-200" />

                    <div className="flex justify-between py-3 items-center text-[#0D6EFD] hover:cursor-pointer">
                      <div className="flex gap-5 items-center">
                        <p className='hover:cursor-pointer'>Hotel details</p>
                        <p className='hover:cursor-pointer'>Price details</p>
                      </div>
                      <div className="" onClick={() => handleHotelSelect(hotel)}>Edit details</div>
                    </div>
                  </div>
                </div>
                {/* Hotel Image */}

                <div className="delete_ticket bg-[#FBEAE9] min-h-full hidden lg:flex md:flex py-[10%] px-2 hover:cursor-pointer"
                onClick={() => handleHotelClick(hotel)}
                >
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

export default Hotels;
