import React from 'react'
import { Form,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Sign.css"


function Login() {
    return (
        <div className="sign">

            <h1>Login</h1>
            <Form>
                <Form.Group controlId="username">
                  <Form.Label>Username </Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" id="username" className="input" />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" id="password" className="input" />
                </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
        </div>
    )
}

export default Login
