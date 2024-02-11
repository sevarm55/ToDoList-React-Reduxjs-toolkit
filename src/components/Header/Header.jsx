import { IoMdArrowDropdown } from "react-icons/io"

import { useDispatch } from "react-redux"
import { setFilter } from "../../store/slices/filter/filterSlice"

import "./Header.css"

const Header = ({ open, setOpen }) => {
  const dispatch = useDispatch()

  return (
    <div className="header">
      <button onClick={() => setOpen(!open)}>Add Task</button>
      <h1>Todo App</h1>
      <div className="custom-select">
        <select
          name="filter"
          onChange={(e) => dispatch(setFilter(e.target.value))}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Active">Active</option>
        </select>
        <div className="icon-Con">
          <IoMdArrowDropdown color="black" />
        </div>
      </div>
    </div>
  )
}

export default Header
