import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { useAuthStore } from '../store/authStore';
import { Layout } from '../components/Layout';
import { ChatOption } from '../components/ChatOption';

export default function ChatSelection() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <Layout>
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
            <ChatOption
              title="Howami Companion"
              description="Get support and answers tailored for teenagers"
              imageSrc="https://images.unsplash.com/photo-1571442463800-1337d7af9d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              onClick={() => navigate('/chat/teen')}
            />
            <ChatOption
              title="Howami Parental Companion"
              description="Get guidance on supporting your teenager"
              imageSrc="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              onClick={() => navigate('/chat/parent')}
            />
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Additional Information
            </h3>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                Welcome to Howami, your trusted companion for navigating important conversations 
                about menstrual health. Whether you're a teenager seeking answers or a parent 
                looking to provide better support, we're here to help guide these important 
                discussions with care and understanding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}