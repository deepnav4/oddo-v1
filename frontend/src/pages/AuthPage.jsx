import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onToggle }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const userInfo = {
      email: formData.email,
      password: formData.password,
      action: 'login'
    };
    // Add backend logic here
    console.log('User Info:', userInfo);
    navigate('/dashboard-setup');
  };

  return (
    <div className="flex flex-col space-y-4 w-full max-w-md">
      <h2 className="text-2xl text-gray-900">Log in to your account</h2>
      <p className="text-gray-600 text-xs">Enter your email address and password to log in</p>
      
      <form onSubmit={handleLogin} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email address"
            className="w-full px-4 py-2 bg-[#F8FBFF] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F77B4F2] pl-10 text-sm"
            required
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        
        <div className="relative">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full px-4 py-2 bg-[#F8FBFF] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F77B4F2] pl-10 text-sm"
            required
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <a href="#" className="text-[#1F77B4F2] text-xs hover:underline self-end">
          forgot password?
        </a>

        <button 
          type="submit"
          className="w-full py-2 px-4 bg-[#1F77B4F2] text-white rounded-lg text-sm hover:bg-[#1F77B4] transition-colors"
        >
          Login
        </button>
      </form>

      <div className="text-center text-gray-500 text-xs">or</div>

      <button className="w-full py-2 px-4 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
        <img src="/google.svg" alt="Google" className="w-4 h-4" />
        <span>Connect with Google</span>
      </button>

      <p className="text-center text-gray-600 text-xs">
        Don't have an account?{' '}
        <button onClick={onToggle} className="text-[#1F77B4F2] hover:underline">
          SIGN UP
        </button>
      </p>
    </div>
  );
};

const SignUpForm = ({ onToggle }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add backend logic here
    const userInfo = {
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      action: 'signup'
    };
    console.log('User Info:', userInfo);
    navigate('/dashboard-setup');
  };

  return (
    <div>
      <div className="flex flex-col space-y-4 w-full max-w-md">
      <h2 className="text-2xl text-gray-900">Sign up to create an account</h2>
      <p className="text-gray-600 text-xs">Enter your email address and create a password to sign up</p>
      
      <form onSubmit={handleSignUp} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email address"
            className="w-full px-4 py-2 bg-[#F8FBFF] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F77B4F2] pl-10 text-sm"
            required
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        
        <div className="relative">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full px-4 py-2 bg-[#F8FBFF] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F77B4F2] pl-10 text-sm"
            required
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <div className="relative">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm Password"
            className="w-full px-4 py-2 bg-[#F8FBFF] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F77B4F2] pl-10 text-sm"
            required
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#1F77B4F2] text-white rounded-lg text-sm hover:bg-[#1F77B4] transition-colors"
        >
          Sign up
        </button>
      </form>

      <div className="text-center text-gray-500 text-xs">or</div>

      <button className="w-full py-2 px-4 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
        <img src="/google.svg" alt="Google" className="w-4 h-4" />
        <span>Connect with Google</span>
      </button>

      <p className="text-center text-gray-600 text-xs">
        Already have an account?{' '}
        <button onClick={onToggle} className="text-[#1F77B4F2] hover:underline">
          LOG IN
        </button>
      </p>
    </div>
    </div>
  );
};

const DashboardPreview = () => {
  return (
    <div className="w-full h-full bg-[#1F77B4F2]  rounded-l-[50px] overflow-hidden flex items-center justify-center">
          <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10 absolute top-[40px] w-[350px] right-[20px]"
          >
            <img
              src="/images/img3.png"
              alt="Dashboard Preview 1"
              className="w-full rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="z-10 absolute top-[180px] w-[350px] right-[80px]"
          >
            <img
              src="/images/img1.png"
              alt="Dashboard Preview 2"
              className="w-full rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="z-10 absolute top-[320px] w-[350px] right-[140px]"
          >
            <img
              src="/images/img3.png"
              alt="Dashboard Preview 3"
              className="w-full rounded-lg"
            />
          </motion.div>
          </div>
        {/* </div> */}
      {/* </div> */}  
    </div>
  );
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Side - Auth Form */}
      <div className="w-full lg:w-[45%] p-4 lg:p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="flex items-center mb-8">
            <div className="text-2xl font-bold text-[#1F77B4F2]">€</div>
            <div className="ml-2 text-lg text-gray-900">COMPANY NAME</div>
          </div>
          
          {isLogin ? (
            <LoginForm onToggle={() => setIsLogin(false)} />
          ) : (
            <SignUpForm onToggle={() => setIsLogin(true)} />
          )}
        </div>
      </div>

      {/* Right Side - Dashboard Preview */}
      <div className="hidden lg:block lg:w-[55%] bg-[#1F77B4F2] rounded-l-[50px]">
        <DashboardPreview />
      </div>
    </div>
  );
}

export default AuthPage; 