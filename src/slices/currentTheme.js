// @ts-check
/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'currentTheme',
  initialState: { name: 'light' },
  reducers: {
    changeCurrentTheme(state, { payload }) {
      state.name = payload.name;
    },
  },
});

const actions = { ...slice.actions };
export { actions };
export default slice.reducer;
