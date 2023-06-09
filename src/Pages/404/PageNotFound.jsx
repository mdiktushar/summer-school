import React from 'react';
import NotFound from '../../assets/404.gif'

const PageNotFound = () => {
    return (
        <div className="w-full h-screen">
            <img className="object-cover w-full h-full" src={NotFound} alt="" />
        </div>
    );
};

export default PageNotFound;