import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { GiCancel } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom';

const Nav: React.FC = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-20">
            <div className="flex items-center space-x-4 lg:w-1/4 md:w-1/4 w-full">
                <img src="/logo.svg" alt="Logo" className="h-8 hover:cursor-pointer" onClick={() => navigate('/')}/>
                <div className="border border-gray-100 bg-gray-100 px-4 py-2 rounded-[4px] w-3/4 flex items-center gap-2 hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        className="focus:outline-none text-sm bg-transparent"
                    />
                </div>
            </div>
            <div className="items-center space-x-6 lg:flex xl:flex 2xl:flex hidden">
                <div className="text-gray-600 hover:text-gray-800 hover:cursor-pointer gap-2 flex flex-col items-center hover:border-b-2 border-[#0D6EFD]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[25px] w-[25px] hover:fill-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p className="text-xs font-medium">Home</p>
                </div>
                <div className="text-gray-600 hover:text-gray-800 hover:cursor-pointer gap-2 flex flex-col items-center hover:border-b-2 border-[#0D6EFD]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[25px] w-[26px] hover:fill-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 4h5M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs font-medium">Dashboard</p>
                </div>

                <div className="text-gray-600 hover:text-gray-800 hover:cursor-pointer gap-2 flex flex-col items-center hover:border-b-2 border-[#0D6EFD]">
                <img src="/Wallet.svg" alt="Wallet Icon" className="h-[25px] w-[26px]" />
                    <p className="text-xs font-medium">Wallet</p>
                </div>

                <div className="text-gray-600 hover:text-gray-800 hover:cursor-pointer gap-2 flex flex-col items-center hover:border-b-2 border-[#0D6EFD]">
                <img src="/ListChecks.svg" alt="Wallet Icon" className="h-[25px] w-[26px]" />
                    <p className="text-xs font-medium">Plan a trip</p>
                </div>

                <div className="text-gray-600 hover:text-gray-800 hover:cursor-pointer gap-2 flex flex-col items-center hover:border-b-2 border-[#0D6EFD]">
                <img src="/HandCoins.svg" alt="Wallet Icon" className="h-[25px] w-[26px]" />
                    <p className="text-xs font-medium">Commission for life</p>
                </div>

                <div className="h-10 border-l border-gray-300"></div>
                <button className="bg-[#0D6EFD] text-white px-3 py-1 text-xs hover:bg-blue-800 font-medium rounded-md">
                    Subscribe
                </button>

                <div className="text-gray-600 hover:text-gray-800 hover:cursor-pointer gap-2 flex flex-col items-center hover:border-b-2 border-[#0D6EFD]">
                <img src="/Bell.svg" alt="Wallet Icon" className="h-[25px] w-[26px]" />
                    <p className="text-xs font-medium">Notification</p>
                </div>

                <div className="text-gray-600 hover:text-gray-800 hover:cursor-pointer gap-2 flex flex-col items-center hover:border-b-2 border-[#0D6EFD]">
                <img src="/Basket.svg" alt="Wallet Icon" className="h-[25px] w-[26px]" />
                    <p className="text-xs font-medium">Carts</p>
                </div>

                <div className="text-gray-600 hover:text-gray-800 hover:cursor-pointer gap-2 flex flex-col items-center hover:border-b-2 border-[#0D6EFD]">
                <img src="/PlusSquare.svg" alt="Wallet Icon" className="h-[25px] w-[26px]" />
                    <p className="text-xs font-medium">Create</p>
                </div>

                <div className="text-gray-600 hover:text-gray-800 hover:cursor-pointer gap-2 flex items-center" onClick={() => setShowMenu(!showMenu)}>
                    <img src="user.svg" alt="" className="h-[52px] w-[52px]" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[25px] w-[26px] hover:fill-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

            </div>

            {showMenu ? (
                <div className='right-7 bg-white rounded-lg pr-20 shadow-lg p-3 flex flex-col text-justify gap-3 absolute top-24'>
                    <p className='cursor-pointer'>Profile</p>
                    <p className='cursor-pointer'>Settings</p>
                    <p className='cursor-pointer'>Logout</p>
                </div>
            ): null}

            <div className='flex lg:hidden xl:hidden 2xl:hidden'>
            {menuOpen ? <GiCancel onClick={() => setMenuOpen(!menuOpen)} className='w-6 h-6'/>
            : <FaBars onClick={() => setMenuOpen(!menuOpen)} className='w-6 h-6 hover:cursor-pointer'/>}

                {menuOpen ?
                <div>
                    <div className="items-end px-8 py-4 space-y-8 flex flex-col absolute top-16 h-screen right-0 bg-white w-full">
                        <div className="text-gray-600 hover:text-gray-800 hover:cursor-pointer gap-2 flex items-center" onClick={() => {navigate('/'), setMenuOpen(!menuOpen)}}>
                            <img src="House.svg" alt="" className="h-4 w-4" />
                            <p className="text-xs font-medium">Home</p>
                        </div>
                        <div className="text-gray-600 hover:text-gray-800 hover:cursor-pointer gap-2 flex items-center">
                            <img src="ChartPieSlice.svg" alt="" className="h-4 w-4" />
                            <p className="text-xs font-medium">Dashboard</p>
                        </div>

                        <div className="text-gray-600 hover:text-gray-800 hover:cursor-pointer gap-2 flex items-center">
                            <img src="Wallet.svg" alt="" className="h-4 w-4" />
                            <p className="text-xs font-medium">Wallet</p>
                        </div>

                        <div className="text-gray-600 hover:text-gray-800 hover:cursor-pointer gap-2 flex items-center">
                            <img src="ListChecks.svg" alt="" className="h-4 w-4" />
                            <p className="text-xs font-medium">Plan a trip</p>
                        </div>

                        <div className="text-gray-600 hover:text-gray-800 hover:cursor-pointer gap-2 flex items-center">
                            <img src="HandCoins.svg" alt="" className="h-4 w-4" />
                            <p className="text-xs font-medium">Commission for life</p>
                        </div>

                        <div className="text-gray-600 hover:text-gray-800 hover:cursor-pointer gap-2 flex items-center">
                            <img src="Bell.svg" alt="" className="h-4 w-4" />
                            <p className="text-xs font-medium">Notification</p>
                        </div>

                        <div className="text-gray-600 hover:text-gray-800 hover:cursor-pointer gap-2 flex items-center">
                            <img src="Basket.svg" alt="" className="h-4 w-4" />
                            <p className="text-xs font-medium">Carts</p>
                        </div>

                        <div className="text-gray-600 hover:text-gray-800 hover:cursor-pointer gap-2 flex items-center">
                            <img src="PlusSquare.svg" alt="" className="h-4 w-4" />
                            <p className="text-xs font-medium">Create</p>
                        </div>

                        <div className="text-gray-600 hover:text-gray-800 hover:cursor-pointer gap-2 flex items-center">
                            <img src="user.svg" alt="" className="h-4 w-4" />
                            <img src="CaretDown.svg" alt="" className="h-4 w-4" />
                        </div>

                    </div>
                </div>
                : null}
            </div>
        </div>
    );
  };
  
  export default Nav;
  