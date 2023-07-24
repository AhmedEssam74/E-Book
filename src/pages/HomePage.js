import React, { useEffect, useState } from 'react'
import { getAllBooks } from '../services/api';
import BookItem from '../components/BookItem';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import MainSection from '../components/MainSection';

const HomePage = () => {
    const [books, setBooks] = useState([])
    const navigate = useNavigate();

    const BookList = books.map(book => (
        <Col lg='4' md='4' sm='6' key={book.id} onClick={() => { navigate(`/home/${book.id}`) }} >
            <BookItem book={book} />
        </Col>
    ));

    const getBooks = async () => {
        try {
            const res = await getAllBooks();
            setBooks(res.data.response);
            // console.log(res.data.response);
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getBooks()
    }, [])



    return (
        <>
            <MainSection />
            <Container>
                <Row className='mt-5'>
                    <h2 className='text-center mb-5' >
                        Our Books
                    </h2>
                    {BookList}
                </Row>
            </Container>
        </>
    )
}

export default HomePage
