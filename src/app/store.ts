import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import exampleReducer from "../reducers/exampleReducer"
import gameBoardReducer from '../reducers/gameBoardReducer';
import GameSetReducer from '../reducers/GameSetReducer';
import gameRulesReducer from '../reducers/gameRulesReducer';
import playersReducer from '../reducers/playersReducer';

export const store = configureStore({
  reducer: {
    game: gameBoardReducer,
    characters: playersReducer,
    gameSet: GameSetReducer,
    example: exampleReducer,
    rules: gameRulesReducer,
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
