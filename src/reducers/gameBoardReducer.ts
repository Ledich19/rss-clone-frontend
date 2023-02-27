import { createSlice } from '@reduxjs/toolkit';
import {
  BoardItemType, CharacterType, EnemyType, InventoryType,
} from '../app/types';

const initialState: BoardItemType[][] = [];

const gameBoardSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setNewGameField(state, actions: {
      payload: BoardItemType[][];
      type: string;
    }) {
      return actions.payload;
    },
    setVisibleCard(state, actions: {
      payload: string;
      type: string;
    }) {
      const newState = state.map((row) => row.map((ceil) => {
        if (ceil.state && ceil.id === actions.payload) {
          const newCeil = { ...ceil, state: { ...ceil.state, isVisible: true } };
          return newCeil;
        }
        return ceil;
      }));
      return newState;
    },

    moveCharacter(state, actions: {
      payload: {
        from: string,
        to: string,
        body: CharacterType | EnemyType | null
      };
      type: string;
    }) {
      const newState = state.map((row) => row.map((ceil) => {
        if (ceil.id === actions.payload.from) {
          const newCeil = { ...ceil, state: null };
          return newCeil;
        }
        if (ceil.id === actions.payload.to) {
          const newCeil = { ...ceil, state: actions.payload.body };
          return newCeil;
        }
        return ceil;
      }));

      return newState;
    },
    removeCardState(state, actions: {
      payload: string;
      type: string;
    }) {
      const newState = state.map((row) => row.map((ceil) => {
        if (ceil.id === actions.payload) {
          const newCeil = { ...ceil, state: null };
          return newCeil;
        }
        return ceil;
      }));

      return newState;
    },
    addPlankState(state, actions: {
      payload: string;
      type: string;
    }) {
      const plank = {
        category: 'thing',
        type: 'plank',
        name: 'Доски',
        img: 'things/plank.png',
        description: 'С их помощью можно забить окно или дверь. Для этого, пройдя через дверь или окно, игрок кладёт карточку досок (найденную раньше) на клетку с изображением двери или окна',
        isVisible: true,
        count: 8,
      };
      const newState = state.map((row) => row.map((ceil) => {
        if (ceil.id === actions.payload) {
          const newCeil = { ...ceil, state: plank };
          return newCeil;
        }
        return ceil;
      }));

      return newState;
    },

    setDiedBodyInventory(state, actions: {
      payload: {
        id: string;
        value: InventoryType
      };
      type: string;
    }) {
      const newCeilState = actions.payload.value.length >= 1 ? {
        type: 'deadBody',
        category: 'deadBody',
        img: '',
        isVisible: true,
        value: actions.payload.value,
      } : null;

      const newState = state.map((row) => row.map((ceil) => {
        if (ceil.id === actions.payload.id) {
          const newCeil = { ...ceil, state: newCeilState };
          return newCeil;
        }
        return ceil;
      }));

      return newState;
    },
  },
});

export const {
  setNewGameField,
  setVisibleCard, moveCharacter, removeCardState, addPlankState, setDiedBodyInventory,
} = gameBoardSlice.actions;
export default gameBoardSlice.reducer;
