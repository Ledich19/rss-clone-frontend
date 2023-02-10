import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  type: string,
  text: string,
};

const initialState: InitialState = {
  type: '',
  text: '',
};

const notifySlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    setNotify(state, action) {
      return action.payload;
    },
    removeNotify(state) {
      return { ...state, type: '', text: '' };
    },
  },
});

export const { setNotify, removeNotify } = notifySlice.actions;
export default notifySlice.reducer;
