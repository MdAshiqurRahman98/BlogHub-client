import PropTypes from 'prop-types';

const Comment = ({ singleComment }) => {
    const { userName, userPhoto, comment } = singleComment || {};

    return (
        <div>
            <div className="flex items-center mb-1">
                <img className='rounded-full w-5 h-5' src={userPhoto} alt="" />
                <span className='ml-3 font-semibold'>{userName}</span>
            </div>
            <p className='ml-8 mb-5'>{comment}</p>
        </div>
    );
};

export default Comment;

Comment.propTypes = {
    singleComment: PropTypes.object
}