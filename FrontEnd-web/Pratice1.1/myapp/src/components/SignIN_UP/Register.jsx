import React,{ useState } from 'react'
import { Form,Button } from "react-bootstrap";
import  axios  from "../../axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Sign.css"

function Register() {
    const input = {
        U_firstname : "",
        U_lastname : "",
        U_username : "",
        U_email : "",
        U_password : "",
        U_qualification : "",
        U_age : "",
        U_gender : "",
        U_contact : "",
        U_address: "" };
    const[courses,setCourses] = useState(input);
    const { U_firstname, U_lastname,U_username, U_email,U_password,U_qualification,U_age, U_gender,U_contact,U_address } = courses;
    const handleInputChange = e =>{
        setCourses({...courses, [e.target.id]: e.target.value})
    }
    const handleFinalSubmit = e =>{
        console.log(courses);
        axios.post('/user',courses)
    }
    return (
        <div className="sign">
            <h1>Register</h1>

            <Form>
                
                <Form.Group>
                  <Form.Label>Firstname</Form.Label>
                  <Form.Control type="text" placeholder="Enter Firstname" id="U_firstname" className="input" value={U_firstname} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Lastname </Form.Label>
                  <Form.Control type="text" placeholder="Enter Lastname" id="U_lastname" className="input" value={U_lastname} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Username </Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" id="U_username" className="input" value={U_username} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" id="U_email" className="input" value={U_email} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" id="U_password" className="input" value={U_password} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Qualifications</Form.Label>
                  <Form.Control type="text" placeholder="Enter qualification" id="U_qualification" className="input" value={U_qualification} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="text" placeholder="Enter age" id="U_age" className="input" value={U_age} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter contact number" id="U_contact" className="input" value={U_contact} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter address" id="U_address" className="input" value={U_address} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control type="text" placeholder="Enter Gender" id="U_gender" className="input" value={U_gender} onChange={handleInputChange}/>
                </Form.Group>
                {/* <Form.Group>
                    <Form.File id="U_avatar" label="Select Avatar" className="input" />
                </Form.Group> */}
              <Button type='submit' variant="primary" id="submit" className="input" onClick ={handleFinalSubmit}>
                Submit
              </Button>
            </Form> 
        </div>
    )
}

export default Register
