// @ts-check
/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    incrementCounter: (state) => state + 1,
    decrementCounter: (state) => state - 1,
  },
});

const actions = { ...slice.actions };
export { actions };
export default slice.reducer;
