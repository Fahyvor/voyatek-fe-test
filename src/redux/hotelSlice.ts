import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the types for the hotel data.
interface HotelProps {
  image: string;
  name: string;
  address: string;
  rating: string;
  size: string;
  facilities: string;
  price: string;
  checkIn: string;
  checkOut: string;
  totalPrice: string;
}

interface HotelState {
  hotels: HotelProps[];
  selectedHotel: HotelProps | null; // Field to store the selected hotel
}

// Initial state
const initialState: HotelState = {
  hotels: [],
  selectedHotel: null, // Initialize as null
};

// Create the hotel slice
const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    // Set the hotels array
    setHotels: (state, action: PayloadAction<HotelProps[]>) => {
      state.hotels = action.payload;
    },
    // Add a single hotel
    addHotel: (state, action: PayloadAction<HotelProps>) => {
      state.hotels.push(action.payload);
    },
    // Remove a hotel by name
    removeHotel: (state, action: PayloadAction<string>) => {
      state.hotels = state.hotels.filter(hotel => hotel.name !== action.payload);
    },
    // Set the selected hotel
    setSelectedHotel: (state, action: PayloadAction<HotelProps>) => {
      state.selectedHotel = action.payload;
    },
    // Clear the selected hotel
    clearSelectedHotel: (state) => {
      state.selectedHotel = null;
    },
  },
});

// Export actions for use in components
export const { setHotels, addHotel, removeHotel, setSelectedHotel, clearSelectedHotel } = hotelSlice.actions;

// Export the reducer to configure the store
export default hotelSlice.reducer;
