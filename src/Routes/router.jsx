import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import PageNotFound from '../Pages/404/PageNotFound';

const router =  createBrowserRouter ([
    {
        path: `/`,
        element: <MainLayout />,
        children: [
            {
                path: `/`,
                element: <Home />
            }
        ]
    },
    {
        path: `*`,
        element: <PageNotFound />
    }
])

export default router;