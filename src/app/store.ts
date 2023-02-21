import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import exampleReducer from '../reducers/exampleReducer';
import gameBoardReducer from '../reducers/gameBoardReducer';
import GameSetReducer from '../reducers/GameSetReducer';
import gameRulesReducer from '../reducers/gameRulesReducer';
import playersReducer from '../reducers/playersReducer';
import spinnertReducer from '../reducers/spinnertReducer';
import notifyReducer from '../reducers/notifyReducer';
import themeReducer from '../reducers/themeReducer';
import optionsReducer from '../reducers/optionsReducer';

export const store = configureStore({
  reducer: {
    game: gameBoardReducer,
    characters: playersReducer,
    spinner: spinnertReducer,
    gameSet: GameSetReducer,
    example: exampleReducer,
    rules: gameRulesReducer,
    notify: notifyReducer,
    theme: themeReducer,
    options: optionsReducer,
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
