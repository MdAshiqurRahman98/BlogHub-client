import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Comments from "../../components/Comments/Comments";

const BlogDetails = () => {
    const blogs = useLoaderData();
    const { _id, title, image, category, shortDescription, longDescription, timestamp } = blogs || {};

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const userName = user.displayName;
    const userPhoto = user.photoURL;

    const getCurrentTimestamp = () => {
        const currentDate = new Date();
        return currentDate.toISOString();
    }

    const handleComment = event => {
        event.preventDefault();

        const form = event.target;
        const comment = form.comment.value;

        const newComment = { _id, title, category, userName, userPhoto, comment, timestamp: getCurrentTimestamp() };

        console.log(newComment);

        // Send data to the server
        axiosSecure.post(`/add-comment?email=${user?.email}`, newComment)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    form.reset();
                }
            })
    }

    return (
        <div className="my-11">
            <figure className="flex justify-center"><img className="rounded-md w-[300px] h-[300px] md:w-[350px] md:h-[350px] object-cover" src={image} alt="Blog image" /></figure>
            <div className="flex justify-end">
                <Link to={`/update-blog/${_id}`}>
                    <button className="btn text-white bg-orange-500 hover:bg-orange-500 normal-case text-lg font-medium rounded-lg mt-5 md:mt-0">Update Blog</button>
                </Link>
            </div>
            <h3 className="my-5 text-4xl font-bold">{title}</h3>
            <p className="mb-1 font-semibold">Posted: {timestamp}</p>
            <p className="mb-5 font-semibold">Category: {category}</p>
            <p className="mb-1">{shortDescription}</p>
            <p className="mb-9 text-justify">{longDescription}</p>

            <div className="mb-11">
                <form onSubmit={handleComment}>
                    <header className="card-title">Comment</header>
                    <div className="form-control w-1/2 my-7">
                        <textarea name="comment" placeholder="Comment" className="textarea textarea-bordered h-32 w-full"></textarea>
                    </div>
                    <input type="submit" value="Add Comment" className="btn w-1/2 text-white bg-orange-500 hover:bg-orange-500 normal-case" />
                </form>
            </div>
            <Comments key={_id} _id={_id}></Comments>
        </div>
    );
};

export default BlogDetails;