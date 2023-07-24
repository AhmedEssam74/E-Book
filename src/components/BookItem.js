import { useState } from 'react';
import Card from 'react-bootstrap/Card';
const BookItem = ({ book }) => {
    
    return (
        <Card>
            <Card.Img variant="top" height={'300px'} style={{objectFit:'contain'}} src={book.cover_Image} />
            <Card.Body>
                <Card.Title>Title:{book.title}</Card.Title>
                <Card.Title>Author:{book.author}</Card.Title>
                <Card.Title>Pages: {book.pages}</Card.Title>
                <Card.Title>Release_Date: {book.release_Date}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default BookItem
