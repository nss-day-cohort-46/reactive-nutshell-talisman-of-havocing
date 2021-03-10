import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./events/EventList"
import { EventProvider } from "./events/EventProvider"
import { MessageList } from "./messages/MessageList"
import { MessageProvider } from "./messages/MessageProvider"
import { TaskProvider } from './tasks/TaskProvider'
import { TaskList } from './tasks/TaskList'


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
        </Route>
      </MessageProvider>
      <TaskProvider>
        <Route path="/tasks">
          <TaskList />
        </Route>
      </TaskProvider>
      <Route exact path="/events">
        <EventProvider>
          <EventList />
        </EventProvider>
      </Route>
    </>
  )
}
