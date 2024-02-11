import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
  name: "filter",
  initialState: "all",
  reducers: {
    setFilter(state, { payload }) {
      console.log(payload)
      return payload
    },
  },
})

export const filterReducer = filterSlice.reducer
export const { setFilter } = filterSlice.actions

export const selectFilter = (state) => state.filter
