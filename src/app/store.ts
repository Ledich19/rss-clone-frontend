import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import exampleReducer from '../reducers/exampleReducer';
import gameBoardReducer from '../reducers/gameBoardReducer';
import GameSetReducer from '../reducers/GameSetReducer';
import playersReducer from '../reducers/playersReducer';
import spinnertReducer from '../reducers/spinnertReducer';

export const store = configureStore({
  reducer: {
    game: gameBoardReducer,
    characters: playersReducer,
    spinner: spinnertReducer,
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
