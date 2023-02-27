import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  value: {
    num: number
  },
  isNearbyEnemy: { id: string, type: string }[] | null,
  active: boolean,
  ranges: {
    range: number[],
    value: number,
    type: 'run' | 'bit' | 'sword' | 'aim',
  }[],
};

const initialState: InitialState = {
  value: { num: 0 },
  isNearbyEnemy: null,
  active: true,
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
    decrementSpinnerValue(state, actions: {
      payload: number ;
      type: string;
    }) {
      return { ...state, value: { num: state.value.num - actions.payload } };
    },
    setSpinnerValue(state, actions: {
      payload: { num: number };
      type: string;
    }) {
      return { ...state, value: actions.payload };
    },
    setIsNearEnemy(state, actions: {
      payload: { id: string, type: string }[] | null; type: string;
    }) {
      return { ...state, isNearbyEnemy: actions.payload };
    },
    setIsSpinnerActive(state, actions: {
      payload: boolean; type: string;
    }) {
      return { ...state, active: actions.payload };
    },
  },
});

export const {
  decrementSpinnerValue, setSpinnerValue, setIsNearEnemy, setIsSpinnerActive,
} = spinnerSlice.actions;
export default spinnerSlice.reducer;
