import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div style={{backgroundColor:'coral', padding:'5px' , borderRadius:'10px' ,margin:'10px'}}>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;