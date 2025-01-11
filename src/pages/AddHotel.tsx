import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedHotel } from '../redux/hotelSlice'; // Import the action
import hotelsData from '../components/API Responses/Hotels.json';

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
  };
}

const HotelList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      setHotels(hotelsData.data.hotels); // Assuming your JSON has a `data.hotels` structure
    } catch (err) {
      setError('Failed to load hotels data');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleHotelClick = (hotel: Hotel) => {
    // Dispatch the selected hotel to the Redux store
    const hotelToDispatch = {
      hotel_id: hotel.hotel_id,
      image: hotel.property.photoUrls[0],
      name: hotel.property.name,
      address: "Hotel Address", // You can modify this to include a specific address
      rating: `${hotel.property.reviewScore} (${hotel.property.reviewScoreWord})`,
      size: "Hotel Size", // Add the relevant data
      facilities: "Hotel Facilities", // Add the relevant data
      price: `₹${hotel.property.priceBreakdown.grossPrice.value}`,
      checkIn: "Check-in Time", // Add the relevant data
      checkOut: "Check-out Time", // Add the relevant data
      totalPrice: `₹${hotel.property.priceBreakdown.grossPrice.value}`,
    };
    dispatch(setSelectedHotel(hotelToDispatch));
  };

  if (loading) return <p>Loading hotels...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="w-full px-10 mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Hotels in Mumbai</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.hotel_id}
            className="border rounded-lg overflow-hidden border-gray-300 cursor-pointer"
            onClick={() => handleHotelClick(hotel)} // Dispatch the selected hotel on click
          >
            <img
              src={hotel.property.photoUrls[0]}
              alt={hotel.property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{hotel.property.name}</h2>
              <p className="text-gray-600">Rating: {hotel.property.reviewScore} ({hotel.property.reviewScoreWord})</p>
              <p className="mt-2">
                <strong>Price: </strong>₹{hotel.property.priceBreakdown.grossPrice.value} per night
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
