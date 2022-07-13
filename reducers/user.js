import { createSlice } from "@reduxjs/toolkit";

const dummyUser = {
  id: 1,
  nickname: "유저1",
  Posts: [],
};

export const initialState = {
  isLoggedIn: false,
};

export const LOG_IN = "LOG_IN";

const userSlice = createSlice({
  name: "user-authentication",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
