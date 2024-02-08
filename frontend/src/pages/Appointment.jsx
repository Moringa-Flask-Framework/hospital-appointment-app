import React from 'react'
import Menu from '../components/Menu'
import AppointmentForm from '../components/AppointmentForm'
import AppointmentTable from '../components/AppointmentTable'

function Appointment() {
  return (
    <div>
        <Menu/>
        <AppointmentForm/>
        <AppointmentTable/>
    </div>
  )
}

export default Appointment