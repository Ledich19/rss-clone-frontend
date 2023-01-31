import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  characters: [{
    type: '',
    position: '',
  }],
  active: '',
};

const enemySlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getAllEnemy(state, action) {
      return state;
    },
  },
});

export const { getAllEnemy } = enemySlice.actions;
export default enemySlice.reducer;
