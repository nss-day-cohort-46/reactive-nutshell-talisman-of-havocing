import React, { useState, createContext } from "react"

export const TaskContext = createContext()

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        return fetch("")
        .then(res => res.json())
        .then(setTasks)
    }

    const addTask = (task) => {
        return fetch("",  {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
        .then(getTasks)
    }

    return (
        <TaskContext.Provider value={{
            tasks, getTasks, addTask, deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
    
}