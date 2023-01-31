import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  characters: [{
    type: '',
    position: '',
  }],
  active: '',
};

const enemySlice = createSlice({
  name: 'enemy',
  initialState,
  reducers: {
    getAllEnemy(state) {
      return state;
    },
  },
});

export const { getAllEnemy } = enemySlice.actions;
export default enemySlice.reducer;
