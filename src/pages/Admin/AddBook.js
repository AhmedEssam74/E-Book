import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addBook } from '../../services/api'
import { useNavigate } from 'react-router-dom';
const AddBook = () => {

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState(1);
  const [release_Date, setRelease_Date] = useState('');
  const navigate = useNavigate()

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(title, image, author, pages, release_Date);
    addBook({
      title,
      cover_Image: image,
      author,
      pages,
      release_Date
    }).then((res) => {
      if (res.status === 201 || res.status === 200) {
        navigate('/admin')
      }
    })
  }



  return (
    <Container className='mt-3'>
      <Form onSubmit={onSubmitHandler} >
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="Enter Image Url"
            value={image}
            onChange={(e) => setImage(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Enter Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="pages">
          <Form.Label>Pages</Form.Label>
          <Form.Control type="text" placeholder="Enter Pages"
            value={pages}
            onChange={(e) => setPages(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="release_Date">
          <Form.Label>Release_Date</Form.Label>
          <Form.Control type="text" placeholder="Enter Release_Date"
            value={release_Date}
            onChange={(e) => setRelease_Date(e.target.value)} />
        </Form.Group>
        <Button style={{ backgroundColor: '#1A9D57', border: 'none' }} type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AddBook
