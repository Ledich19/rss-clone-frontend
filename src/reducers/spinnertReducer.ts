import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 3,
  ranges: [
    {
      range: [0, 30],
      value: 1,
      type: 'run',
    },
    {
      range: [30, 60],
      value: 2,
      type: 'bit',
    },
    {
      range: [60, 80],
      value: 3,
      type: 'sword',
    },
    {
      range: [80, 100],
      value: 4,
      type: 'aim',
    },
  ],
};

const spinnerSlice = createSlice({
  name: 'spinner',
  initialState,
  reducers: {
    decrementSpinerValue(state, actions: {
      payload: number;
      type: string;
    }) {
      return { ...state, value: state.value - actions.payload };
    },
  },
});

export const { decrementSpinerValue } = spinnerSlice.actions;
export default spinnerSlice.reducer;
