import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  createSchedule: { session: "", program: "", name: "", date: "" },
};
export const synopsisSlice = createSlice({
  name: "synopsis",
  initialState,
  reducers: {
    CREATESCHEDULE: (state, action) => {
      state.createSchedule = action.payload;
    },
  },
});

export const { CREATESCHEDULE } = synopsisSlice.actions;

export default synopsisSlice.reducer;
