import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import exampleReducer from "../reducers/exampleReducer"

export const store = configureStore({
  reducer: {
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