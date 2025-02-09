import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  location: string;
  user_type:string;
  bio: string;
  profession: string;
  profile_picture: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
