
import React, { useEffect  } from 'react'
import { useNavigate } from 'react-router-dom'  
import { useDispatch, useSelector } from 'react-redux';
import { setHotels } from "../redux/hotelSlice";

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

interface Props {
  hotelArray: HotelProps[];
}

const Hotels = (props: Props) => {
  const dispatch = useDispatch();

  // Get hotels from Redux store
  const hotels = useSelector((state: { hotel: { hotels: HotelProps[] } }) => state.hotel.hotels);
  const navigate = useNavigate();
  return (
    <div className="bg-[#344054] p-4 mx-6">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <img src="/Warehouse.svg" alt="" />
          <p className="font-semibold text-white text-sm">Hotels</p>
        </div>
        <div className="text-sm bg-white rounded-lg py-3 px-6 text-[#344054] font-semibold cursor-pointer">
          <p>Add Hotels</p>
        </div>
      </div>

      {/* Conditional rendering for hotels */}
      {hotels.length === 0 ? (
        <div className="flex flex-col gap-2 py-20 justify-center items-center bg-white p-4 rounded-lg mt-4">
          <img src='/hotel(1).svg' alt='' className='' />
          <p className="text-sm font-semibold text-gray-600">No Request yet</p>
          <button
            className="bg-[#0D6EFD] text-white px-6 py-3 rounded-md text-sm font-medium"
            onClick={() => navigate('/add-hotel')}
          >Add Hotels</button>
        </div>
      ) : (
        <div className="">
          {hotels.map((hotel, index) => (
            <div key={index} className="flex gap-3 items-center bg-white pl-4 w-full my-4">
              <div className="flex bg-white rounded-lg gap-3 w-full items-center">
                <div className="hotel_image flex items-center lg:w-1/6">
                  <img src={hotel.image} alt="" className="object-cover w-full h-full" />
                </div>

                <div className="hotel_details py-3 w-5/6 flex flex-col gap-1">
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-2xl">{hotel.name}</p>
                      <p className="text-md font-medium w-5/6">{hotel.address}</p>

                      <div className="flex gap-5 items-center">
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
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <p className="text-2xl font-semibold"><span className="line-through">N</span>{hotel.price}</p>
                      <p className="font-medium">Total Price: NGN {hotel.totalPrice}</p>
                      <p className="font-medium">1 room x 10 nights incl. taxes</p>
                    </div>
                  </div>

                  <hr className="w-full border border-gray-200" />

                  <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                      <p>Facilities:</p>
                      <div className="flex gap-3 items-center">
                        <img src="/SwimmingPool.svg" alt="" />
                        <p>Pool</p>
                      </div>

                      <div className="flex gap-3 items-center">
                        <img src="/Wine.svg" alt="" />
                        <p>Bar</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="flex gap-3 items-center">
                        <img src="/CalendarBlack.svg" alt="" />
                        <p>Check In: {hotel.checkIn}</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <img src="/CalendarBlack.svg" alt="" />
                        <p>Check Out: {hotel.checkOut}</p>
                      </div>
                    </div>
                  </div>

                  <hr className="w-full border border-gray-200" />

                <div className="flex justify-between py-3 items-center text-[#0D6EFD]">
                  <div className="flex gap-5 items-center">
                    <p>Hotel details</p>
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
}

export default Hotels
