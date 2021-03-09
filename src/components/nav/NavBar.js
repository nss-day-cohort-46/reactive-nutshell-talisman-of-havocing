import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './NavBar.css'

export const NavBar = (props) => {
  return (
    <nav className="navbar-custom, text-white flex-md-nowrap p-0 shadow" >

      <ul className="nav ">
        <li className="nav-item">
          <Link className="nav-link" to="/">Articles</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/friends">Friends</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/messages">Messages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tasks">Tasks</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/events">Events</Link>
        </li>
      </ul>
    </nav>
  )
}
// bg-light
