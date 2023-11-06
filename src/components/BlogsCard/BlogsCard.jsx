import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BlogsCard = ({ blog }) => {
    const { _id, title, image, category, shortDescription } = blog || {};

    return (
        <div className="card card-side rounded-lg p-5 bg-base-200">
            <div>
                <img className="w-[550px] md:w-80 h-full object-cover" src={image} alt="Product" />
            </div>
            <div className="pl-7">
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="font-medium mb-1">Category: {category}</p>
                <p className="font-medium mb-1">{shortDescription}</p>
                <div className="flex">
                    <Link to={`/blog/${_id}`}>
                        <button className="btn btn-sm text-white bg-orange-500 hover:bg-orange-500 normal-case text-[15px] font-semibold rounded mt-3 mr-1 md:mr-3">View Details</button>
                    </Link>
                    <Link to={`/wishlist/${_id}`}>
                        <button className="btn btn-sm text-white bg-orange-500 hover:bg-orange-500 normal-case text-[15px] font-semibold rounded mt-3">Add to Wishlist</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogsCard;

BlogsCard.propTypes = {
    blog: PropTypes.object
}