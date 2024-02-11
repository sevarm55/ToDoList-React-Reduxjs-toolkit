import { resetEdit } from "../slices/edit/editSlice"
import { toggleText } from "../slices/text/textSlice"
import { editingTodoUpdate } from "../slices/todos/todos"

export const editingTodosValue = (store) => (next) => (action) => {
  if (action.type === "edit/editTodoValue") {
    store.dispatch(toggleText(action.payload.title))
  }

  next(action)
}

export const editingTodosItem = (store) => (next) => (action) => {
  if (action.type === "todos/addTodostoForm" && store.getState().edit) {
    action.type = "todos/editingTodoUpdate"
    let editingTodoItem = {
      editingId: store.getState().edit.id,
      title: action.payload,
      isCompleted: store.getState().edit.isCompleted,
    }

    store.dispatch(editingTodoUpdate(editingTodoItem))
    store.dispatch(resetEdit())
  }

  next(action)
}
