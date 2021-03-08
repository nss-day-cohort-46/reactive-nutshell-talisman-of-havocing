import React, { useContext, useEffect, useState } from "react"
import "./Event.css"
import { useHistory, useParams } from 'react-router-dom';
import { EventContext } from "./EventProvider";

export const EmployeeForm = () => {
    const { events, getEvents, updateEvent } = useContext(EventContext)

    const [event, setEvent] = useState({
        userId: 0,
        name: "",
        date: "",
        location: "",
    });

    const [isLoading, setIsLoading] = useState(true)
    const { eventId } = useParams()
    const history = useHistory()


    const handleControlledInputChange = (event) => {
        const newEvent = { ...event }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newEvent[event.target.id] = selectedVal
        setEvent(newEvent)
    }

    const handleClickSaveEmployee = (event) => {
        event.preventDefault()

        if (eventId === 0) {
            window.alert("Please select a location")
        } else {
            setIsLoading(true)
            if (eventId) {
                updateEmployee({
                    id: event.id,
                    name: event.name,
                    role: event.role,
                    locationId: parseInt(event.locationId),
                })
                    .then(() => history.push(`/event/detail/${event.id}`))
            } else {
                addEmployee(event)
                    .then(() => history.push("/employees"))
            }
        }
    }

    const handleCancel = (event) => {
        event.preventDefault()
        history.goBack()
    }

    useEffect(() => {
        getLocations().then(() => {
            if (eventId) {
                getEmployeeById(eventId)
                    .then(event => {
                        setEmployee(event)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">{eventId ? "Edit Employee" : "Add Employee"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="event name" value={event.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="role">Employee role:</label>
                    <input type="text" id="role" onChange={handleControlledInputChange} required className="form-control" placeholder="event position" value={event.role} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select value={event.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>{l.name}</option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button disabled={isLoading} className="btn btn-primary" onClick={handleClickSaveEmployee}>{eventId ? "Submit Edit" : "Save New Employee"}</button>
            <button className="btn" onClick={handleCancel}>Cancel</button>
        </form>
    )
}