import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar:React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-white min-h-screen fixed py-6 px-4">
      <div className="flex flex-col gap-5">
      <div className="text-gray-600 hover:bg-blue-100 px-4 py-2 rounded-md flex gap-2 items-center hover:cursor-pointer">
        <img src="/RoadHorizon.svg" alt="" className="w-6 h-6" />
        <p className="text-sm font-medium">Activities</p>
      </div>

      <div className="text-gray-600 hover:bg-blue-100 px-4 py-2 rounded-md flex gap-2 items-center hover:cursor-pointer" onClick={() => navigate('/add-hotel')}>
        <img src="/Buildings.svg" alt="" className="w-6 h-6" />
        <p className="text-sm font-medium">Hotels</p>
      </div>

      <div className="text-gray-600 hover:bg-blue-100 px-4 py-2 rounded-md flex gap-2 items-center hover:cursor-pointer" onClick={() => navigate('/add-flight')}>
        <img src="/AirplaneTilt.svg" alt="" className="w-6 h-6" />
        <p className="text-sm font-medium">Flights</p>
      </div>

      <div className="text-gray-600 hover:bg-blue-100 px-4 py-2 rounded-md flex gap-2 items-center hover:cursor-pointer">
        <img src="/Student.svg" alt="" className="w-6 h-6" />
        <p className="text-sm font-medium">Study</p>
      </div>

      <div className="text-gray-600 hover:bg-blue-100 px-4 py-2 rounded-md flex gap-2 items-center hover:cursor-pointer">
        <img src="/NewspaperClipping.svg" alt="" className="w-6 h-6" />
        <p className="text-sm font-medium">Visa</p>
      </div>

      <div className="text-gray-600 hover:bg-blue-100 px-4 py-2 rounded-md flex gap-2 items-center hover:cursor-pointer">
        <img src="/SuitcaseRolling.svg" alt="" className="w-6 h-6" />
        <p className="text-sm font-medium">Immigration</p>
      </div>

      <div className="text-gray-600 hover:bg-blue-100 px-4 py-2 rounded-md flex gap-2 items-center hover:cursor-pointer">
        <img src="/FirstAidKit.svg" alt="" className="w-6 h-6" />
        <p className="text-sm font-medium">Medical</p>
      </div>

      <div className="text-gray-600 hover:bg-blue-100 px-4 py-2 rounded-md flex gap-2 items-center hover:cursor-pointer">
        <img src="/Package.svg" alt="" className="w-6 h-6" />
        <p className="text-sm font-medium">Vacation Packages</p>
      </div>

      <div className="text-gray-600 bg-gray-200 px-4 py-3 rounded-md flex items-center">
        <p className="text-sm bg-blue-700 text-white p-2 rounded-md font-semibold">Go</p>
        <select className="bg-transparent outline-none text-sm p-3 appearance-none">
          <option>Personal Account</option>
        </select>
        <img src="/CaretUpDown.svg" alt="" className="h-5 w-5" />
      </div>
      </div>
    </div>
    );
};

export default Sidebar;
