import React from 'react';
import { Link } from 'react-router-dom';
import './Person.css'

const Person = ({ person }) => {
    const {id, name, email,address } = person;
    return (
        <div className='person'>
            <h2>Name: {name}</h2>
            <h4>Email: {email}</h4>
            
            {/* dynamic link below */}
            <p>City: <Link to={`/person/${id}`}>{address.city}</Link></p>
        </div>
    );
};

export default Person;