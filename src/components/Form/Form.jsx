import { useDispatch, useSelector } from "react-redux"

import { FaArrowRight } from "react-icons/fa6"

import {
  resetText,
  selectText,
  toggleText,
} from "../../store/slices/text/textSlice"

import "./Form.css"
import { addTodostoForm } from "../../store/slices/todos/todos"
import { selectEdit } from "../../store/slices/edit/editSlice"

const Form = ({ onClose }) => {
  const dispatch = useDispatch()
  const text = useSelector(selectText)
  const edit = useSelector(selectEdit)

  const handlerSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodostoForm(text))
    dispatch(resetText())
    onClose()
  }

  return (
    <div className="formPage" onClick={onClose}>
      <div className="border">
        <form
          className="form"
          onSubmit={handlerSubmit}
          onClick={(e) => e.stopPropagation()}
        >
          {edit ? <h2>Edit Task</h2> : <h2>Add New Task</h2>}
          <label className="label">
            <input
              onChange={(e) => dispatch(toggleText(e.target.value))}
              placeholder="Enter Task"
              type="text"
              value={text}
            />
            <FaArrowRight className="arrow" onClick={handlerSubmit} />
          </label>
        </form>
      </div>
    </div>
  )
}

export default Form
