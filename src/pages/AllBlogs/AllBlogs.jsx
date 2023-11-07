import Blogs from "../../components/Blogs/Blogs";

const AllBlogs = () => {
    return (
        <div className="mb-11">
            <h3 className="text-3xl font-bold text-center mt-14 mb-9">All Blogs</h3>
            <div className="join mb-14 flex justify-center">
                <input className="input input-bordered join-item w-64" placeholder="Search here..." />
                <button className="btn join-item rounded-r-xl normal-case w-24 bg-orange-500 text-white hover:bg-orange-500">Search</button>
            </div>
            <Blogs></Blogs>
        </div>
    );
};

export default AllBlogs;