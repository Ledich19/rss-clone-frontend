import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import exampleReducer from "../reducers/exampleReducer"
import gameBoardReducer from '../reducers/gameBoardReducer';

export const store = configureStore({
  reducer: {
    game: gameBoardReducer,
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