import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from './../pages/ErrorPage/ErrorPage';
import Home from "../pages/Home/Home/Home";
import Login from './../pages/Login/Login';
import Register from './../pages/Register/Register';
import Wishlist from "../pages/Wishlist/Wishlist";
import FeaturedBlogs from "../pages/FeaturedBlogs/FeaturedBlogs";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import AddBlog from "../pages/AddBlog/AddBlog";
import UpdateBlog from "../pages/UpdateBlog/UpdateBlog";
import BlogDetails from "../pages/BlogDetails/BlogDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/all-blogs')
            },
            {
                path: '/add-blog',
                element: <AddBlog></AddBlog>,
                loader: () => fetch('http://localhost:5000/add-blog')
            },
            {
                path: '/all-blogs',
                element: <AllBlogs></AllBlogs>,
                loader: () => fetch('http://localhost:5000/all-blogs')
            },
            {
                path: '/featured-blogs',
                element: <FeaturedBlogs></FeaturedBlogs>
            },
            {
                path: '/wishlist',
                element: <Wishlist></Wishlist>
            },
            {
                path: '/blog/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/blog/${params.id}`)
            },
            {
                path: '/blog-from-wishlist/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/blog-from-wishlist/${params.id}`)
            },
            {
                path: '/update-blog/:id',
                element: <UpdateBlog></UpdateBlog>,
                loader: ({ params }) => fetch(`http://localhost:5000/blog/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router;