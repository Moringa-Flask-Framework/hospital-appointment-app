import React from 'react'
import { useEffect, useState } from 'react'
import {ButtonGroup, Container, Table, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";


function AppointmentTable() {
  const  [appointments, setAppointments] = useState([])
    useEffect(()=>{
        async function fetchData(){
            try{
                await fetch('/appointments')
                .then(response => response.json())
                .then(data => setAppointments(data))
            }catch (error){
                console.log('Error: ', error)
            }
        }
        fetchData()
    },[])
    // console.log(appointments)

    function handleDelete(id) {
        fetch(`/appointments/${id}`, {
            method: "DELETE",
            }).then((r) => {
            if (r.ok) {
                setAppointments((appointments) =>
                appointments.filter((appointment) => appointment.id !== id)
                );
            }
            });

            alert ("Deleted")

      } 
    
  return (
    <div>
      <Container className='table-container'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Appointment Date</th>
                    <th>Appointment Type</th>
                    <th>Patient Name</th>
                    <th>Patient Age</th>
                    <th>Staff Name</th>
                    <th></th>
                    <th>Delete</th>
                    <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                {appointments.map(item => (
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.appointment_date}</td>
                        <td>{item.appointment_type}</td>
                        <td>{item.patient.name}</td>
                        <td>{item.patient.age}</td>
                        <td>{item.staff.name}</td>
                        <td>
                        <Link to={`/appointments/${item.id}`}>More</Link></td>
                        <td><Button variant='danger' onClick={() => handleDelete(item.id)}>Delete</Button></td>
                        <td><Button variant='success'><Link to={`/appointments/${item.id}/edit`} className="link">Update</Link></Button></td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    </div>
  )
}

export default AppointmentTable