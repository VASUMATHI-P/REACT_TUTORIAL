import {useState} from 'react'

const ToDoList = () => {
  const [tasks, setTasks] = useState(["Feed the Cat", "Clean room"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  }

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  const removeTask = (index) => {
    setTasks(() => tasks.filter((task, i) => i !== index))
  }

  const moveUp = (index) => {
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  const moveDown = (index) => {
    if(index < tasks.length-1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className='to-do-list'>
      <h2>ToDo List</h2>
      <div>
        <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter task..."/>
        <button className='add-button' onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='text'>{task}</span>
            <button className='delete-button' onClick={() => removeTask(index)}>Delete</button>
            <button className='move-button' onClick={() => moveUp(index)}>UP</button>
            <button className='move-button' onClick={() => moveDown(index)}>DOWN</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList