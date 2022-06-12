import axios from 'axios';
import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm( )

    const navigate = useNavigate( )

    const submit =  data  => {
        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
            .then( res => { 
                localStorage.setItem("token", res.data.data.token)
                navigate( "/" )
             } )
            .catch( error => {console.log( error.response.status ) 
            
                if( error.response.status === 404 ){
                    alert( "No estas logeado" )
                }
            } )

        console.log( data )
    }

    return (
        <div>

            <Card 
                style={ { maxWidth: "400px" } } 
                className="mx-auto">
                <Card.Body>
                    <h1 
                        className='text-center'>Login</h1>
                    <Form 
                        onSubmit={ handleSubmit( submit ) }>
                        <Form.Group 
                            className="mb-3" 
                            controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                { ...register( "email" ) } 
                                type="email" 
                                placeholder="Enter email" />
                            <Form.Text 
                                className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group 
                            className="mb-3" 
                            controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                { ...register( "password" ) } 
                                type="password" 
                                placeholder="Password" />
                        </Form.Group>
                        <Button 
                            variant="primary" 
                            type="submit">
                            Submit
                        </Button>
                        </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;