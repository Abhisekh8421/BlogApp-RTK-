import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countValue: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleIncreaseCountAction: (state, action) => {
      state.countValue += 1;
      return state;
    },
    handleDecreaseCountAction: (state, action) => {
      if (state.countValue < 0) {
        state.countValue = 0;
      } else {
        state.countValue -= 1;
      }
      return state;
    },
  },
});

export const { handleIncreaseCountAction, handleDecreaseCountAction } =
  counterSlice.actions;

export default counterSlice.reducer;
