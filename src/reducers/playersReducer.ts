import { createSlice } from '@reduxjs/toolkit';
import { Players } from '../app/types';

const initialState: Players = {
  characters: [{
    playerName: '',
    name: '',
    health: 3,
    inventory: [],
  }],
  active: '',
};

const playersSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getAllPlayers(state, action) {
      return state;
    },
  },
});

export const { getAllPlayers } = playersSlice.actions;
export default playersSlice.reducer;
