import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavigationBar />
            <div className='min-h-screen'><Outlet /></div>
            <Footer />
        </div>
    );
};

export default MainLayout;