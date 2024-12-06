import { FC } from 'react';
import logo from '../assets/H Logo.png';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className = 'w-12 h-12' }) => {
  return (
    <img
      src={logo}
      alt="Howami Logo"
      className={className}
    />
  );
};