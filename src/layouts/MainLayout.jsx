import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import ThreeDBackground from '../components/ThreeDBackground';

const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-base-100">
      {/* 3D Background - Fixed position covering whole viewport */}
      <div className="fixed inset-0 -z-10">
        <ThreeDBackground />
      </div>
      
      {/* Content Container with proper stacking context */}
      <div className="relative z-10 flex flex-col min-h-screen bg-base-100/90 text-base-content">
        {/* Fixed navbar at top */}
        <Navbar />

        {/* Main content area with padding-top to avoid navbar overlap */}
        <main className="flex-grow pt-20"> {/* pt-20 matches navbar height */}
          <Outlet />
        </main>

        {/* Footer at bottom */}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;