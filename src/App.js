import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from "react"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'food shopping',
      day: 'today',
      reminder: false,
    },
    {
      id: 2,
      text: 'food shopping',
      day: 'today',
      reminder: false,
    },
    {
      id: 3,
      text: 'food shopping',
      day: 'today',
      reminder: false,
    }
  ])

  //delete task 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ? {} : task))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  //add task
  const addTask = (task) => {
    const id = 10
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onD elete={deleteTask} onToggle={toggleReminder} />
        : 'No Tasks'}
    </div>
  )
}

export default App;
