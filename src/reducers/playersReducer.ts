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
  name: 'players',
  initialState,
  reducers: {
    getAllPlayers(state) {
      return state;
    },
  },
});

export const { getAllPlayers } = playersSlice.actions;
export default playersSlice.reducer;
