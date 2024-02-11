import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Menu from './Menu'
import {Link} from 'react-router-dom'
import { FaUserDoctor } from "react-icons/fa6";
import { MdSick } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import Header from './Header';

function Home() {
  return (
    <div>
      <Header/>
      <Menu/>
        <Container>
          <Row >
            <h2 className='menuhead mb-12'>Hospital appointment system</h2>
            <Col>
            <Link to={`/staffs`}><FaUserDoctor className='icons' /> </Link>
            <p className='mt-3'>Staff Management</p>
            </Col>
            <Col>
            <Link to={`/patients`}><MdSick className='icons' /> 
            </Link>
            <p className='mt-3'>Patient Management</p>
            </Col>
            <Col>
            <Link to={`/appointments`}><FaClipboardList className='icons' /> </Link>
            <p  className="mt-3">Appointment Management</p>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Home