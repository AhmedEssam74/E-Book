import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <>
            <Container fluid className='p-3' style={{ backgroundColor: '#1BBC9B' }}>
                <Row>
                    <Col>
                        <h1 className='text-center' style={{ color: '#ECDE6A' }}>Admin Area</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AdminLayout
