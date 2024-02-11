import React from 'react'
import PatientForm from '../components/PatientForm'
import Menu from '../components/Menu'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Patients() {
  return (
    <div>
      <Header/>
        <Menu/>
        <PatientForm/>
        <Footer/>
    </div>
  )
}

export default Patients