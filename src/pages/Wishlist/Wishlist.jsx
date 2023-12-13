import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from './../../hooks/useAxiosSecure';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import WishlistCard from "./WishlistCard";
import { Helmet } from "react-helmet-async";

const Wishlist = () => {
    const { user } = useAuth();
    const [blogs, setBlogs] = useState([]);
    const axiosSecure = useAxiosSecure();

    const url = `/wishlist?email=${user?.email}`;

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                setBlogs(res.data);
            })
    }, [url, axiosSecure]);

    const handleRemove = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/remove-from-wishlist/${_id}?email=${user?.email}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your wishlisted blog has been deleted',
                                'success'
                            )
                            const remaining = blogs.filter(blg => blg._id !== _id);
                            setBlogs(remaining);
                        }
                    })
            }
        })
    }

    return (
        <>
            <Helmet>
                <title>Wishlist | BlogHub</title>
            </Helmet>
            <div className="mb-11">
                <h3 className="text-3xl font-bold text-center my-14">Wishlist</h3>
                {
                    blogs ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9'>
                        {
                            blogs?.map(blog => <WishlistCard
                                key={blog._id}
                                blog={blog}
                                handleRemove={handleRemove}
                            ></WishlistCard>)
                        }
                    </div> : <div className="text-center mt-52">
                        <h3 className="text-3xl my-5">Oops!!!</h3>
                        <p className="mb-9 text-lg">No blog available</p>
                        <Link to='/'><button className="btn bg-orange-500 font-semibold text-white normal-case hover:bg-orange-500">Go Home</button></Link>
                    </div>
                }
            </div>
        </>
    );
};

export default Wishlist;