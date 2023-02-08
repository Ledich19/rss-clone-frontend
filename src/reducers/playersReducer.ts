import { createSlice } from '@reduxjs/toolkit';
import {
  CharacterType, Players, ThingType, WeaponType,
} from '../app/types';

const initialState: Players = {
  characters: [
    // {
    //   category: 'character',
    //   isVisible: true,
    //   active: true,
    //   type: 'boris',
    //   name: 'Борис',
    //   img: 'characters/boris.png',
    //   playerName: '',
    //   description: '',
    //   count: 1,
    //   health: 5,
    //   inventory: [{
    //     category: 'weapon',
    //     isVisible: false,
    //     type: 'axe',
    //     name: 'Топор',
    //     img: 'weapon/axe.png',
    //     description: '',
    //     use: 'sword',
    //     count: 1,
    //   }],
    // },
    // {
    //   isVisible: true,
    //   category: 'character',
    //   active: true,
    //   type: 'sasha',
    //   name: 'Саша',
    //   img: 'characters/sasha.png',
    //   playerName: '',
    //   description: '.',
    //   count: 1,
    //   health: 3,
    //   inventory: [{
    //     category: 'thing',
    //     isVisible: false,
    //     type: 'plank',
    //     name: 'Доски',
    //     img: 'things/plank.png',
    //     description: '',
    //     count: 8,
    //   }],
    // },
  ],
  activePlayer: 'boris',
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
    chengePlayer(state, actions: {
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
    setCanPlayerMove(state, actions: {
      payload: boolean;
      type: string;
    }) {
      return { ...state, canPlayerMove: actions.payload };
    },
    setNextActivePlayer(state) {
      const activeIndex = state.characters.map((ch) => ch.type).indexOf(state.activePlayer);
      const nextPlayerIndex = activeIndex === state.characters.length ? activeIndex + 1 : 0;
      const activePlayer = state.characters[nextPlayerIndex].type;
      return { ...state, activePlayer };
    },
    setAmount(state, actions: {
      payload: string;
      type: string;
    }) {
      return { ...state, amount: actions.payload };
    },
  },
});

export const {
  addPlayer,
  chengePlayer,
  setPlayerName,
  removeLastPlayer,
  addToPlayerInventory,
  decrementHealth,
  setCanPlayerMove,
  setNextActivePlayer,
  setAmount,
} = playersSlice.actions;
export default playersSlice.reducer;
