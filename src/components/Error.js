import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Error = () => {
    return (
        <Container>
            <Row className='d-flex justify-content-center align-items-center' >
                <Col lg={6} style={{backgroundColor:'red'}} >
                    <h1 className='text-center' >Error 404</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Error
