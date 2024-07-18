import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginStart } = userSlice.actions;

export default userSlice.reducer;
