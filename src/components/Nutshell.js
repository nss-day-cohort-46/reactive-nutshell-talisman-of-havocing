import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./Nutshell.css"
import { TaskProvider } from './tasks/TaskProvider'

export const Nutshell = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("nutshell_user")) {
          return (
            <>
            <TaskProvider>
              <NavBar />
              <ApplicationViews />
            </TaskProvider>
            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)
