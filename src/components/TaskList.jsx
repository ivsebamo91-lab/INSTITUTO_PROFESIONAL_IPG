import { useState } from "react"

function TaskList({ tasks, deleteTask, toggleComplete, editTask }) {
  const [editingIndex, setEditingIndex] = useState(null)
  const [editText, setEditText] = useState("")

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {editingIndex === index ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => {
                editTask(index, editText)
                setEditingIndex(null)
              }}>
                Guardar
              </button>
            </>
          ) : (
            <>
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  cursor: "pointer"
                }}
                onClick={() => toggleComplete(index)}
              >
                {task.text}
              </span>

              <button onClick={() => {
                setEditingIndex(index)
                setEditText(task.text)
              }}>
                Editar
              </button>

              <button onClick={() => deleteTask(index)}>
                Eliminar
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default TaskList