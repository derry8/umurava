import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Challenge, initialState } from '@/app/types/index';


interface BackendChallenge {
  _id: string;
  challenge_name: string;
  status: string;
  skills_needed: string[];
  seniority_level: string;
  duration: string;
  createdAt: string;
}

// Define the async thunk to fetch challenges
export const fetchChallenges = createAsyncThunk<Challenge[], void>(
  'challenges/fetchChallenges',
  async () => {
    const response = await fetch('http://localhost:8000/umurava/challenges');
    
    if (!response.ok) {
      throw new Error('Failed to fetch challenges');
    }
    
    const data = await response.json();
    console.log('Fetched challenges response:', data);
    
    // Map backend data to match your Redux state types
    return data.challenges.map((backendChallenge: BackendChallenge) => ({
      id: backendChallenge._id,
      title: backendChallenge.challenge_name,
      status: backendChallenge.status.charAt(0).toUpperCase() + backendChallenge.status.slice(1),
      skillsNeeded: backendChallenge.skills_needed,
      seniority: backendChallenge.seniority_level,
      timeline: backendChallenge.duration,
      createdAt: backendChallenge.createdAt,
    }));
  }
);

const challengesSlice = createSlice({
  name: 'challenges',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChallenges.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchChallenges.fulfilled, (state, action: PayloadAction<Challenge[]>) => {
        state.status = 'succeeded';
        state.challenges = action.payload;
      })
      .addCase(fetchChallenges.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export default challengesSlice.reducer;
