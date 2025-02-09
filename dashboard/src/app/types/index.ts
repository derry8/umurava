export type Status = 'open' | 'closed' | 'ongoing';  // Correct Status

export type Challenge = {
  id: string;
  title: string;
  status: Status;
  skills: string[];
  seniority: string;
  timeline: string;
  logo?: string;  
  createdAt: string;
};

export type ChallengeCardProps = {
  challenge: Challenge;
};
