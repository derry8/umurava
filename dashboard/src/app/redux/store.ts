import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import challengesReducer from './slices/challengeSlice';
import createChallengeReducer from './slices/createChallenge'; // Import the new reducer
import challengeDetailsReducer from './slices/challengeDetails'; 
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import  deleteChallengeReducer  from './slices/deleteChallenge';
import editChallengeReducer from './slices/editChallenge'

const persistConfig = {
  key: 'root',
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    challenges: challengesReducer,
    createChallenge: createChallengeReducer, // Add createChallenge slice here
    challengeDetails: challengeDetailsReducer,
    deleteChallenge: deleteChallengeReducer,
    editChallenge: editChallengeReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
