import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the shape of the challenge details data
export type ChallengeDetails = {
  _id: string;
  challenge_name: string;
  skills_needed: string[];
  seniority_level: string;
  duration: string;
  deadline: string;
  status: string;
  money_prize: number;
  contact_email: string;
  project_description: string;
  project_brief: string;
  project_requirements: string;
  challenge_category: string;
  deliverables: string;
};

interface ChallengeDetailsState {
  challengeDetails: ChallengeDetails | null;
  loading: boolean;
}

const initialState: ChallengeDetailsState = {
  challengeDetails: null,
  loading: false,
};

// Create async thunk to fetch challenge details by id
export const fetchChallengeDetails = createAsyncThunk(
  'challengeDetails/fetchChallengeDetails',
  async (id: string) => {
    const response = await axios.get(`https://umurava-nkeh.onrender.com/umurava/challenges/${id}`);
    return response.data.challenge; // Ensure this matches the structure returned from the API
  }
);

const challengeDetailsSlice = createSlice({
  name: 'challengeDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChallengeDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChallengeDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.challengeDetails = action.payload;
      })
      .addCase(fetchChallengeDetails.rejected, (state) => {
        state.loading = false;
        // Removed 'error' handling since it's no longer being used
      });
  },
});

export default challengeDetailsSlice.reducer;
