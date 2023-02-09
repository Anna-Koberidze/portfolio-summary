import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  theme: 1,
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setInitial: (state) => {
      state.theme = 1;
    },
    setBlue: (state) => {
      state.theme = 2;
    },
    setGold: (state) => {
      state.theme = 3;
    },
    setPink: (state) => {
      state.theme = 4;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInitial, setBlue, setGold, setPink } = themeSlice.actions;

export default themeSlice.reducer;
