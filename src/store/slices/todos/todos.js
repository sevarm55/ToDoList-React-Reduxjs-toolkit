import { createSlice } from "@reduxjs/toolkit"

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodostoForm(state, { payload }) {
      return [
        ...state,
        {
          id: new Date().getTime().toString(),
          title: payload,
          time: new Date().getTime(),
          isCompleted: false,
        },
      ]
    },
    deleteTodo(state, { payload }) {
      return state.filter((todo) => todo.id !== payload)
    },
    checkTodo(state, { payload }) {
      return state.map((todo) =>
        todo.id === payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    },
    editingTodoUpdate(state, { payload }) {
      return state.map((todo) =>
        todo.id === payload.editingId ? { ...todo, title: payload.title } : todo
      )
    },
  },
})

export const { addTodostoForm, deleteTodo, checkTodo, editingTodoUpdate } =
  todosSlice.actions

export const todosReducer = todosSlice.reducer

export const selectTodos = (state) => state.todos
