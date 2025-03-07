import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the structure of the challenge data (replace this with your actual structure)
export interface ChallengeData {
  challenge_name: string;
  status: 'open' | 'closed' | 'ongoing';
  skills_needed: string[];
  seniority_level: string;
  duration: string;
  deadline: string;
  money_prize: number;
  contact_email: string;
  project_description: string;
  project_brief: string;
  project_requirements: string;
  challenge_category: string;
  deliverables: string;
}


// Initial state for editing challenge
interface EditChallengeState {
  loading: boolean;
  error: string | null;
  successMessage: string | null;
}

const initialState: EditChallengeState = {
  loading: false,
  error: null,
  successMessage: null,
};

// Thunk to handle updating the challenge
export const updateChallenge = createAsyncThunk(
  'challenge/updateChallenge',
  async (
    { id, challengeData }: { id: string; challengeData: ChallengeData },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.put(
        `https://umurava-nkeh.onrender.com/umurava/challenges/${id}`,
        challengeData
      );
      return response.data;
    } catch (error: unknown) {
      // Handle error as `unknown` and type-check it
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Something went wrong');
    }
  }
);

const editChallengeSlice = createSlice({
  name: 'editChallenge',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateChallenge.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.error = null;
      })
      .addCase(updateChallenge.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
        state.error = null;
      })
      .addCase(updateChallenge.rejected, (state, action) => {
        state.loading = false;
        state.successMessage = null;
        state.error = action.payload as string;
      });
  },
});

export default editChallengeSlice.reducer;
