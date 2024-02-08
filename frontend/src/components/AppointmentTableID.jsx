import React from 'react'
import { useEffect, useState } from 'react'
import {Container, Table} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import Menu from './Menu';

function AppointmentTable() {
  const  [appointments, setAppointments] = useState(null)
  const { id } = useParams();
    // console.log(appointments)


    useEffect(() => {
        async function fetchData(){
            try{
                await fetch(`/appointments/${id}`)
                .then(response => response.json())
                .then(data => setAppointments(data))
            }catch (error){
                console.log('Error: ', error)
            }
        }
        fetchData()
    },[id])

    console.log(appointments)
    // console.log(typeof(appointments))
    const handleAppointment= ()=>{
        if (appointments=== null || appointments.length === 0){
            <h3>No appointment history yet.</h3>
        }
        
        else{
           return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Appointment Date</th>
                    <th>Appointment Type</th>
                    <th>Patient Name</th>
                    <th>Patient Age</th>
                    <th>Staff Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{appointments.id}</td>
                        <td>{appointments.appointment_date}</td>
                        <td>{appointments.appointment_type}</td>
                        <td>{appointments.patient.name}</td>
                        <td>{appointments.patient.age}</td>
                        <td>{appointments.staff.name}</td>
                        </tr>
                </tbody>
            </Table>)
        }
    }
  return (
    <div>
        <Menu/>
      <Container className=''>
        {handleAppointment()}
        </Container>
    </div>
  )
}

export default AppointmentTable