import React from 'react'
import PatientForm from '../components/PatientForm'
import PatientTable from '../components/PatientTable'
import Menu from '../components/Menu'

function Patients() {
  return (
    <div>
        <Menu/>
        <PatientForm/>
        <PatientTable/>
    </div>
  )
}

export default Patients