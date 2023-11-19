import Comment from "../Comment/Comment";
import PropTypes from 'prop-types';

const Comments = ({ comments }) => {

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
    comments: PropTypes.array
}