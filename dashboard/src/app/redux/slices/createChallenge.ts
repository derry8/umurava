import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the type for the challenge data being passed to the backend
export interface ChallengeData {
  title: string;
  skills: string[];
  seniority: string;
  timeline: string;
  deadline: string;
  prize: number;
  contactEmail: string;
  projectDescription: string;
  projectBrief: string;
  projectRequirements: string;
  category: string;
  deliverable: string;
}

interface CreateChallengeState {
  loading: boolean;
  successMessage: string | null;
}

const initialState: CreateChallengeState = {
  loading: false,
  successMessage: null,
};

// Async thunk to create a challenge
export const createChallenge = createAsyncThunk(
  'createChallenge/createChallenge',
  async (challengeData: ChallengeData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://umurava-nkeh.onrender.com/umurava/challenges/create', challengeData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // AxiosError is properly typed
        return rejectWithValue(error.response?.data || 'An unexpected error occurred');
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);

const createChallengeSlice = createSlice({
  name: 'createChallenge',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createChallenge.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
      })
      .addCase(createChallenge.fulfilled, (state) => {
        state.loading = false;
        state.successMessage = 'Challenge created successfully!';
      })
      .addCase(createChallenge.rejected, (state) => {
        state.loading = false;
        // No need to store the error, so we do nothing here
      });
  },
});

export default createChallengeSlice.reducer;
