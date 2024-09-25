import { configureStore } from '@reduxjs/toolkit';
import { cardSlice } from './cart-slice';

configureStore({
  reducer: {
    card: cardSlice.reducer,
  },
});
