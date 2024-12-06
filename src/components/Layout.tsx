import React from 'react';
import Logo from '../assets/H Logo.png';

interface LayoutProps {
  children: React.ReactNode;
  showLogo?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, showLogo = true }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {showLogo && (
        <div className="w-full bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <img src={Logo} className="w-32 h-auto" alt="Logo" />
          </div>
        </div>
      )}
      {children}
    </div>
  );
};