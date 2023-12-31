import { useLoaderData } from "react-router-dom";
import BlogsCard from "../BlogsCard/BlogsCard";

const Blogs = () => {
    const loadedBlogs = useLoaderData();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9'>
            {
                loadedBlogs.map(blog => <BlogsCard
                    key={blog._id}
                    blog={blog}
                ></BlogsCard>)
            }
        </div>
    );
};

export default Blogs;