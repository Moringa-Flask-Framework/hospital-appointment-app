import React from 'react'

function Home() {
  return (
    <div>
        <a href = "http://127.0.0.1:5555/patients" ><img src = '' alt = 'Patients logo'/></a>
        <a href = "http://127.0.0.1:5555/patients"><h1>Patients</h1></a>
        <a href = "http://127.0.0.1:5555/staffs" ><img src = '' alt = 'Doctors logo'/></a>
        <a href = "http://127.0.0.1:5555/staffs"><h1>Doctors</h1></a>
        <a href = "http://127.0.0.1:5555/appointments" ><img src = '' alt = 'Appointments logo'/></a>
        <a href = "http://127.0.0.1:5555/appointments"><h1>Add Appointments</h1></a>
        <a href = "http://127.0.0.1:5555/appointments/search" ><img src = '' alt = 'Searching logo'/></a>
        <a href = "http://127.0.0.1:5555/appointments/search"><h1>Search for Appointments</h1></a>
    </div>
  )
}

export default Home