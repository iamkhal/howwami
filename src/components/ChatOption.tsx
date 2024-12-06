import React from 'react';
import { motion } from 'framer-motion';

interface ChatOptionProps {
  title: string;
  description: string;
  imageSrc: string;
  onClick: () => void;
}

export const ChatOption: React.FC<ChatOptionProps> = ({
  title,
  description,
  imageSrc,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-4 hover:border-primary cursor-pointer"
      onClick={onClick}
    >
      <div className="flex-shrink-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-16 h-16 object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="text-xl font-medium text-gray-900">{title}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};