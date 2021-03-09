import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./events/EventList"
import { EventProvider } from "./events/EventProvider"

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        {/* Render the component for list of friends */}
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
        <EventProvider>
          <EventList />
        </EventProvider>
      </Route>
    </>
  )
}
