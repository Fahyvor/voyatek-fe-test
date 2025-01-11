import React from 'react'

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
  return (
    <div className="bg-[#344054] p-4 mx-6 ">
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <img src="/Warehouse.svg" alt="" />
                <p className="fnot-semibold text-white text-sm">Hotels</p>
              </div>
              <div className="text-sm bg-white rounded-lg py-3 px-6 text-[#344054] font-semibold cursor-pointer">
                <p>Add Hotels</p>
              </div>
            </div>

            <div className="">
              {props.hotelArray.map((hotel, index) => (
                <div key={index} className="flex gap-3 items-center bg-white pl-4 w-full my-4">
                  <div className="flex bg-white rounded-lg gap-3 w-full items-center">
                    <div className="hotel_image flex items-center lg:w-1/6">
                      <img src={hotel.image} alt="" className="object-cover w-full h-full"/>
                    </div>

                    <div className="hotel_details py-3 w-5/6 flex flex-col gap-1">
                      <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                          <p className="font-semibold text-2xl">{hotel.name}</p>
                          <p className="text-md font-medium w-5/6">{hotel.address}</p>

                          <div className="flex gap-5 items-center">
                            <div className="flex gap-2 items-center">
                              <img src="/MapPin.svg" alt=""  className="" />
                              <p className="text-[#0D6EFD] font-medium">Show in map</p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <img src="/Star.svg" alt="" className="" />
                              <p>{hotel.rating}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <img src="/Bed.svg" alt="" className="" />
                              <p>{hotel.size}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2  items-end">
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
                            <img src="/SwimmingPool.svg" alt="" className="" />
                            <p>Pool</p>
                          </div>

                          <div className="flex gap-3 items-center">
                            <img src="/Wine.svg" alt="" className="" />
                            <p>Bar</p>
                          </div>
                        </div>
                        <div className="flex gap-3 items-center">
                          <div className="flex gap-3 items-center">
                            <img src="/CalendarBlack.svg" alt="" className="" />
                            <p>Check In: {hotel.checkIn}</p>
                          </div>
                          <div className="flex gap-3 items-center">
                            <img src="/CalendarBlack.svg" alt="" className="" />
                            <p>Check In: {hotel.checkOut}</p>
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
        </div>
  )
}

export default Hotels