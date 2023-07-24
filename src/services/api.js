import axios from "axios";

const Bais_Api = 'http://localhost:5000/api';
axios.defaults.withCredentials = true;



// Get All Books
export const getAllBooks = () => {
    return axios.get(`${Bais_Api}/home`)
}


// Get Single Book

export const getSingleBook = (id) => {
    return axios.get(`${Bais_Api}/home/${id}`)
}

//Add Book

export const addBook = (book) => {
    return axios.post(`${Bais_Api}/admin/book`, book)
}

// Delete Book

export const deleteBook = (id) => {
    return axios.delete(`${Bais_Api}/admin/book/${id}`)
}

// Update Book

export const updateBook = (book) => {
    return axios.put(`${Bais_Api}/admin/book`, book)
}

//User Redister 
export const userRegister = (RegisterUser) => {
    return axios.post(`${Bais_Api}/Register`, RegisterUser)
}

//User Log in
export const userLogin = (LoginUser) => {
    return axios.post(`${Bais_Api}/login`, LoginUser)

}