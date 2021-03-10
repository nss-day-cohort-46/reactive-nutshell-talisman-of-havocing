// import React from "react"
import { Route } from "react-router-dom"
import React, { useContext, useEffect } from "react"
import { MessageList } from "./messages/MessageList"
import { MessageProvider } from "./messages/MessageProvider"
import { EventProvider } from "./events/EventProvider"
import { TaskProvider } from './tasks/TaskProvider'
import { TaskList } from './tasks/TaskList'
import { TaskForm } from './tasks/TaskForm'


export const ApplicationViews = () => {
  

  return (
    <>

      <Route exact path="/">
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <MessageProvider>
        <Route path="/messages">
          <MessageList />
          {/* Render the component for the messages */}
        </Route>
      </MessageProvider>
      <TaskProvider>
      <Route path="/tasks">
        <TaskList />
        <TaskForm />
        {/* Render the component for the user's tasks */}
      </Route>
      </TaskProvider>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
