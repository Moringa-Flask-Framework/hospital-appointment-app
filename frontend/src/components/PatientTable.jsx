import React from 'react'
import { useState, useEffect} from "react"
import {Container, Table} from 'react-bootstrap';


function PatientTable() {
    const  [patients, setPatients] = useState([])

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
    },[])
    console.log(patients)
  return (
    <div className='mt-5'>
        <Container>
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
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        
    </div>
  )
}

export default PatientTable