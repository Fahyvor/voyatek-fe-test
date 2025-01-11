import Sidebar from "../components/Sidebar"
import React, { useEffect, useState } from 'react'
import Flights from "../components/Flights";
// import { useQuery } from "@tanstack/react-query";
import fetchFlightDetails from "../components/FetchFlightDetails";
import Hotels from "../components/Hotels";
import Activities from "../components/Activities";
import { API_URL } from "../axios/apiUrl";
import axios from "axios";
import FlightsLocation from "../components/FlightsLocation";
import { activitiesArray } from "../components/API Responses/Activities";
import { airplaneArray } from "../components/API Responses/Flight";
import { hotelArray } from "../components/API Responses/Hotel";

const Home:React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  // useEffect(() => {
  //   const FetchFlightDetails = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${API_URL}flights/getFlightDetails?currency_code=AED`,
  //         {
  //           headers: {
  //             "x-rapidapi-host": process.env.VITE_HOST,
  //             "x-rapidapi-key": process.env.VITE_KEY,
  //           },
  //         }
  //       );
        
  //       if(response.status == 200 ) {
  //         // Set your state with the response data
  //         console.log("Flight data")
  //         console.log("Flight data", response.data.data);
  //       }
  //     } catch (error) {
        
  //     }
  //   }
  //   FetchFlightDetails();
  // }, [])
  
  return (
    <div className="p-4 flex gap-4 bg-gray-200 w-full">
      <div className="w-[20%] sticky top-16 h-screen hidden lg:flex md:flex">
        <Sidebar />
      </div>
      <div className="w-full bg-white">
        <div className="w-full pt-10 pb-28 bg-no-repeat banner_section"
        style={{ backgroundImage: "url('/banner.svg')"}}
        >
            <div className="flex justify-between px-5">
              <img src="/back.svg" alt="" className="" />
            </div>
        </div>

        {/* Bahamas and activties Container */}
        <div className="flex px-6 py-5 justify-between bahamas_n_activities lg:flex-row md:flex-row flex-col-reverse">
          <div className="lg:w-[70%] md:w-[70%] w-full px-4">
            <div className="bg-[#FEF4E6] flex items-center w-fit px-2 gap-1 p-1">
              <img src="/CalendarBlank.svg" alt="" className="" />
              <p className="text-[#7A4504] text-xs font-medium">21 March 2024</p>
              <img src="/ArrowRight.svg" alt="" className="" />
              <p className="text-[#7A4504] text-xs font-medium">21 April 2024</p>
            </div>

            <p className="font-bold lg:text-3xl text-2xl my-1">Bahamas Family Trip</p>

            <p className="lg:text-lg md:text-lg text-xs font-medium text-[#676E7E]">New York, United States of America <span className="text-gray-100">| </span> Solo Trip</p>

            <div className="activities_hotels_flights flex lg:flex-row md:flex-row flex-col lg:gap-2 md:gap-2 gap-6 py-5">
              <div className="activities_container text-white bg-[#000031] p-3 rounded-lg">
                <p className="font-bold text-lg">Activities</p>
                <p className="text-xs">Build, personalize, and optimize your itineraries with our trip planner.</p>

                <button className="bg-[#0D6EFD] py-2 rounded-md w-full text-white mt-10 cursor-pointer">Add Activites</button>
              </div>
              <div className="hotels_container bg-[#E7F0FF] p-3 rounded-lg">
                <p className="font-bold text-lg">Hotels</p>
                <p className="text-xs">Build, personalize, and optimize your itineraries with our trip planner.</p>

                <button className="bg-[#0D6EFD] py-2 rounded-md w-full mt-10 text-white cursor-pointer">Add Hotels</button>
              </div>
              <div className="flights_container bg-[#0D6EFD] p-3 rounded-lg text-white">
                <p className="font-bold text-lg">Flights</p>
                <p className="text-xs">Build, personalize, and optimize your itineraries with our trip planner.</p>

                <button className="bg-white text-[#0D6EFD] py-2 rounded-md w-full mt-10 cursor-pointer">Add Flights</button>
              </div>
            </div>
          </div>
          <div className="w-[30%] hidden lg:flex lg:flex-col md:flex md:flex-col items-end px-5 gap-5">
            <div className="flex gap-4 items-center">
              <div className="bg-[#E7F0FF] rounded-lg px-16 py-3">
                  <img src="/UserPlus.svg" alt="" className=" h-6 w-6 " />
              </div>
              <img src="/DotsThree.svg" alt="" className=" h-6 w-6 " />
            </div>
            <div className="flex items-center">
              <img src="box.svg" alt="" className="h-12 w-12" />
              <hr className="w-6 "/>
              <img src="/set.svg" alt="" className="h-12 w-12" />
            </div>
          </div>
        </div>

        {/* Flights */}
        <Flights airplaneArray={airplaneArray} />

        {/* Hotels */}
        <Hotels  hotelArray={hotelArray}/>

        {/* Activities */}
        <Activities activitiesArray={activitiesArray} /> 

        <FlightsLocation />
      </div>
    </div>
  )
}

export default Home