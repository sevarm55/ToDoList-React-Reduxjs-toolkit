import { MdEdit } from "react-icons/md"
import { MdDelete } from "react-icons/md"

import "./Todos.css"
import { useDispatch } from "react-redux"
import { checkTodo, deleteTodo } from "../../store/slices/todos/todos"
import { editTodoValue } from "../../store/slices/edit/editSlice"

const Todos = ({ todo, setOpen, index }) => {
  const dispatch = useDispatch()

  const formatTime = (time) => {
    const date = new Date(time)
    return date.toLocaleString()
  }

  return (
    <div className={`todos ${todo.isCompleted ? "todosChcekced" : ""}`}>
      <div className="totosLeft">
        <div className="totosCheckbox">
          {++index}.
          <input
            onChange={() => dispatch(checkTodo(todo.id))}
            type="checkbox"
            className="checkBox"
            checked={todo.isCompleted}
          />
        </div>
        <div className="todosText">
          <h4>{todo.title} </h4>
          <p>{formatTime(todo.time)}</p>
        </div>
      </div>
      <span onClick={() => dispatch(deleteTodo(todo.id))}>
        <MdDelete color="#585858" />
      </span>
      <span
        onClick={() => {
          dispatch(editTodoValue(todo))
          setOpen(true)
        }}
      >
        <MdEdit color="#585858" />
      </span>
    </div>
  )
}

export default Todos
