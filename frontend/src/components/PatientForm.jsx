import React from 'react'
import { useState, useEffect} from "react"
import { Link } from 'react-router-dom';
import {Form,Row,Col,Card,Container, Button} from 'react-bootstrap';

function PatientForm() {
    // const [name, setName] = useState("");
    // const [age, setAge] = useState(0);
    // const [gender, setGender] = useState("Male");
    // const [date_of_birth, setDob]= useState('')
    // const [email, setEmail]= useState('')
    // const [contact_number, setPhone] = useState('')
    // const [message, setMessage] = useState("");\
    const[loading, setLoading]= useState(false);
    const[error, setError]= useState(null);
    const [patientData, setPatientData] = useState({
        name: '',
        age: '',
        gender: '',
        contact_number: '',
        email: '',
        date_of_birth: '',        
      });

    const handleInputChange = (e) => {
        setPatientData({
          ...patientData,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/patients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(patientData),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log('Data posted successfully:', data);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    }
    
  return (
    <div>
        <Container>
            <h3 className="text-center mt-3 mb-4">Patient Information Form</h3>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Control name='name' value={patientData.name} onChange={handleInputChange} type='text' placeholder="Name" /><br/>
                        <Form.Select name='gender' value={patientData.gender} onChange={handleInputChange} aria-label="Default select example">
                            <option>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Select><br/>
                        <Form.Control name='age' value={patientData.age} onChange={handleInputChange} type='number' placeholder="Age" /><br/>
                    </Col>
                    <Col>
                        <Form.Control name='date_of_birth' value={patientData.date_of_birth} onChange={handleInputChange} type='date' placeholder="Date of Birth" /><br/>
                        <Form.Control name='contact_number' value={patientData.contact_number} onChange={handleInputChange} type='text' placeholder="Phone Number" /><br/>
                        <Form.Control name='email' value={patientData.email} onChange={handleInputChange} type='email' placeholder="example@domain.com" />
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Add Patient
                </Button>
            </Form>
        </Container>
        
    </div>
    // <div className="w-full h-full centered-container">
    // <div className="w-1/2 centered-div">
    //     <Container>
    //         <Form onSubmit={handleSubmit}>
    //             <Row>
    //                 <Col>
    //                     <label>
    //                     <input
    //                         className="block w-full mt-4 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                         placeholder="Name"
    //                         type="text"
    //                         name="name" // add name attribute
    //                         value={patientData.name} // add value attribute
    //                         onChange={handleInputChange}
    //                     />
    //                     </label>
    //                     <br />
    //                     <label>
    //                     <input
    //                         className="block w-full mt-4 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                         placeholder="Name"
    //                         type="date"
    //                         name="date_of_birth" // add name attribute
    //                         value={patientData.date_of_birth} // add value attribute
    //                         onChange={handleInputChange}
    //                     />
    //                     </label>
    //                     <br />
    //                     <label>
    //                     <input
    //                         className="block w-full mt-3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                         placeholder="Age"
    //                         type="number"
    //                         name="age" // add name attribute
    //                         value={patientData.age} // add value attribute
    //                         onChange={handleInputChange}
    //                     />
    //                     </label>
    //                     <br />
    //                 </Col>
    //                 <Col>
    //                     <label>
    //                     <input
    //                         className="block w-full mt-3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                         placeholder="example@mail.domain"
    //                         type="email"
    //                         name="email" // add name attribute
    //                         value={patientData.email} // add value attribute
    //                         onChange={handleInputChange}
    //                     />
    //                     </label>
    //                     <br />
    //                     <label>
    //                     <input
    //                         className="block w-fuuserll mt-3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                         placeholder="Phone Number"
    //                         type="text"
    //                         name="contact_number" // add name attribute
    //                         value={patientData.contact_number} // add value attribute
    //                         onChange={handleInputChange}
    //                     />
    //                     </label>
    //                     <br />
    //                 </Col>
    //             </Row>
                
                
    //             <br />

    //             <Button variant="primary" type="submit" className="mt-3 mb-4">
    //             {loading ? 'Loading...' : 'Add Patient'} {/* show loading spinner */}
    //             </Button>
    //         </Form>
    //     </Container>
      
//     </div>
//   </div>
  )
}

export default PatientForm