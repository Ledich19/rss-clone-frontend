import { createSlice } from '@reduxjs/toolkit';
import { Options } from '../app/types';

function getOptions(): Options {
  const data = window?.localStorage?.getItem('options');
  let loadOptions: Partial<Options> = {};
  if (data) loadOptions = JSON.parse(data);
  const options: Options = {
    theme: loadOptions?.theme ? loadOptions.theme : 'default',
    sound: loadOptions?.sound === true ? loadOptions.sound : false,
    gameVolume: loadOptions?.gameVolume ? loadOptions.gameVolume : 0.7,
    spinnerVolume: loadOptions?.spinnerVolume ? loadOptions.spinnerVolume : 0.7,
  };

  return options;
}

const initialState = getOptions();

export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setTheme(state, actions: { payload: 'default' | 'dark' ; type: string }) {
      return { ...state, theme: actions.payload };
    },
    setSound(state, actions: { payload: boolean ; type: string }) {
      return { ...state, sound: actions.payload };
    },
    setGameVolume(state, actions: { payload: number ; type: string }) {
      return { ...state, gameVolume: actions.payload };
    },
    setSpinnerVolume(state, actions: { payload: number ; type: string }) {
      return { ...state, spinnerVolume: actions.payload };
    },
  },
});

export const {
  setTheme, setSound, setGameVolume, setSpinnerVolume,
} = optionsSlice.actions;
export default optionsSlice.reducer;
