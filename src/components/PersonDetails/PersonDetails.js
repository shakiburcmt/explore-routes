import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PersonDetails = () => {
    const details = useLoaderData();
    return (
        <div>
            <h1>User Name: {details.username}</h1>
            <h3>Phone Number: {details.phone}</h3>
        </div>
    );
};

export default PersonDetails;