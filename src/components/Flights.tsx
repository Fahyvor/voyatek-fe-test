import React from 'react'

interface Airplane {
    id: number,
    type: string,
    airline: string,
    refNo: string,
    departure: string,
    arrival: string,
    departureDate: string,
    arrivalDate: string,
    departureTime: string,
    arrivalTime: string,
    duration: string,
    baggage: string,
    cabinBaggage: string,
    entertainment: string,
    meal: string,
    usb: string,
    price: string
}

interface FlightsProps {
    airplaneArray: Airplane[]
}

const Flights: React.FC<FlightsProps> = ({ airplaneArray }) => {
    return (
        <div className="px-6 py-6">
                    <p className="text-xl font-bold">Trip Itineraries</p>
                    <p className="text-sm text-[#647995]">Your trip itineraries are placed here</p>

                    <div className="bg-gray-100 p-3 mt-5">
                        <div className="flex gap-3 items-center justify-between">
                            <div className="flex gap-3 items-center">
                                <img src="/AirplaneInFlight.svg" alt="" className="" />
                                <p className="text-lg font-bold">Flights</p>
                            </div>
                            <div className="bg-white text-[#0D6EFD] px-5 py-3 rounded-lg text-md font-medium cursor-pointer">
                                <p>Add Flights</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            {airplaneArray.map((airplane, index) => (
                                <div key={index} className="flex gap-2 items-center bg-white pl-4 w-full my-4">
                                    <div className="w-full">
                                        <div className="py-4 w-full flex items-center gap-4 ticket_upper">
                                            <div className="flex gap-3 airline_logo items-center lg:w-1/4">
                                                <img src="/airplane.svg" alt="" className="h-6 w-6" />
                                                <div className="">
                                                        <p className="font-semibold text-lg">{airplane.airline}</p>
                                                        <div className="flex gap-3 items-center text-sm">
                                                            <p className="font-medium">{airplane.refNo}</p>
                                                            <p className="bg-[#0A369D] text-white rounded-md p-2 py-1 text-sm">{airplane.type}</p>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="departure_details flex gap-6 items-center lg:w-2/4 text-nowrap">
                                                <div className="departure flex flex-col items-end">
                                                    <p className="font-semibold text-2xl">{airplane.departureTime}</p>
                                                    <p className="text-sm">{airplane.departureDate}</p>
                                                </div>

                                                <div className=" flex flex-col gap-3 w-full">
                                                    <div className="flex justify-between items-center gap-4">
                                                        <img src="/AirplaneTakeoff.svg" alt="" className="w-5 h-5" />
                                                        <p className="text-sm text-[#676E7E] font-medium">Duration: {airplane.duration}</p>
                                                        <img src="/AirplaneLanding.svg" alt="" className="w-5 h-5" />
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
                                                    <p className="font-semibold text-2xl">{airplane.arrivalTime}</p>
                                                    <p className="text-sm">{airplane.arrivalDate}</p>
                                                </div>
                                            </div>
                                            <div className="amount_container flex justify-center lg:w-1/4">
                                                <p className=" font-bold text-3xl"><span className="line-through">N</span> {airplane.price}</p>
                                            </div>
                                        </div>

                                        <hr className="w-full border border-gray-200" />
                                        
                                        <div className=" py-4 flex items-center gap-3 text-sm">
                                            <div className="flex items-center gap-1">
                                                <p>Facilities:</p>
                                                <img src="/SuitcaseRolling.svg" alt="" className="" />
                                                <p>Baggage: {airplane.baggage}, Cabin Baggage: {airplane.cabinBaggage}</p>
                                            </div>

                                            <div className="flex gap-1 items-center">
                                                <img src="/FilmSlate.svg" alt="" className="" />
                                                <p>{airplane.entertainment}</p>
                                            </div>
                                            <div className="flex gap-1 items-center">
                                                <img src="/ForkKnife.svg" alt="" className="" />
                                                <p>{airplane.meal}</p>
                                            </div>
                                            <div className="flex gap-1 items-center">
                                                <img src="/Usb.svg" alt="" className="" />
                                                <p>{airplane.usb}</p>
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
                            ))}
                        </div>

                    </div>
                </div>
    )
}

export default Flights