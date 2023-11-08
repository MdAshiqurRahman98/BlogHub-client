import { useEffect, useState } from "react";
import Blogs from "../../components/Blogs/Blogs";
import axios from "axios";

const AllBlogs = () => {
    const [categoryValue, setCategoryValue] = useState('');
    const [search, setSearch] = useState('');
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/all-blogs/search?search=${search}`)
            .then(res => {
                setBlogs(res.data);
            })
    }, [search]);

    const handleCategory = event => {
        console.log(event.target.value);
        setCategoryValue(event.target.value);
    };

    const handleSearch = event => {
        event.preventDefault();

        const form = event.target;
        const searchText = form.search.value;
        setSearch(searchText);

        if (blogs.length > 0) {
            const blog = blogs.find(blg => blg.title === search);
            setBlogs(blog);
            form.reset();
        }
    }

    return (
        <div className="mb-11">
            <h3 className="text-3xl font-bold text-center mt-14 mb-9">All Blogs</h3>
            <div className="mb-14 flex justify-between">
                <select value={categoryValue} onChange={handleCategory} name="category" id="" className="select select-bordered w-full max-w-xs">
                    <option value='Technology'>Technology</option>
                    <option value='Food'>Food</option>
                    <option value='Travel'>Travel</option>
                </select>
                <form onSubmit={handleSearch}>
                    <div className="join">
                        <input type="text" name="search" placeholder="Search here..." className="input input-bordered join-item w-64" />
                        <input type="submit" value="Search" className="btn join-item rounded-r-lg normal-case w-24 bg-orange-500 text-white hover:bg-orange-500" />
                    </div>
                </form>
            </div>
            <Blogs></Blogs>
        </div>
    );
};

export default AllBlogs;