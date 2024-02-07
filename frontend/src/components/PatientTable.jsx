import React from 'react'
import { useState, useEffect} from "react"
import {Container, Table} from 'react-bootstrap';


function PatientTable({patientdata}) {
    const  [patients, setPatients] = useState([])
    // window.location.reload()
    useEffect(()=>{
        async function fetchPatients(){
            try{
                await fetch('/patients')
                .then(response => response.json())
                .then(data => setPatients(data))
            }catch (error){
                console.log('Error: ', error)
            }
        }
        fetchPatients()
    },[])      window.location.reload()

  return (
    <div className='mt-5'>
        <Container className='table-container'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Phone Number</th>
                    <th>E-mail</th>
                    <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                {patients.map(item => (
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.date_of_birth}</td>
                        <td>{item.contact_number}</td>
                        <td>{item.email}</td>
                        <td>{item.age}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
        
    </div>
  )
}

export default PatientTable