import React from 'react'

const Nav: React.FC = () => {
    return (
        <div className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-20">
            <div className="flex items-center space-x-4 lg:w-1/4 md:w-1/4 w-full">
                <img src="/logo.svg" alt="Logo" className="h-8" />
                <div className="border border-gray-100 bg-gray-100 px-4 py-2 rounded-[4px] w-3/4 flex items-center gap-2">
                    <img src="/search.svg" alt="Logo" className="h-3" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="focus:outline-none text-sm bg-transparent"
                    />
                </div>
            </div>
            <div className="flex items-center space-x-6">
                <div className="text-gray-600 hover:text-gray-800 cursor-pointer gap-2 flex flex-col items-center">
                    <img src="House.svg" alt="" className="h-4 w-4" />
                    <p className="text-xs font-medium">Home</p>
                </div>
                <div className="text-gray-600 hover:text-gray-800 cursor-pointer gap-2 flex flex-col items-center">
                    <img src="ChartPieSlice.svg" alt="" className="h-4 w-4" />
                    <p className="text-xs font-medium">Dashboard</p>
                </div>

                <div className="text-gray-600 hover:text-gray-800 cursor-pointer gap-2 flex flex-col items-center">
                    <img src="Wallet.svg" alt="" className="h-4 w-4" />
                    <p className="text-xs font-medium">Wallet</p>
                </div>

                <div className="text-gray-600 hover:text-gray-800 cursor-pointer gap-2 flex flex-col items-center">
                    <img src="ListChecks.svg" alt="" className="h-4 w-4" />
                    <p className="text-xs font-medium">Plan a trip</p>
                </div>

                <div className="text-gray-600 hover:text-gray-800 cursor-pointer gap-2 flex flex-col items-center">
                    <img src="HandCoins.svg" alt="" className="h-4 w-4" />
                    <p className="text-xs font-medium">Commission for life</p>
                </div>

                <div className="h-10 border-l border-gray-300"></div>
                <button className="bg-[#0D6EFD] text-white px-3 py-1 text-md font-medium rounded-md">
                    Subscribe
                </button>

                <div className="text-gray-600 hover:text-gray-800 cursor-pointer gap-2 flex flex-col items-center">
                    <img src="Bell.svg" alt="" className="h-4 w-4" />
                    <p className="text-xs font-medium">Notification</p>
                </div>

                <div className="text-gray-600 hover:text-gray-800 cursor-pointer gap-2 flex flex-col items-center">
                    <img src="Basket.svg" alt="" className="h-4 w-4" />
                    <p className="text-xs font-medium">Carts</p>
                </div>

                <div className="text-gray-600 hover:text-gray-800 cursor-pointer gap-2 flex flex-col items-center">
                    <img src="PlusSquare.svg" alt="" className="h-4 w-4" />
                    <p className="text-xs font-medium">Create</p>
                </div>

                <div className="text-gray-600 hover:text-gray-800 cursor-pointer gap-2 flex items-center">
                    <img src="user.svg" alt="" className="h-4 w-4" />
                    <img src="CaretDown.svg" alt="" className="h-4 w-4" />
                </div>

            </div>
        </div>
    );
  };
  
  export default Nav;
  