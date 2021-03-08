// import React from "react"
import { Route } from "react-router-dom"
import { TaskContext } from './tasks/TaskProvider'
import React, { useContext, useEffect } from "react"

export const ApplicationViews = () => {

  const { tasks, getTasks } = useContext(TaskContext)

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
        {tasks ? console.log("tasks", tasks) : console.log("no data")}
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
