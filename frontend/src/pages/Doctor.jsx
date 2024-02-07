import React from 'react'
import DoctorForm from '../components/DoctorForm'
import DoctorTable from '../components/DoctorTable'
import Menu from '../components/Menu'

function Doctor() {
  return (
    <div>
        <Menu/>
        <DoctorForm/>
        <DoctorTable/>
    </div>
  )
}

export default Doctor