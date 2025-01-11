import React, { useState, useEffect } from 'react';

// Import the JSON data
import hotelsData from '../components/API Responses/Hotels.json';

// Define types for the hotel data
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

  useEffect(() => {
    try {
      // Load the local JSON data
      setHotels(hotelsData.data.hotels);
    } catch (err) {
      setError('Failed to load hotels data');
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return <p>Loading hotels...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="w-full px-10 mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Hotels in Mumbai</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hotels.map((hotel) => (
          <div key={hotel.hotel_id} className="border rounded-lg overflow-hidden border-gray-300"
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
