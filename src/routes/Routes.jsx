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

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add-blog',
                element: <AddBlog></AddBlog>
            },
            {
                path: '/all-blogs',
                element: <AllBlogs></AllBlogs>
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