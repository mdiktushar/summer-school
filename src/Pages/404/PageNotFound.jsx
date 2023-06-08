import React from 'react';
import NotFound from '../../assets/404.gif'

const PageNotFound = () => {
    return (
        <div class="w-full h-screen">
            <img class="object-cover w-full h-full" src={NotFound} alt="" />
        </div>
    );
};

export default PageNotFound;