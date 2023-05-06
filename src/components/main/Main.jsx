import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  let userName = sessionStorage.getItem("userName");
  return (
    <div>
        <div className="navbar">
          <div className="left-nav">GOV.UK</div>
          <div className="center-nav">GP Service</div>
          {userName != null ? <div className="center-nav">Hello , {userName} </div> : '' }
          
        </div>
        <div className="blue-strip"></div>
        <div className="header">
          <h1 className="header-text">Welcome to the GP Service</h1>
          <div className="header-subtext">
            This service is for:
            <ul>
              <li>Doctors</li>
              <li>Patients</li>
              <li>Admin</li>
            </ul>
            <p>This service must be used responsibly.</p>
            <Link className="govuk start-button" to='/selectRole'>
              Start now
              <span className="button-arrow"></span>
            </Link>
            
          </div>
        </div>
      </div>
  )
}
