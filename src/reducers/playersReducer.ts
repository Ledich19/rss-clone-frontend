import { createSlice } from '@reduxjs/toolkit';
import { Players } from '../app/types';

const initialState: Players = {
  characters: [
    {
      category: 'character',
      isVisible: true,
      active: true,
      type: 'boris',
      name: 'Борис',
      img: 'characters/boris.png',
      playerName: '',
      description: 'Невероятно здоровый и выносливый: в начале игры у него на две жизни больше, чем у остальных',
      count: 1,
      health: 5,
      inventory: [{
        category: 'weapon',
        isVisible: false,
        type: 'axe',
        name: 'Топор',
        img: 'weapon/axe.png',
        description: 'Холодное оружие: может убить монстра, если вертушка показывает перекрещенные шпаги.',
        use: 'sword',
        count: 1,
      }],
    },
    {
      isVisible: true,
      category: 'character',
      active: true,
      type: 'sasha',
      name: 'Саша',
      img: 'characters/sasha.png',
      playerName: '',
      description: 'Увлекается боевыми искусствами: у него всегда есть с собой нож (можно использовать его в любой момент, как если бы у Саши была такая карточка оружия).',
      count: 1,
      health: 3,
      inventory: [{
        category: 'thing',
        isVisible: false,
        type: 'plank',
        name: 'Доски',
        img: 'things/plank.png',
        description: 'С их помощью можно забить окно или дверь. Для этого, пройдя через дверь или окно, игрок кладёт карточку досок (найденную раньше) на клетку с изображением двери или окна',
        count: 8,
      }],
    },
  ],
  activePlayer: 'boris',
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
