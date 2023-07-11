import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedUser: (state, action) => {
      state.loggedUser = action.payload;
    },
    logout: (state) => {
      state.loggedUser = null;
    },
  },
});

export const { loggedUser, logout } = userSlice.actions;

export default userSlice.reducer;
