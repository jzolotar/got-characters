import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface paginationState {
  currentPage: number;
}

const initialState = { currentPage: 1 } as paginationState;
const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    increment(state) {
      state.currentPage++;
    },
    decrement(state) {
      state.currentPage--;
    },
    goToSelectedPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { increment, decrement, goToSelectedPage } =
  paginationSlice.actions;
export default paginationSlice.reducer;
