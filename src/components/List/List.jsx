import { useSelector } from "react-redux"
import Todos from "../Todos/Todos"
import "./List.css"
import { selectTodos } from "../../store/slices/todos/todos"
import { selectFilter } from "../../store/slices/filter/filterSlice"

const List = ({ setOpen }) => {
  const todos = useSelector(selectTodos)
  const filter = useSelector(selectFilter)

  let filteredTodos = todos

  if (filter === "Completed") {
    filteredTodos = todos.filter((todo) => todo.isCompleted)
  } else if (filter === "Active") {
    filteredTodos = todos.filter((todo) => !todo.isCompleted)
  }

  return (
    <div className="listPage">
      {filteredTodos.length ? (
        <div className="list">
          {filteredTodos.map((todo, index) => (
            <Todos setOpen={setOpen} todo={todo} key={todo.id} index={index} />
          ))}
        </div>
      ) : (
        <p className="emptyMessage">Todo list is empty</p>
      )}
    </div>
  )
}

export default List
