import React from 'react'
import { useState, useEffect} from "react"
import {Form,Row,Col,Card,Container, Button} from 'react-bootstrap';

function SignUp() {

  const[loading, setLoading]= useState(false);
  const[error, setError]= useState(null);
  const [signUpData, setSignUpData] = useState({
      username: '',
      password: '',
      role: '',     
    });

  const handleInputChange = (e) => {
      setSignUpData({
        ...signUpData,
        [e.target.name]: e.target.value,
      });
    };

  const handleSubmit = async (e) =>{
      e.preventDefault();
      // console.log("I am clicked");
      const response = await fetch('/signup', {
          method: 'POST',
          body: JSON.stringify(signUpData),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
      })
      .then(data=> {
      setLoading(false);
      })
      .catch(error => {
      setError(error);
      setLoading(false);
      });
  }

  return (
    <div>
        <Container>
            <h3 className="text-center mt-3 mb-4">Sign Up Form</h3>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Control name='username' value={signUpData.username} onChange={handleInputChange} type='text' placeholder="Enter User Name" /><br/>
                        <Form.Control name='password' value={signUpData.password} onChange={handleInputChange} type='number' placeholder="Enter your password" /><br/>
                        <Form.Select name='role' value={SignupData.role} onChange={handleInputChange} aria-label="Default select example">
                            <option>Role</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Nurse">Nurse</option>
                            <option value="Er Medic">Er Medic </option>
                            <option value="Receptionist">Receptionist</option>
                            <option value="Head Doctor">Head Doctor</option>
                        </Form.Select><br/>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </Container>
    </div>
  )
}

export default SignUp