interface ActivitiesArray {
  image: string;
  name: string;
  description: string;
  rating: string;
  size: string;
  time: string;
  date: string;
  included: string;
  day: string;
  price: string;
}

interface Props {
  activitiesArray: ActivitiesArray[];
}

const Activities = ({ activitiesArray }: Props) => {
  return (
    <div className="bg-[#0D6EFD] p-4 mx-6 mt-7">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <img src="/RoadHorizon(1).svg" alt="" className="" />
          <p className="font-semibold text-white text-sm">Activities</p>
        </div>
        <div className="text-xs hover:bg-gray-300 bg-white rounded-lg py-3 px-6 text-[#0D6EFD] font-semibold hover:cursor-pointer">
          <p>Add Activities</p>
        </div>
      </div>

      <div className="">
        {activitiesArray.map((activities, index) => (
          <div key={index} className="flex gap-3 items-center hover:bg-gray-200 outline-[#344054] bg-white lg:pl-4 md:px-4 lg:px-0 pl-0 h-full w-full my-4">
            <div className="flex rounded-lg gap-3 w-full items-center">
              <div className="flex flex-1 lg:flex-row flex-col gap-4">
                {/* Activities Image */}
                <div className="activities_image flex items-center lg:w-1/6 my-4">
                  <img src={activities.image} alt="" className="object-cover w-full h-full"/>
                </div>

                {/* Activities Details */}
                <div className="activities_details w-5/6 flex flex-col gap-1 my-3">
                  <div className="flex justify-between lg:flex-row md:flex-row flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-2xl">{activities.name}</p>
                      <p className="text-md font-medium w-5/6">{activities.description}</p>

                      <hr className="w-full border border-gray-200 flex lg:hidden md:hidden" />

                      <div className="hidden lg:flex md:flex gap-5 items-center">
                        <div className="flex gap-2 items-center">
                          <img src="/MapPin.svg" alt=""  className="" />
                          <p className="font-medium text-[#0D6EFD]">Directions</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <img src="/Star.svg" alt="" className="" />
                          <p>{activities.rating}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <img src="/time.svg" alt="" className="" />
                          <p>{activities.size}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2  g:items-end md:items-end items-start">
                      <p className="text-2xl font-semibold"><span className="line-through">N</span>{activities.price}</p>
                      <p className="font-medium">{activities.time} on {activities.date}</p>
                    </div>
                  </div>

                  <hr className="w-full border border-gray-200 hidden lg:flex md:flex" />

                  <div className="hidden lg:flex md:flex justify-between">
                    <div className="flex gap-3 items-center">
                      <p>What&apos;s included: {activities.included}</p>
                      <div className="flex gap-3 items-center">
                        <p className="font-xs lg:font-md font-medium text-nowrap text-[#0D6EFD] hover:cursor-pointer">See More</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="flex gap-3 items-center">
                        <p className="text-white bg-[#0D6EFD] text-nowrap py-1 rounded-md text-xs px-6">Day {activities.day}</p>
                        <img src="/CaretUpDown.svg" alt="" className="" />
                      </div>
                    </div>
                  </div>

                  <hr className="w-full border border-gray-200" />

                  <div className="flex justify-between items-center text-[#0D6EFD] hover:cursor-pointer">
                    <div className="flex gap-5 items-center">
                      <p className="hover:cursor-pointer">Activity details</p>
                      <p className="hover:cursor-pointer">Price details</p>
                    </div>
                    <div className="hover:cursor-pointer">Edit details</div>
                  </div>
                </div>
              </div>

              {/* Cancel Button */}
              <div className="delete_ticket bg-[#FBEAE9] h-full flex-col hidden lg:flex py-[10%] px-2 hover:cursor-pointer">
                <img src="/X.svg" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Activities