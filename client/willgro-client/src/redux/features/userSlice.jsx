import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: {} };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value = {};
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
