import { createSlice } from '@reduxjs/toolkit';
import { EnemyType } from '../app/types';

type InitialState = {
  enemies: EnemyType[]
  playerName: string
  active: string
};

const initialState: InitialState = {
  enemies: [],
  playerName: '',
  active: '',
};

const enemySlice = createSlice({
  name: 'enemy',
  initialState,
  reducers: {
    addEnemyToBoard(state, actions: {
      payload: EnemyType; type: string;
    }) {
      return { ...state, enemies: state.enemies.concat(actions.payload) };
    },
  },
});

export const { addEnemyToBoard } = enemySlice.actions;
export default enemySlice.reducer;
