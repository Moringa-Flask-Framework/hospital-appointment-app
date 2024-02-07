import React from 'react'
import PatientForm from '../components/PatientForm'
import PatientTable from '../components/PatientTable'
import Menu from '../components/Menu'

function Patients() {
  return (
    <div>
        <Menu/>
        <PatientForm/>
    </div>
  )
}

export default Patients