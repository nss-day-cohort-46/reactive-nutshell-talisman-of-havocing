import React, { useState, createContext } from "react"

export const TaskContext = createContext()

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        return fetch("http://localhost:8088/tasks")
        .then(res => res.json())
        .then(setTasks)
    }

    const addTask = (task) => {
        return fetch("http://localhost:8088/tasks",  {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
        .then(getTasks)
    }

    const getTaskById = (id) => {
        return fetch(`http://localhost:8088/tasks/${id}`)
            .then(res => res.json())
    }

    const deleteTask = taskId => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "DELETE"
        })
            .then(getTasks)
    }

    return (
        <TaskContext.Provider value={{
            tasks, getTasks, addTask, getTaskById, deleteTask,
        }}>
            {props.children}
        </TaskContext.Provider>
    )
    
}