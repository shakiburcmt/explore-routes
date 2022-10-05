import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const details = useLoaderData();
    const { id, body } = details;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/person/${id}`)
    }

    return (
        <div>
            <h2>Details About Post: {id}</h2>
            <h4>{body}</h4>
            <button onClick={handleNavigate}>Get The Author</button>
        </div>
    );
};

export default PostDetails;