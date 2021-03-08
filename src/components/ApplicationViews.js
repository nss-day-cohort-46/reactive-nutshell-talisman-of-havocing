import React, { useContext, useEffect } from "react"
import { Route } from "react-router-dom"
import { EventContext } from "./events/EventProvider"

export const ApplicationViews = () => {
  const { events, getEvents } = useContext(EventContext)

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <>

      <Route exact path="/">
          {events ? console.log("events", events) : console.log("no data")}
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
