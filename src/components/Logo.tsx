import React from 'react';
import logo from '../assets/logo.svg';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-12 h-12' }) => {
  return (
    <img
      src={logo}
      alt="Howami Logo"
      className={`${className} text-primary`}
    />
  );
};