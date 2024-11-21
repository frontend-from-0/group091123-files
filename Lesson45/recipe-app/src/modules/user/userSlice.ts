import { createSlice } from "@reduxjs/toolkit";

interface UserDetails {
  email?: string;
  username?: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userDetails: {} as UserDetails,
  },
  reducers: {
    login: (state, action) => {
      // TODO: check that action.payload.email and action.payload.password are correct
      state.isLoggedIn = true;
      state.userDetails.email = action.payload.email;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions;

export default userSlice.reducer;
