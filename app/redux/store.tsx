import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./reducers";
export const store = configureStore({
  reducer: {
    countReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
