import { Alert, Col, Container, FormGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { userLogin } from '../../services/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigat = useNavigate()

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }


    const loginSubmitHundler = async (e) => {
        e.preventDefault();
        // console.log(email, password);
        const res = await userLogin(
            {
                Email: email,
                Password: password,
            }
        );
        if ((res.status === 200 || res.status === 201) && res.statusText === "OK") {
            // console.log(res);
            navigat('/admin')
        }
    }

    return (
        <>
            <Container fluid className='container_Auth'>
                <Row className='row_Auth'>
                    <Col lg='4' md='6' sm='4' className='col_Auth p-4 bg-light rounded-4'>
                        <h3 className='text-center mb-4'>Welcome Back</h3>
                        <Form onSubmit={loginSubmitHundler}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="ps-1 form_Label">E-mail</Form.Label>
                                <Form.Control className='rounded-4' type="email" placeholder="Email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                                {email && !validateEmail(email) && (
                                    <Alert variant="danger">Please enter a valid email</Alert>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="formBasicPassword">
                                <Form.Label className="ps-1 form_Label">Password</Form.Label>
                                <Form.Control className='rounded-4' type="text" placeholder="Password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} />
                            </Form.Group>
                            <Form.Group className="d-f text-center" >
                                <Button className='Auth_btn rounded-4 py-2' type="submit">
                                    Log in
                                </Button>
                            </Form.Group>
                        </Form>
                        <p className='text-center my-3'>Don't have an account? <Link to={'/register'} style={{ textDecoration: 'none' }} >Sign up</Link> </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login