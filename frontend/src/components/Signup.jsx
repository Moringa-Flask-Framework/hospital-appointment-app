// import React from 'react'
// import { useState} from "react"
// import {Form,Row,Col,Card,Container, Button} from 'react-bootstrap';
// import { useHistory } from "react-router-dom";

// function SignUp() {

//   const[loading, setLoading]= useState(false);
//   // const[error, setError]= useState(null);
//   const [signUpData, setSignUpData] = useState({
//       username: '',
//       password: '',
//       role: '',     
//     });

//   const history = useHistory();

//   const handleInputChange = (e) => {
//       setSignUpData({
//         ...signUpData,
//         [e.target.name]: e.target.value,
//       });
//     };

//   const handleSubmit = async (e) =>{
//       e.preventDefault();
//       // console.log("I am clicked");
//       const response = await fetch('/signup', {
//           method: 'POST',
//           body: JSON.stringify(signUpData),
//           headers: {
//               'Content-Type': 'application/json'
//           }
//       })
//       .then(response => {
//       if (!response.ok) {
//           throw new Error('Network response was not ok');
//       }
//     //   alert("User created successifully")
//       // window.location.reload();
//       history.push('/login');
//       return response.json();
      

//       })
//       .then(data=> {
//       setLoading(false);
//       })
//       .catch(error => {
//       console.log(error);
//       setLoading(false);
//       });
//   }

//   return (
//     <div>
//         <Container className='mt-5'>
//             <Form onSubmit={handleSubmit}>
//                 <Row>
//                     <Col>
//                         <h3 className="text-center mt-3 mb-4">Create Account</h3>
//                         <Form.Control name='username' value={signUpData.username} onChange={handleInputChange} type='text' placeholder="Username" /><br/>
//                         <Form.Control name='password' value={signUpData.password} onChange={handleInputChange} type='password' placeholder="Password" /><br/>
//                         <Form.Select name='role' value={signUpData.role} onChange={handleInputChange} aria-label="Default select example">
//                             <option>Role</option>
//                             <option value="Doctor">Doctor</option>
//                             <option value="Nurse">Nurse</option>
//                             <option value="Er Medic">Er Medic </option>
//                             <option value="Receptionist">Receptionist</option>
//                             <option value="Head Doctor">Head Doctor</option>
//                         </Form.Select><br/>
//                         <Button variant="primary" type="submit">
//                             Sign Up
//                         </Button>
//                         {/* {error && <p className="text-danger mt-2">{error}</p>} */}
//                     </Col>
//                     <Col>
//                     <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image"/>
//                     </Col>
//                 </Row>
                
//             </Form>
//         </Container>
//     </div>
//   )
// }

// export default SignUp