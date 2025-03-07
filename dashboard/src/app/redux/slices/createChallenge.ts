import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the type for the challenge data being sent to the backend
export interface ChallengeData {
  challenge_name: string;
  skills_needed: string[];
  seniority_level: string;
  duration: string;
  deadline: string;
  status: string;  // Added required field
  money_prize: number;
  contact_email: string;
  project_description: string;
  project_brief: string;
  project_requirements: string;
  challenge_category: string;
  deliverables: string;
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
      const response = await axios.post(
        'https://umurava-nkeh.onrender.com/umurava/challenges/create',
        challengeData
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
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
      });
  },
});

export default createChallengeSlice.reducer;
