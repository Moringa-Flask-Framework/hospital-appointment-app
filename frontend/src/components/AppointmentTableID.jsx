import React from 'react'
import { useEffect, useState } from 'react'
import {Container, Table, Card, ListGroup, Button} from 'react-bootstrap';
import { useParams, Link } from "react-router-dom";
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

    // console.log(appointments)
    // console.log(typeof(appointments))
    // const handleAppointment= ()=>{
    //     if (appointments=== null || appointments.length === 0){
    //         <h3>No appointment history yet.</h3>
    //     }
        
    //     else{
    //        return(
    //         <Table striped bordered hover>
    //             <thead>
    //                 <tr>
    //                 <th>ID</th>
    //                 <th>Appointment Date</th>
    //                 <th>Appointment Type</th>
    //                 <th>Patient Name</th>
    //                 <th>Patient Age</th>
    //                 <th>Staff Name</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                     <td>{appointments.id}</td>
    //                     <td>{appointments.appointment_date}</td>
    //                     <td>{appointments.appointment_type}</td>
    //                     <td>{appointments.patient.name}</td>
    //                     <td>{appointments.patient.age}</td>
    //                     <td>{appointments.staff.name}</td>
    //                     </tr>
    //             </tbody>
    //         </Table>)
    //     }
    // }

    const appointmentCard= ()=> {
        if (appointments=== null || appointments.length === 0){
            <h3>No appointment history yet.</h3>
        }
        
        else{
           return(
            <Card className='mt-6'>
            <Card.Header>Details</Card.Header>
            <Card.Body>
                <Card.Title>Appointment for: {appointments.patient.name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Appointment  ID: {appointments.id}</ListGroup.Item>
                    <ListGroup.Item>Appointment type: {appointments.appointment_type}</ListGroup.Item>
                    <ListGroup.Item>Appointment type: {appointments.appointment_date}</ListGroup.Item>
                    <ListGroup.Item>Appointment with: {appointments.staff.name}</ListGroup.Item>
                    <ListGroup.Item>Patient age: {appointments.patient.age}</ListGroup.Item>
                    <Card.Text>
                        <Button className='mt-4' variant="success"><Link to={`/appointments/${appointments.id}/edit`} className="link">Update</Link></Button>
                    </Card.Text>
                </ListGroup>
                
                
            </Card.Body>
            </Card>
    )
        }
    }
  return (
    <div>
        <Menu/>
      <Container className=''>
        {/* {handleAppointment()} */}
        {appointmentCard()}
        </Container>
    </div>
  )
}

export default AppointmentTable