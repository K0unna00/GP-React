import React from 'react'
import { Link } from 'react-router-dom'

export default function SelectRole() {

  const patientClicked = (pageName) => {
    sessionStorage.setItem("currentPage",pageName)
  }

  return (
    <div>
      <div className="navbar">
        <div className="left-nav">GOV.UK</div>
        <div className="center-nav">GP Service</div>
      </div>
      <div className="blue-strip"></div>
      <h3 className="header-text">Select your role </h3>
      <div className="buttons" style={{width:"80%",margin:"0 auto"}}>
        <Link className="button1" to='/login' onClick={() => patientClicked("Admin")}>
          Admin
        </Link>
        <Link className="button1" to='/login' onClick={() => patientClicked("Doctor")}>
          Doctor
        </Link>
        <Link className="button1" to='/login' onClick={() => patientClicked("Patient")}>
          Patient
        </Link>
        <Link className="button1" to='/'>
          Go back
        </Link>
      </div>

    </div>
  )
}
