import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { TaskContext } from './TaskProvider'


export const TaskForm = () =>{
    const { getTasks, addTask, getTaskById, updateTask} = useContext(TaskContext)

    const [task, setTask] = useState({
        id: 0,
        userId: 0,
        name: "",
        completionDate: "",
        isComplete: false
    })
   const [isLoading, setIsLoading] = useState(true)
   const { taskId } = useParams()
   const history = useHistory()

   useEffect(() => {
    getTasks().then(() => {
        if (taskId) {
          getTaskById(taskId)
          .then(task => {
            setTask(task)
            setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
   }, [])

   const handleControlledInputChange = event => {
       const newTask = { ...task }
       newTask[event.target.id] = event.target.value
       setTask(newTask)
   }

   const handleSaveTask = () => {
       if (taskId){
           updateTask({
               id: parseInt(task.id),
               userId: parseInt(task.userId),
               name: task.name,
               completionsDate: task.completionDate,
               isComplete: task.isComplete

           })
       }
   }


    return(
        <form className="taskForm">
            <h2 className="taskForm__title">{taskId ? "Edit Task" : "Add Task"}</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Task:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Add task"  value={task.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="completionDate">Complete by:</label>
                  <input type="date" id="completionDate" onChange={handleControlledInputChange} required autoFocus className="form-control"   value={task.completionDate}/>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            disabled={isLoading}
            onClick={event => {
              event.preventDefault()
              handleSaveTask()
            }}>
            {taskId ? "Add Task" : "Save"}
          </button>
          
        </form>
    )


}