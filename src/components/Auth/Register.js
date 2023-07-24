import { Alert, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { userRegister } from '../../services/api';

function Register() {
    const navigat = useNavigate()
    const [fristname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmpassword, setConfirmPassword] = useState('');

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const onSubmithandler = async (e) => {
        try {
            e.preventDefault()
            // console.log(fristname, lastname, phone, age, email, password);
            const res = await userRegister(
                {
                    email: email,
                    password: password,
                    age: age,
                    phone: phone,
                    fristname: fristname,
                    lastname: lastname,
                }
            );
            if ((res.status === 200 || res.status === 201) && res.statusText === "OK") {
                // console.log(res);
                navigat('/')
            }
        } catch (error) {
            console.log(error, 'error')
        }
    }


    return (
        <>
            <Container fluid className='container_Auth'>
                <Row className='row_Auth_Register  py-5'>
                    <Col lg='4' md='6' sm='4' className='col_Auth p-4 bg-light rounded-4'>
                        <h3 className='text-center mb-4'>Create an acount</h3>
                        <Form onSubmit={onSubmithandler}>
                            <Row className='justify-content-around'>
                                <Col lg='6' md='6' sm='12'>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label className="ps-1 form_Label">First Name</Form.Label>
                                        <Form.Control className="mb-3 rounded-4" type="text" placeholder="first name"
                                            value={fristname}
                                            onChange={(e) => { setFirstName(e.target.value) }}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg='6' md='6' sm='12'>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label className="ps-1 form_Label">Last Name</Form.Label>
                                        <Form.Control className='rounded-4' type="text" placeholder="last name"
                                            value={lastname}
                                            onChange={(e) => { setLastName(e.target.value) }}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label className="ps-1 form_Label">Phone Number</Form.Label>
                                <Form.Control className='rounded-4' type="text" placeholder="Phone Number"
                                    value={phone}
                                    onChange={(e) => { setPhone(e.target.value) }}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAge">
                                <Form.Label className="ps-1 form_Label">Age</Form.Label>
                                <Form.Control className='rounded-4' type="text" placeholder="Age"
                                    value={age}
                                    onChange={(e) => { setAge(e.target.value) }}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="ps-1 form_Label">E-mail</Form.Label>
                                <Form.Control className='rounded-4' type="email" placeholder="Email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    required
                                />
                                {email && !validateEmail(email) && (
                                    <Alert variant="danger">Please enter a valid email</Alert>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="ps-1 form_Label">Password</Form.Label>
                                <Form.Control className='rounded-4' type="text" placeholder="Password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    required
                                />
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="ps-1 form_Label">Confirm Password</Form.Label>
                  <Form.Control className='rounded-4' type="text" placeholder="Confirm Password"
                    value={confirmpassword}
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                    required
                  />
                </Form.Group> */}
                            <Form.Group className="d-f text-center" >
                                <Button className='Auth_btn rounded-4 py-2' type="submit">
                                    Sign up
                                </Button>
                            </Form.Group>
                        </Form>
                        <p className='text-center my-3'>Already have an account? <Link to={'/login'} style={{ textDecoration: 'none' }} >Sign in</Link> </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Register;