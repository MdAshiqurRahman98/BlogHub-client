import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const FeaturedBlogs = () => {
    const loadedBlogs = useLoaderData();

    return (
        <>
            <Helmet>
                <title>Featured Blogs | BlogHub</title>
            </Helmet>
            <div className='mb-11'>
                <h3 className="text-3xl font-bold text-center mt-14 mb-9">Featured Blogs</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr className="text-base">
                                <th>Serial Number</th>
                                <th>Blog Title</th>
                                <th>Blog Category</th>
                                <th>Short Description</th>
                                <th>Posted Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loadedBlogs.map((blog, index) => <tr key={blog._id}>
                                    <th>{index + 1}</th>
                                    <td>{blog.title}</td>
                                    <td>{blog.category}</td>
                                    <td>{blog.shortDescription}</td>
                                    <td>{blog.timestamp}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default FeaturedBlogs;