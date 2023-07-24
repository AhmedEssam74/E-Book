import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layoutes/HomeLayout";
import HomePage from "../pages/HomePage";
import BookDetailes from "../pages/BookDetailes";
import AdminLayout from "../layoutes/AdminLayout";
import BooksList from "../pages/Admin/BooksList";
import AddBook from "../pages/Admin/AddBook";
import UpdatedBook from "../pages/Admin/UpdatedBook";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Error from "../components/Error";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "home/:id",
                element: <BookDetailes />
            },
        ]
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "register",
        element: <Register />
    },
    {
        path: 'admin',
        element: <AdminLayout />,
        children: [
            {
                path: '',
                element: <BooksList />
            },
            {
                path: 'book',
                element: <AddBook />
            },
            // {
            //     path: 'book/:id',
            //     element: <UpdatedBook />
            // }
        ]
    }
])