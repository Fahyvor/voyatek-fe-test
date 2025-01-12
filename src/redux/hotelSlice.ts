import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the types for the hotel data
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
  selectedHotels: HotelProps[]; // Update this to an array
}

// Initial state
const initialState: HotelState = {
  hotels: [],
  selectedHotels: [], // Initialize as an empty array
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
    // Set the selected hotels (overwrite the array)
    setSelectedHotels: (state, action: PayloadAction<HotelProps[]>) => {
      state.selectedHotels = action.payload;
    },
    // Add a single hotel to selectedHotels
    addSelectedHotel: (state, action: PayloadAction<HotelProps>) => {
      const isAlreadySelected = state.selectedHotels.some(
        hotel => hotel.name === action.payload.name
      );
      if (!isAlreadySelected) {
        state.selectedHotels.push(action.payload);
      }
    },
    // Remove a hotel from selectedHotels by name
    removeSelectedHotel: (state, action: PayloadAction<string>) => {
      state.selectedHotels = state.selectedHotels.filter(
        hotel => hotel.name !== action.payload
      );
    },
    // Clear the selectedHotels array
    clearSelectedHotels: (state) => {
      state.selectedHotels = [];
    },
  },
});

// Export actions for use in components
export const {
  setHotels,
  addHotel,
  removeHotel,
  setSelectedHotels,
  addSelectedHotel,
  removeSelectedHotel,
  clearSelectedHotels,
} = hotelSlice.actions;

// Export the reducer to configure the store
export default hotelSlice.reducer;
