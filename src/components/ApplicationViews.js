import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./events/EventList"
import { EventProvider } from "./events/EventProvider"
import { EventForm } from "./events/EventForm"
import { WeatherProvider } from "./weather/WeatherProvider"

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
      <Route exact path="/events">
        <EventProvider>
          <WeatherProvider>
            <EventList />
          </WeatherProvider>
        </EventProvider>
      </Route>
    </>
  )
}
