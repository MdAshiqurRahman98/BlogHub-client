import { Link, useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const blogs = useLoaderData();
    const { _id, title, image, category, shortDescription, longDescription } = blogs || {};

    return (
        <div className="my-11">
            <figure className="flex justify-center"><img className="rounded-md w-[300px] h-[300px] md:w-[350px] md:h-[350px] object-cover" src={image} alt="Blog image" /></figure>
            <div className="flex justify-end">
                <Link to={`/update-blog/${_id}`}>
                    <button className="btn text-white bg-orange-500 hover:bg-orange-500 normal-case text-lg font-medium rounded-lg mt-5 md:mt-0">Update Blog</button>
                </Link>
            </div>
            <h3 className="my-5 text-4xl font-bold">{title}</h3>
            <p className="mb-5 font-semibold">Category: {category}</p>
            <p className="mb-1">{shortDescription}</p>
            <p className="text-justify">{longDescription}</p>
        </div>
    );
};

export default BlogDetails;