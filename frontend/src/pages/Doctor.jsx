import React from 'react'
import DoctorForm from '../components/DoctorForm'
import DoctorTable from '../components/DoctorTable'
import Menu from '../components/Menu'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Doctor() {
  return (
    <div>
      <Header/>
        <Menu/>
        <DoctorForm/>
        <DoctorTable/>
        <Footer/>
    </div>
  )
}

export default Doctor