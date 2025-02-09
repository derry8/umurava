import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export type Status = 'open' | 'closed' | 'ongoing';  

export type Challenge = {
  id: string;
  title: string;
  status: Status;
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
  createdAt: string;
};

// Define the type for the API response to avoid using 'any'
type ChallengeApiResponse = {
  _id: string;
  challenge_name: string;
  status: string; // You can type this as 'open', 'closed', or 'ongoing' if needed
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
  createdAt: string;
};

interface ChallengesState {
  challenges: Challenge[] | null;
  loading: boolean;
}

const initialState: ChallengesState = {
  challenges: null,
  loading: false,
};

// Async thunk to fetch challenges from the backend
export const fetchChallenges = createAsyncThunk(
  'challenges/fetchChallenges',
  async () => {
    const response = await axios.get("http://localhost:8000/umurava/challenges");

    // Mapping the response data with the correct types
    const formattedChallenges = response.data.challenges.map((challenge: ChallengeApiResponse) => ({
      id: challenge._id,
      title: challenge.challenge_name,
      status: challenge.status as Status,
      skills: challenge.skills_needed,
      seniority: challenge.seniority_level,
      timeline: challenge.duration,
      deadline: challenge.deadline,
      prize: challenge.money_prize,
      contactEmail: challenge.contact_email,
      projectDescription: challenge.project_description,
      projectBrief: challenge.project_brief,
      projectRequirements: challenge.project_requirements,
      category: challenge.challenge_category,
      deliverable: challenge.deliverables,
      createdAt: challenge.createdAt,
    }));

    return formattedChallenges;
  }
);

const challengesSlice = createSlice({
  name: 'challenges',
  initialState,
  reducers: {
    setChallenges(state, action: PayloadAction<Challenge[]>) {
      state.challenges = action.payload;
    },
    clearChallenges(state) {
      state.challenges = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChallenges.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChallenges.fulfilled, (state, action) => {
        state.loading = false;
        state.challenges = action.payload;
      })
      .addCase(fetchChallenges.rejected, (state) => {
        state.loading = false;
        // Removed handling of 'error' as it's no longer being used
      });
  },
});

export const { setChallenges, clearChallenges } = challengesSlice.actions;

export default challengesSlice.reducer;
