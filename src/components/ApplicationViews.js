// import React from "react"
import { Route } from "react-router-dom"
import { TaskContext } from './tasks/TaskProvider'
import React, { useContext, useEffect } from "react"
import { MessageList } from "./messages/MessageList"
import { MessageProvider } from "./messages/MessageProvider"
import { EventContext } from "./events/EventProvider"


export const ApplicationViews = () => {
  const { events, getEvents } = useContext(EventContext)
  const { tasks, getTasks } = useContext(TaskContext)

  useEffect(() => {
    getEvents()
    .then(getTasks)
  }, [])

  return (
    <>

      <Route exact path="/">
       
        {/* Render the component for news articles */}
        {events ? console.log("events", events) : console.log("no data")}
        {tasks ? console.log("tasks", tasks) : console.log("no data")}

         
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
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
