import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    const { id } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h4>{post.title}</h4>
            {/* three ways to navigate */}
            {/* number 1 */}
            <Link to={`/post/${id}`}>Visit:{id}</Link>
            <p>{post.body}</p>
            {/* number 2 */}
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            {/* number 3 */}
            <button onClick={handleNavigate}>Show Details 2</button>
        </div>
    );
};

export default Post;