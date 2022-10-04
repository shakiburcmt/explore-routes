import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Person from '../Person/Person';
import './About.css'

const About = () => {
    const about = useLoaderData();
    return (
        <div>
            <h3>About Page:{about.length}</h3>
            <div className='about'>
                {
                    about.map(person => <Person key={person.id} person={person}></Person>)
                }
            </div>
        </div>
    );
};

export default About;