import { configureStore } from '@reduxjs/toolkit';
import challengesReducer from './challengesSlice';

const store = configureStore({
  reducer: {
    challenges: challengesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
