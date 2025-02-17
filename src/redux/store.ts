import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from './hotelSlice';
import flightsReducer from './flightsSlice';

const store = configureStore({
  reducer: {
    hotel: hotelReducer,
    flights: flightsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
