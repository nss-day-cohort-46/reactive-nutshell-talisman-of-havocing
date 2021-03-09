import React, { useContext, useState }  from "react"
import { TaskContext } from './TaskProvider'
import { useHistory } from 'react-router-dom'
import "./Task.css"




export const Task = ({ task }) =>{
    const history = useHistory(); 
    const { getTasks, updateTask } = useContext(TaskContext)
    //   const [taskComplete, setTaskComplete] = useState()
      // User can select if task is complete. Will change isComplete in db
      const handleControlledInputChange = (event) => {
          
          if(event.target.checked === true){
              task.isComplete = true
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
  
    const taskCompletionDate = new Date(task.completionDate).toLocaleDateString('en-US', {timeZone: "CST"})
 return (<>
    <section className="task">
        <h3 className="task__name">{task.name}</h3>
        <div className="task__completionDate">Complete by: {taskCompletionDate}</div>
        <div>
            <p>Task Complete</p>
            <input type="checkbox" id="taskComplete" onChange={handleControlledInputChange} 
                required autoFocus className="form-control" value={task.isComplete} defaultChecked={task.isComplete ? true : false} />
        </div>
    </section>
    </>
)}



