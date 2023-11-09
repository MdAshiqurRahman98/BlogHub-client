import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from './../pages/ErrorPage/ErrorPage';
import Home from "../pages/Home/Home/Home";
import Login from './../pages/Login/Login';
import Register from './../pages/Register/Register';
import Wishlist from "../pages/Wishlist/Wishlist";
import FeaturedBlog from "../pages/FeaturedBlog/FeaturedBlog";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import AddBlog from "../pages/AddBlog/AddBlog";
import UpdateBlog from "../pages/UpdateBlog/UpdateBlog";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://blog-web-app-server-psi.vercel.app/all-blogs')
            },
            {
                path: '/add-blog',
                element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
            },
            {
                path: '/all-blogs',
                element: <AllBlogs></AllBlogs>,
                loader: () => fetch('https://blog-web-app-server-psi.vercel.app/all-blogs')
            },
            {
                path: '/featured-blogs',
                element: <FeaturedBlog></FeaturedBlog>,
                loader: () => fetch('https://blog-web-app-server-psi.vercel.app/featured-blogs')
            },
            {
                path: '/wishlist',
                element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
            },
            {
                path: '/blog/:id',
                element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://blog-web-app-server-psi.vercel.app/blog/${params.id}`)
            },
            {
                path: '/blog-from-wishlist/:id',
                element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://blog-web-app-server-psi.vercel.app/blog-from-wishlist/${params.id}`)
            },
            {
                path: '/update-blog/:id',
                element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
                loader: ({ params }) => fetch(`https://blog-web-app-server-psi.vercel.app/blog/${params.id}`)
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