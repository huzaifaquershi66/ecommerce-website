// src/store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserDetails = {
  email: string | number;
  firstname: string;
  lastname: string;
  address: string;
  apartment: string;
  city: string;
  postalcode?: string;
  phone: string;
};

interface UserState {
  details: UserDetails | null;
}

const initialState: UserState = {
  details: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails(state, action: PayloadAction<UserDetails>) {
      state.details = action.payload;
    },
    clearUserDetails(state) {
      state.details = null;
    },
  },
});

export const { setUserDetails, clearUserDetails } = userSlice.actions;

export default userSlice.reducer;
