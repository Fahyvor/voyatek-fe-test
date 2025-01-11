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
        <div className="text-sm bg-white rounded-lg py-3 px-6 text-[#0D6EFD] font-semibold cursor-pointer">
          <p>Add Activities</p>
        </div>
      </div>

      <div className="">
        {activitiesArray.map((activities, index) => (
          <div key={index} className="flex gap-3 items-center bg-white pl-4 w-full my-4">
            <div className="flex bg-white rounded-lg gap-3 w-full items-center">
              <div className="activities_image flex items-center lg:w-1/6">
                <img src={activities.image} alt="" className="object-cover w-full h-full"/>
              </div>

              <div className="activities_details py-3 w-5/6 flex flex-col gap-1">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-2xl">{activities.name}</p>
                    <p className="text-md font-medium w-5/6">{activities.description}</p>

                    <div className="flex gap-5 items-center">
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
                  <div className="flex flex-col gap-2  items-end">
                    <p className="text-2xl font-semibold"><span className="line-through">N</span>{activities.price}</p>
                    <p className="font-medium">{activities.time} on {activities.date}</p>
                  </div>
                </div>

                <hr className="w-full border border-gray-200" />

                <div className="flex justify-between">
                  <div className="flex gap-3 items-center">
                    <p>What&apos;s included: {activities.included}</p>
                    <div className="flex gap-3 items-center">
                      <p className="font-medium text-[#0D6EFD]">See More</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex gap-3 items-center">
                      <p className="text-white bg-[#0D6EFD] py-1 rounded-md px-6">Day {activities.day}</p>
                      <img src="/CaretUpDown.svg" alt="" className="" />
                    </div>
                  </div>
                </div>

                <hr className="w-full border border-gray-200" />

                <div className="flex justify-between py-3 items-center text-[#0D6EFD]">
                  <div className="flex gap-5 items-center">
                    <p>Activity details</p>
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

export default Activities