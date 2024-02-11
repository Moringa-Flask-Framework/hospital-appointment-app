// import React from 'react'
// import { Container, Form, Col, Row, Button } from 'react-bootstrap'

// function Login() {

//   function handleSubmit(e){
//     e.preventDefault();
//     console.log("I have been clicked")
//   }
//   return (
//     <div>
//       <h3>Login</h3>
//       <Col>
//           <Container>
//             <Form onSubmit={handleSubmit()}>
//               <Form.Group as={Row} className="mb-3" controlId="formPlaintextUsername">
//                 <Col sm="10">
//                   <Form.Control type='text' placeholder='Username' />
//                 </Col>
//               </Form.Group>
//               <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
//                 <Col sm="10">
//                   <Form.Control type="password" placeholder="Password" onChange={(e)=>e.target.value}/>
//                 </Col>
//               </Form.Group>
//               <Button variant="primary" type="submit">
//                 Submit
//               </Button>
//             </Form>
            
//           </Container>
//       </Col>
//       <Col>
//       <p>Don't have an account? Register <a href="/register">here</a>.</p>
//       </Col>
      
//     </div>
//   )
// }

// export default Login