import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Airplane {
  id: number;
  type: string;
  airline: string;
  refNo: string;
  departure: string;
  arrival: string;
  departureDate: string;
  arrivalDate: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  baggage: string;
  cabinBaggage: string;
  entertainment: string;
  meal: string;
  usb: string;
  price: string;
}

interface FlightsState {
  airplanes: Airplane[];
  selectedFlights: Airplane[];
}

const initialState: FlightsState = {
  airplanes: [],
  selectedFlights: [],
};

const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    setFlights: (state, action: PayloadAction<Airplane[]>) => {
      state.airplanes = action.payload;
    },
    addFlight: (state, action: PayloadAction<Airplane>) => {
      state.airplanes.push(action.payload);
    },
    removeFlight: (state, action: PayloadAction<number>) => {
      state.airplanes = state.airplanes.filter(flight => flight.id !== action.payload);
    },
    setSelectedFlights: (state, action: PayloadAction<Airplane[]>) => {
      state.selectedFlights = action.payload;
    },
    removeSelectedFlight: (state, action: PayloadAction<number>) => {
      state.selectedFlights = state.selectedFlights.filter(flight => flight.id !== action.payload);
    },
  },
});

export const { setFlights, addFlight, removeFlight, setSelectedFlights, removeSelectedFlight } = flightsSlice.actions;
export default flightsSlice.reducer;
