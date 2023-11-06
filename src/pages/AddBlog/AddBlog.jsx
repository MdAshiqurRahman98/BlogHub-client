import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';

const AddBlog = () => {
    const [categoryValue, setCategoryValue] = useState("");

    const handleCategoryChange = event => {
        console.log(event.target.value);
        setCategoryValue(event.target.value);
    };

    const getCurrentTimestamp = () => {
        const currentDate = new Date();
        return currentDate.toISOString();
    }

    const handleAddBlog = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const image = form.image.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;

        const newBlog = { title, image, category, shortDescription, longDescription, timestamp: getCurrentTimestamp() };

        console.log(newBlog);

        // Send data to the server
        axios.post('http://localhost:5000/add-blog', newBlog)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Blog Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className="bg-base-200 p-24 mt-12 mb-9">
            <h2 className="text-3xl font-bold mb-7">Add a Blog</h2>
            <form onSubmit={handleAddBlog}>
                {/* form title and image row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and short description row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className='input-group'>
                            <select value={categoryValue} onChange={handleCategoryChange} name="category" id="" className="input input-bordered w-full">
                                <option value="Technology">Technology</option>
                                <option value="Food">Food</option>
                                <option value="Travel">Travel</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="shortDescription" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form long description row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Long Description</span>
                        </label>
                        <textarea name="longDescription" placeholder="Long Description" className="textarea textarea-bordered h-32 w-full"></textarea>
                    </div>
                </div>
                <input type="submit" value="Add Blog" className="btn btn-block text-white bg-orange-500 hover:bg-orange-500 normal-case" />

            </form>
        </div>
    );
};

export default AddBlog;