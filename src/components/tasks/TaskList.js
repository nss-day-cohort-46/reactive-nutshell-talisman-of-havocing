import React, { useContext, useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { TaskContext } from './TaskProvider'

export const TaskList = () => {
    const { tasks, getTasks } = useContext(TaskContext)

    useEffect(() => {
        getTasks()
    })
}