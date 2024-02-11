import { configureStore } from "@reduxjs/toolkit"
import { textReducer } from "./slices/text/textSlice"
import { todosReducer } from "./slices/todos/todos"
import { editReducer } from "./slices/edit/editSlice"
import {
  editingTodosItem,
  editingTodosValue,
} from "./middleware/editingTodoMiddleWare"
import { thunk } from "redux-thunk"
import { filterReducer } from "./slices/filter/filterSlice"

const store = configureStore({
  reducer: {
    text: textReducer,
    todos: todosReducer,
    edit: editReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(editingTodosValue, editingTodosItem, thunk),
})

export default store
