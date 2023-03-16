import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  count: 0,
};

export const getUserData = createAsyncThunk('user/getUser', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
});

export const login = createAsyncThunk('user/login', async (email, password) => {
  const response = await axios.post('url', {
    email: email,
    password: password,
  });
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    makeCountFive: (state, action) => {
      state.count = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.error = 'Hata oluştu';
        state.isLoading = false;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});
export const { makeCountFive } = userSlice.actions;
export default userSlice.reducer;
