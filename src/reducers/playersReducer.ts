import { createSlice } from '@reduxjs/toolkit';
import {
  CharacterType, EnemyType, Players, ThingType, WeaponType,
} from '../app/types';

const initialState: Players = {
  characters: [],
  activePlayer: 'boris',
  enemyChoose: null,
  canPlayerMove: true,
  amount: '0',
};

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayer(state, actions: {
      payload: CharacterType;
      type: string;
    }) {
      return { ...state, characters: state.characters.concat(actions.payload) };
    },
    setPlayerName(state, actions: {
      payload: {
        id: string,
        value: string,
      };
      type: string;
    }) {
      const newCharacters = state.characters.map((ch) => {
        if (ch.id === actions.payload.id) {
          return { ...ch, playerName: actions.payload.value };
        }
        return ch;
      });

      return { ...state, characters: newCharacters };
    },
    changePlayer(state, actions: {
      payload: CharacterType;
      type: string;
    }) {
      const newCharacters = state.characters.map((character) => {
        if (character.playerName === actions.payload.playerName) {
          return actions.payload;
        }
        return character;
      });
      return { ...state, characters: newCharacters };
    },
    removeLastPlayer(state) {
      return {
        ...state,
        characters: state.characters.filter((c, i) => i !== (state.characters.length - 1)),
      };
    },
    addToPlayerInventory(state, actions: {
      payload: {
        player: string,
        value: ThingType | WeaponType,
      };
      type: string;
    }) {
      const newCharacters = state.characters.map((character) => {
        if (character.type === actions.payload.player) {
          return {
            ...character, inventory: character.inventory?.concat(actions.payload.value),
          };
        }
        return character;
      });
      const newState = { ...state, characters: newCharacters };
      return newState;
    },
    deleteFromPlayerInventory(state, actions: {
      payload: {
        player: string,
        type: string,
      };
      type: string;
    }) {
      const newCharacters = state.characters.map((character) => {
        let index = -1;
        if (character.type === actions.payload.player) {
          character.inventory?.forEach((el, idx) => {
            if (el.type === actions.payload.type) index = idx;
          });
          if (index >= 0) {
            return {
              ...character, inventory: character.inventory?.filter((el, idx) => idx !== index),
            };
          }
        }
        return character;
      });
      const newState = { ...state, characters: newCharacters };
      return newState;
    },
    decrementHealth(state, actions: {
      payload: string;
      type: string;
    }) {
      const newCharacters = state.characters.map((character) => {
        if (character.type === actions.payload) {
          return {
            ...character, health: character.health - 1,
          };
        }
        return character;
      });
      const newState = { ...state, characters: newCharacters };
      return newState;
    },
    incrementHealth(state, actions: {
      payload: string;
      type: string;
    }) {
      const newCharacters = state.characters.map((character) => {
        if (character.type === actions.payload) {
          return {
            ...character, health: character.health + 1,
          };
        }
        return character;
      });
      const newState = { ...state, characters: newCharacters };
      return newState;
    },
    setCanPlayerMove(state, actions: {
      payload: boolean;
      type: string;
    }) {
      return { ...state, canPlayerMove: actions.payload };
    },
    setNextActivePlayer(state, actions: {
      payload: string;
      type: string;
    }) {
      return { ...state, activePlayer: actions.payload };
    },
    setActivePlayer(state, actions: {
      payload: string;
      type: string,
    }) {
      return { ...state, activePlayer: actions.payload };
    },
    setAmount(state, actions: {
      payload: string;
      type: string;
    }) {
      return { ...state, amount: actions.payload };
    },
    setAlivePlayer(state, actions: {
      payload: {
        type: string,
        value: boolean,
      };
      type: string;
    }) {
      const newCharacters = state.characters.map((character) => {
        if (character.type === actions.payload.type) {
          return {
            ...character, isAlive: actions.payload.value,
          };
        }
        return character;
      });
      const newState = { ...state, characters: newCharacters };
      return newState;
    },
    setActiveEnemy(state, actions: {
      payload: {
        id: string,
        value: EnemyType,
      } | null;
      type: string,
    }) {
      return { ...state, enemyChoose: actions.payload };
    },
  },
});

export const {
  addPlayer,
  changePlayer,
  setPlayerName,
  removeLastPlayer,
  addToPlayerInventory,
  deleteFromPlayerInventory,
  decrementHealth,
  incrementHealth,
  setCanPlayerMove,
  setActivePlayer,
  setNextActivePlayer,
  setAmount,
  setActiveEnemy,
  setAlivePlayer,
} = playersSlice.actions;
export default playersSlice.reducer;
