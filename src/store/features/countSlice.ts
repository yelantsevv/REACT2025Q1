import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 0 };

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    add: (state, action) => {
      state.count += action.payload;
    },
    del: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const { add, del } = countSlice.actions;
export default countSlice.reducer;
