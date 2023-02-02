import { createSlice } from '@reduxjs/toolkit';
import { Players } from '../app/types';

const initialState: Players = {
  characters: [{
    isVisible: true,
    active: true,
    type: 'boris',
    name: 'Борис',
    img: 'characters/boris.png',
    playerName: '',
    description: 'Невероятно здоровый и выносливый: в начале игры у него на две жизни больше, чем у остальных',
    count: 1,
    health: 5,
    inventory: [],
  },
  {
    isVisible: true,
    active: true,
    type: 'sasha',
    name: 'Саша',
    img: 'characters/sasha.png',
    playerName: '',
    description: 'Увлекается боевыми искусствами: у него всегда есть с собой нож (можно использовать его в любой момент, как если бы у Саши была такая карточка оружия).',
    count: 1,
    health: 3,
    inventory: [],
  },],
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
