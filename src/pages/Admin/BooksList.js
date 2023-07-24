import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { deleteBook, getAllBooks, updateBook } from '../../services/api';
import { Button, CardImg, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const BooksList = () => {

    // popUp form
    const [showForm, setShowForm] = useState(false);
    const handleButtonClick = () => {
        setShowForm(true);
    };
    const handleCloseForm = () => {
        setShowForm(false);
    };
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');
    const [release_Date, setRelease_Date] = useState('');
    const onSubmitHandler = async (e) => {
        e.preventdefult()
        console.log(title, image, author, pages, release_Date);
        const res = await updateBook({
            title,
            cover_Image: image,
            author,
            pages,
            release_Date
        }
        ).then(() => {
            console.log(res.data.response);
            if (res.status === 201 || res.status === 200) {
                handleCloseForm()
                // getBookTable()
            }
        })
    }


    // ------------------------------------------------------------
    const [books, setBooks] = useState([])
    const navigate = useNavigate()

    const renderBookRows = books.map((book) => (
        <tr key={book.id}>
            <td> {book.id} </td>
            <td> <CardImg src={book.cover_Image} style={{ height: '200px' }} /></td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.pages}</td>
            <td>{book.release_Date}</td>
            <td>
                <Button variant='primary' onClick={() => {
                    handleButtonClick()
                    // updateSelectedBook(book.id);
                    // navigate(`book/${book.id}`)
                }} >Update</Button>
            </td>
            <td>
                <Button variant='danger' onClick={() => { deleteSelectedBook(book.id) }}>Delete</Button>
            </td>
        </tr>
    ))


    // //Update book
    // const updateSelectedBook = (id) => {
    //     console.log(`Updating ${id}`);
    //     getSingleBook(id).then((res) => {
    //         console.log(res.data);
    //         if (res.status === 200 || res.status === 201) {
    //             console.log(res);
    //         }
    //     })
    // }

    //Deletig Book
    const deleteSelectedBook = (id) => {
        console.log(`Deleting ${id}`);
        deleteBook(id).then((res) => {
            if (res.status === 200 || res.status === 201) {
                getBookTable()
            }
        })
    }
    //Add All Book To The Table
    const getBookTable = async () => {
        const res = await getAllBooks()
        setBooks(res.data.response)
    }

    useEffect(() => {
        getBookTable()
    }, [])

    return (
        <>
            <Row className='my-3' >
                <Col>
                    <Button as={Link} to={'book'} style={{ backgroundColor: '#1A9D57', border: 'none' }} >Add New Book</Button>
                </Col>
                <Col>
                    <Button as={Link} to={'/'} style={{ backgroundColor: '#1A9D57', border: 'none' }} >Home</Button>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col lg='12' md='12' sm='12'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th> id </th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Auther</th>
                                <th>Pages</th>
                                <th>Release_Date</th>
                                <th>Actions</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderBookRows}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Container className='popUp_Container' style={{ width: '950px' }}  >
                <Row>
                    <Col lg={6} style={{ backgroundColor: '#1A9D57', }} className='rounded-4' >
                        {showForm && (
                            <Container className='mt-3'>
                                <Form onSubmit={onSubmitHandler} >
                                    <Form.Group className="mb-3" controlId="title">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Title"
                                            value={title}
                                            onChange={(e) => { setTitle(e.target.value) }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="image">
                                        <Form.Label>Image</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Image Url"
                                            value={image}
                                            onChange={(e) => { setImage(e.target.value) }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="author">
                                        <Form.Label>Author</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Author"
                                            value={author}
                                            onChange={(e) => { setAuthor(e.target.value) }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="pages">
                                        <Form.Label>Pages</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Pages"
                                            value={pages}
                                            onChange={(e) => { setPages(e.target.value) }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="release_Date">
                                        <Form.Label>Release_Date</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Release_Date"
                                            value={release_Date}
                                            onChange={(e) => { setRelease_Date(e.target.value) }}
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Container>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default BooksList
