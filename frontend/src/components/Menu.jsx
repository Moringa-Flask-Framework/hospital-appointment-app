import React from 'react'

function Menu() {
  return (
    <header>
      <nav>
        <Link to ="/">Home</Link>
      </nav>
      <nav>
        <Link to ="/staffs">Staffs</Link>
      </nav>
      <nav>
        <Link to ="/patients">Patients</Link>
      </nav>
      <nav>
        <Link to ="/appointments">Appointments</Link>
      </nav>
      <nav>
        <Link to ="/logout">Log Out</Link>
      </nav>


    </header>
  )
}

export default Menu