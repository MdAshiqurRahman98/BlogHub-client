import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlog = () => {
    const blog = useLoaderData();
    const { _id, title, image, category, shortDescription, longDescription } = blog || {};

    const [categoryValue, setCategory] = useState(category);

    const handleCategoryChange = event => {
        console.log(event.target.value);
        setCategory(event.target.value);
    };

    const handleUpdateBlog = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const image = form.image.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;

        const updatedBlog = { title, image, category, shortDescription, longDescription };

        console.log(updatedBlog);

        // Send data to the server
        axios.patch(`http://localhost:5000/update-blog/${_id}`, updatedBlog)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <div className="bg-base-200 p-24 mb-9">
            <h2 className="text-3xl font-bold mb-7">Update a Blog</h2>
            <form onSubmit={handleUpdateBlog}>
                {/* form title and image row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Title" defaultValue={title} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" defaultValue={image} className="input input-bordered w-full" />
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
                            <select value={categoryValue} onChange={handleCategoryChange} name="category" id="" defaultValue={category} className="input input-bordered w-full">
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
                            <input type="text" name="shortDescription" placeholder="Short Description" defaultValue={shortDescription} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form long description row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Long Description</span>
                        </label>
                        <textarea name="longDescription" placeholder="Long Description" defaultValue={longDescription} className="textarea textarea-bordered h-32 w-full"></textarea>
                    </div>
                </div>
                <input type="submit" value="Update Blog" className="btn btn-block text-white bg-orange-500 hover:bg-orange-500 normal-case" />

            </form>
        </div>
    );
};

export default UpdateBlog;