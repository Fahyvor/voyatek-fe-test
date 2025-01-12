import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedHotel } from '../redux/hotelSlice';
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
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      setHotels(hotelsData.data.hotels); // Assuming your JSON has a `data.hotels` structure
      setFilteredHotels(hotelsData.data.hotels); // Initialize the filtered list
    } catch (err) {
      setError('Failed to load hotels data');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    // Filter hotels by matching the query to name, rating, or price
    const filtered = hotels.filter((hotel) => {
      const { name, reviewScore, priceBreakdown } = hotel.property;
      const price = priceBreakdown.grossPrice.value.toString();
      return (
        name.toLowerCase().includes(query.toLowerCase()) ||
        reviewScore.toString().includes(query) ||
        price.includes(query)
      );
    });

    setFilteredHotels(filtered);
  };

  const handleHotelClick = (hotel: Hotel) => {
    const hotelToDispatch = {
      hotel_id: hotel.hotel_id,
      image: hotel.property.photoUrls[0],
      name: hotel.property.name,
      address: "Hotel Address",
      rating: `${hotel.property.reviewScore} (${hotel.property.reviewScoreWord})`,
      size: "Hotel Size",
      facilities: "Hotel Facilities",
      price: `₹${hotel.property.priceBreakdown.grossPrice.value}`,
      checkIn: "Check-in Time",
      checkOut: "Check-out Time",
      totalPrice: `₹${hotel.property.priceBreakdown.grossPrice.value}`,
    };
    dispatch(setSelectedHotel(hotelToDispatch));
  };

  if (loading) return <p>Loading hotels...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="w-full px-10 mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Hotels in Mumbai</h1>

      {/* Search Input */}
      <div className="mb-6">
        <p className='font-bold text-2xl text-[#0D6EFD] '>Search Hotel</p>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by name, rating, or price..."
          className="w-full my-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bg-[#0D6EFD] "
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredHotels.map((hotel) => (
          <div
            key={hotel.hotel_id}
            className="border rounded-lg overflow-hidden border-gray-300 cursor-pointer"
            onClick={() => handleHotelClick(hotel)}
          >
            <img
              src={hotel.property.photoUrls[0]}
              alt={hotel.property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{hotel.property.name}</h2>
              <p className="text-gray-600 flex items-center">
                Rating: <img src='/Star.svg' alt='' className="h-4 mx-1" /> {hotel.property.reviewScore} ({hotel.property.reviewScoreWord})
              </p>
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
