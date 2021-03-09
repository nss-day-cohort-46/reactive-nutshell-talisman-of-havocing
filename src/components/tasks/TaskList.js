import React, { useContext, useEffect, useState } from "react"
// import { useHistory } from 'react-router-dom'
import { TaskContext } from './TaskProvider'
import { Task } from './Task'
import './Task.css'

export const TaskList = () => {
    const { tasks, getTasks } = useContext(TaskContext)

    useEffect(() => {
        getTasks()
    }, [])

  
    return (
        <div className="tasks">
            <h3>To-Do</h3>
        {
            tasks.map(task => {
                return <Task key={task.id} task={task} />
            })
        }
        </div>
    )
}