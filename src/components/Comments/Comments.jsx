import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Comment from "../Comment/Comment";
import PropTypes from 'prop-types';

const Comments = ({ _id }) => {
    const [comments, setComments] = useState([]);

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    // Get data to the server
    useEffect(() => {
        axiosSecure.get(`/all-comments?email=${user?.email}&_id=${_id}`)
            .then(res => {
                setComments(res.data);
            })
    }, [axiosSecure, user?.email, _id]);

    return (
        <div>
            {
                comments ? <div>
                    {
                        comments?.map(singleComment => <Comment
                            key={singleComment._id}
                            singleComment={singleComment}
                        ></Comment>)
                    }
                </div> : undefined
            }
        </div>
    );
};

export default Comments;

Comments.propTypes = {
    _id: PropTypes.string
}