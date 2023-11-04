import { createReducer } from "@reduxjs/toolkit";

type initialStateType = {
  test: string;
  count: number;
};

const initialState: initialStateType = {
  test: "testing count",
  count: 0,
};

export const countReducer = createReducer(initialState, {
  COUNT_REDUCER: (action, payload) => {
    action.count = action.count + 1;
  },
});
