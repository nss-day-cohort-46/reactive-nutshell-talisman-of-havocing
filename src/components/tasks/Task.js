import React, { useContext, useState }  from "react"
import { TaskContext } from './TaskProvider'
import { useHistory } from 'react-router-dom'
import "./Task.css"




export const Task = ({ task }) =>{
    const history = useHistory(); 
    const { getTasks, updateTask, deleteTask } = useContext(TaskContext)
    //   const [taskComplete, setTaskComplete] = useState()
      // User can select if task is complete. Will change isComplete in db
    const handleControlledInputChange = (event) => {
        // let completedTask = document.querySelector(".task")
        if(event.target.checked === true){
            task.isComplete = true
            // completedTask.style.display = "none"
        }else {
            task.isComplete = false
        }
          updateTask({
              id: task.id,
              userId: task.userId,
              name: task.name,
              completionDate: task.completionDate,
              isComplete: task.isComplete
          })
          .then(() => history.push('/tasks'))
          
          
      }

      const handleDelete = () => {
        deleteTask(task.id)
          .then(() => {
            history.push("/tasks")
          })
      }
  
    const taskCompletionDate = new Date(task.completionDate).toLocaleDateString('en-US', {timeZone: "CST"})
 return (<>
    <section className="task">
        <h4 className="task__name">{task.name}</h4>
        <div className="task__completionDate">Deadline: {taskCompletionDate}</div>
        <div className="task__checkbox">
            <p>Completed</p>
            <input type="checkbox" id="taskComplete" onChange={handleControlledInputChange} 
                required autoFocus className="form-control" value={task.isComplete} defaultChecked={task.isComplete ? true : false} />
        </div>
        <button onClick={handleDelete}>X</button>
    </section>
    </>
)}



