import { createSlice } from "@reduxjs/toolkit"

const editSlice = createSlice({
  name: "edit",
  initialState: null,
  reducers: {
    editTodoValue(state, { payload }) {
      return payload
    },
    resetEdit(state, { payload }) {
      return null
    },
  },
})

export const editReducer = editSlice.reducer
export const { editTodoValue,resetEdit } = editSlice.actions
export const selectEdit = (state) => state.edit
