import { createSlice } from '@reduxjs/toolkit';
import { Results } from '../../types/types';

const choiceSlice = createSlice({
  name: 'choice',
  initialState: { choice: <Results[]>[] },
  reducers: {
    add: (state, action) => {
      state.choice.push(action.payload);
    },
    del: (state, action) => {
      state.choice = state.choice.filter(
        (item) => item.name !== action.payload
      );
    },
    clear: (state) => {
      state.choice.length = 0;
    },
  },
});

export const { add, del, clear } = choiceSlice.actions;
export default choiceSlice.reducer;
