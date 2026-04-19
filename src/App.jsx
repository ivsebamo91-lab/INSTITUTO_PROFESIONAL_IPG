import { useState } from "react"
import TaskList from "./components/TaskList"

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  const addTask = () => {
    if (input.trim() === "") return
    setTasks([...tasks, { text: input, completed: false }])
    setInput("")
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  const toggleComplete = (index) => {
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
  }

  const editTask = (index, newText) => {
    const newTasks = [...tasks]
    newTasks[index].text = newText
    setTasks(newTasks)
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Lista de tareas</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        Cambiar tema
      </button>

      <br /><br />

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe una tarea"
      />

      <button onClick={addTask}>Agregar</button>

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask}
      />
    </div>
  )
}

export default App