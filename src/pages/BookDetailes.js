import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { getSingleBook } from '../services/api';


const BookDetailes = () => {
    const { id } = useParams();
    const [book, setBook] = useState({})

    const getBookDetailes = async () => {
        try {
            const res = await getSingleBook(id);
            console.log(res.data.response);
            setBook(res.data.response)
        } catch (err) {
            console.error(err)
        }
    }


    useEffect(() => {
        getBookDetailes()
    }, [])


    return (
        <Container className='mt-5' >
            <Row className='d-flex justify-content-center'>
                <Col lg='8' md='8' sm='8' >
                    <Card>
                        <Card.Img variant="top" src={book.cover_Image} style={{ objectFit: 'contain', height: '500px' }} />
                        <Card.Body>
                            <Card.Text>Title: {book.title} </Card.Text>
                            <Card.Text>Author: {book.author} </Card.Text>
                            <Card.Text>Pages: {book.pages} </Card.Text>
                            <Card.Text>Release_Date: {book.release_Date} </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default BookDetailes
