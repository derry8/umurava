import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface DeleteChallengeState {
  loading: boolean;
  success: boolean;
}

const initialState: DeleteChallengeState = {
  loading: false,
  success: false,
};

// Async thunk to delete a challenge
export const deleteChallenge = createAsyncThunk(
  'deleteChallenge/deleteChallenge',
  async (challengeId: string) => {
    await axios.delete(`http://localhost:8000/umurava/challenges/${challengeId}`);
    return challengeId; // Return the ID to identify the deleted challenge
  }
);

const deleteChallengeSlice = createSlice({
  name: 'deleteChallenge',
  initialState,
  reducers: {
    resetDeleteState(state) {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteChallenge.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteChallenge.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(deleteChallenge.rejected, (state) => {
        state.loading = false;
        // Removed error handling logic
      });
  },
});

export const { resetDeleteState } = deleteChallengeSlice.actions;

export default deleteChallengeSlice.reducer;
