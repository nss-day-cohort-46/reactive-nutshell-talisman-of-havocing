import React, { useContext, useEffect, useState } from "react"
// import { useHistory } from 'react-router-dom'
import { TaskContext } from './TaskProvider'
import { Task } from './Task'
// import { TaskForm } from './TaskForm'
import './Task.css'
import { useHistory } from "react-router"

export const TaskList = () => {
    const { tasks, getTasks } = useContext(TaskContext)
    let loggedInUser = parseInt(sessionStorage.getItem("nutshell_user"))
    useEffect(() => {
        getTasks()
    }, [])

    let userTasks = tasks.filter(task => loggedInUser === task.userId)
    const history = useHistory()
     

    return (
        <>
        <div className="tasks">
            <h3>To-Do</h3>
            <button onClick={() => {history.push("/tasks/create")}}>+</button>
        {
            userTasks.map(task => !task.isComplete ? 
                <Task key={task.id} task={task} /> : <div key={task.id}></div>
            )
        }
        </div>
        </>
    )
}

