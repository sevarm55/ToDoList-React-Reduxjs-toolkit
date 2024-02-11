import { createSlice } from "@reduxjs/toolkit"

const textSlice = createSlice({
  name: "text",
  initialState: "",
  reducers: {
    toggleText(state, action) {
      return action.payload
    },
    resetText(state, action) {
      return ""
    },
  },
})

export const { toggleText,resetText } = textSlice.actions

export const textReducer = textSlice.reducer

export const selectText = (state) => state.text
