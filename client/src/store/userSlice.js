import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { email: "", auth: false },
  reducers: {
    login(state, action) {
      state.email = action.payload;
      state.auth = true;
    },
    logout(state) {
      state.email = "";
      state.auth = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
