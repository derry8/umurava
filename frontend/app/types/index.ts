export type Status = 'Open' | 'Closed' | 'In Progress';

export type Challenge = {
  id: string;
  title: string;  // Rename from title to match the backend field challenge_name
  status: Status;
  skillsNeeded: string[];  // Rename from skillsNeeded to match the backend field skills_needed
  seniority: string;  // Rename from seniority to match the backend field seniority_level
  timeline: string;  // Rename from timeline to match the backend field duration
  logo: string;
  createdAt: string;  // Add the createdAt field as required
};

export type ChallengeCardProps = {
  challenge: Challenge;
};

export interface ChallengesState {
  challenges: Challenge[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const initialState: ChallengesState = {
  challenges: [],
  status: 'idle',
  error: null,
};
