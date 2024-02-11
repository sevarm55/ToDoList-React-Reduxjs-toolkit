import { useState } from "react"
import { CSSTransition } from "react-transition-group"

import Header from "./components/Header/Header"
import List from "./components/List/List"
import Form from "./components/Form/Form"

import "./App.css"

function App() {
  const [open, setOpen] = useState(false)

  console.log(open)
  return (
    <div className="App">
      <Header open={open} setOpen={setOpen} />
      <List setOpen={setOpen} />
      <CSSTransition in={open} timeout={300} classNames="alert" unmountOnExit>
        {(open) => open && <Form onClose={() => setOpen(false)} />}
      </CSSTransition>
    </div>
  )
}

export default App
