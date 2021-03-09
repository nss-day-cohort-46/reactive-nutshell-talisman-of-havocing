import React from "react"
import "./Task.css"



export const Task = ({ task }) => (
    <section className="task">
        <h3 className="task__name">{task.name}</h3>
        <div className="task__completionDate">{task.completionDate}</div>
        
    </section>
)

