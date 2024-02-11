import React from 'react'
import Menu from '../components/Menu'
import AppointmentForm from '../components/AppointmentForm'
import AppointmentTable from '../components/AppointmentTable'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Appointment() {
  return (
    <div>
      <Header/>
        <Menu/>
        <AppointmentForm/>
        <AppointmentTable/>
        <Footer/>
    </div>
  )
}

export default Appointment