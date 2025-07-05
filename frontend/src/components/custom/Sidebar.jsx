import { useNavigate } from 'react-router-dom';

export const Sidebar = ({ isOpen, onClose, activeComponent }) => {
    const navigate = useNavigate();
    const menuItems = [
        { label: "Dashboard", active: activeComponent === "dashboard" ,onClick:() => navigate('/dashboard')},
      { label: "Products", active: activeComponent === "products" ,onClick:() => navigate('/products')},
      { label: "Clients", active: activeComponent === "clients" ,onClick:() => navigate('/clients')},
      { label: "Messages", active: activeComponent === "messages" ,onClick:() => navigate(  '/messages')},
      { label: "Notifications", active: activeComponent === "notifications" ,onClick:() => navigate('/notifications')},
      { label: "Profile", active: activeComponent === "profile" ,onClick:() => navigate('/profile')},
      { label: "Settings", active: activeComponent === "settings" ,onClick:() => navigate('/settings')},
    ];
  
    return (
      <>
        {/* Mobile overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
        
        <div className={`w-64 h-screen bg-white border-r fixed left-0 top-0 flex flex-col z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}>
          {/* Back Button - Shows as cross on mobile, back arrow on desktop */}
          <button 
            onClick={() => {
              if (window.innerWidth < 1024) {
                // On mobile, close the sidebar
                onClose();
              } else {
                // On desktop, navigate back
                navigate(-1);
              }
            }}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center m-4 hover:bg-gray-200"
          >
            <span className="text-lg lg:hidden">×</span>
            <span className="text-lg hidden lg:inline">←</span>
          </button>
  
          {/* Logo */}
          <div className="flex items-center px-6 mb-8">
            <div className="text-2xl text-[#1F77B4F2]">€</div>
            <div className="ml-2 text-lg">COMPANY NAME</div>
          </div>
  
          {/* User Info */}
          <div className="px-6 mb-8">
            <div className="text-sm text-gray-800">Samaira Wahi</div>
          </div>
  
          {/* Menu Items */}
          <div className="flex-1 overflow-y-hidden hover:overflow-y-auto">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className={`w-full text-left px-6 py-2.5 text-sm ${
                  item.active 
                    ? 'text-[#1F77B4F2] bg-blue-50' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
  
          {/* Help */}
          <div className="p-6 border-t">
            <button className="w-full text-left text-sm text-gray-600 hover:text-gray-800 py-1">
              Help
            </button>
            <button
             onClick={() => {
              localStorage.removeItem('token');
              navigate('/');
             }}
             className="w-full text-left text-sm text-red-500 hover:text-red-600 mt-3 py-1">
              Logout
            </button>
          </div>
        </div>
      </>
    );
  };