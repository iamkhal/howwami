import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { useAuthStore } from '../store/authStore';
import { Users, User } from 'lucide-react';

export default function ChatSelection() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <h1 className="text-2xl font-bold text-gray-900">Welcome, {user?.name}</h1>
          <Button variant="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <div className="mt-10">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
            Choose your chat experience
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-16">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-primary cursor-pointer"
              onClick={() => navigate('/chat/teen')}
            >
              <div className="flex-shrink-0">
                <User className="h-10 w-10 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-xl font-medium text-gray-900">Teen Chat</p>
                  <p className="text-sm text-gray-500">
                    Get support and answers tailored for teenagers
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-secondary cursor-pointer"
              onClick={() => navigate('/chat/parent')}
            >
              <div className="flex-shrink-0">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-xl font-medium text-gray-900">Parent Chat</p>
                  <p className="text-sm text-gray-500">
                    Get guidance on supporting your teenager
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}