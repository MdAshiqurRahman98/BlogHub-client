import { useLoaderData } from "react-router-dom";
import FeaturedBlogsTable from "./FeaturedBlogsTable";

const FeaturedBlogs = () => {
    const loadedBlogs = useLoaderData();

    return (
        <div className='mb-11'>
            <h3 className="text-3xl font-bold text-center mt-14 mb-9">Featured Blogs</h3>
            <div>
                {
                    loadedBlogs.map(blog => <FeaturedBlogsTable
                        key={blog._id}
                        blog={blog}
                    ></FeaturedBlogsTable>)
                }
            </div>
        </div>
    );
};

export default FeaturedBlogs;