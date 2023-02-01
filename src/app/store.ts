import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import exampleReducer from "../reducers/exampleReducer"
import gameBoardReducer from '../reducers/gameBoardReducer';
import GameSetReducer from '../reducers/GameSetReducer';

export const store = configureStore({
  reducer: {
    game: gameBoardReducer,
    gameSet: GameSetReducer,
    example: exampleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;