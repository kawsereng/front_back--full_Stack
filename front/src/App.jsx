import React, {useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import axios from'axios'
export default function AuthForms() {
  const [activeTab, setActiveTab] = useState('register'); // 'register' | 'login' | 'reset'

  // Login Form States
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const[logSuc,setLogSuc] =useState('')
  const[logBad,setLogBad] = useState('')

  const [fromData1, setFromData1] = useState({
    email: '',
    password: '',
  });

// Input change handler
const handelChangeL = (e) => {
  const { name, value } = e.target;

  setFromData1({
    ...fromData1,
    [name]: value
  });
};

// Form submit handler
const handelSubmitL = async (e) => {
  e.preventDefault();

  setLogSuc('');
  setLogBad('');

  try {
    const data = await axios.post(
      'http://localhost:5000/login',
      fromData1
    );

    if (data.data.success) {
      setLogSuc(data.data.message);

      setFromData1({
        email: '',
        password: ''
      });

      setTimeout(() => {
        setLogSuc('');
      }, 3000);

    } else {
      setLogBad(data.data.message);

      setTimeout(() => {
        setLogBad('');
      }, 3000);
    }

  } catch (error) {
    setLogBad(
      error.response?.data?.message || 'Something went wrong!'
    );

    setTimeout(() => {
      setLogBad('');
    }, 2000);
  }
};
  // Registration Form States


  const[regSuc,setRegSuc] =useState('')
  const[regBad,setRegBad] = useState('')

  const[fromData,setFromData]=useState({
    fullName:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  let handelChange =(e)=>{
    setFromData({
      ...fromData,
      [e.target.name]:e.target.value
    })

  }

const handelSubmit = async (e) => {
  e.preventDefault();

  setRegSuc('');
  setRegBad('');

  try {
    const data = await axios.post(
      'http://localhost:5000/registration',
      fromData
    );

    if (data.data.success) {
      setRegSuc(data.data.message);

      setFromData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

      setTimeout(() => {
        setRegSuc('');
      }, 3000);

    } else {
      setRegBad(data.data.message);

      setTimeout(() => {
        setRegBad('');
      }, 3000);
    }

  } catch (error) {
    setRegBad(
      error.response?.data?.message || 'Something went wrong!'
    );

    setTimeout(() => {
      setRegBad('');
    }, 2000);
  }
};



  

  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showRegConfirmPassword, setShowRegConfirmPassword] = useState(false);

  // Reset Password Form State
  const [forgotEmail, setForgotEmail] = useState('');

  
  

  return (
    <div className="min-h-screen bg-amber-200 flex items-center justify-center p-4 text-slate-100 font-sans">
      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8">
        {/* Navigation Tabs */}
        <div className="flex bg-slate-900/60 p-1 rounded-xl mb-6">
          <button
            onClick={() => setActiveTab("register")}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === "register"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Register
          </button>
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === "login" || activeTab === "reset"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Login
          </button>
        </div>

        {/* 1. REGISTRATION FORM */}
        {activeTab === "register" && (
          <div className='message'>
            {regSuc && (
              <div className="mb-4 text-center bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg text-sm font-medium">
                {regSuc}
              </div>
            )}

            {regBad && (
              <div className="mb-4 text-center bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm font-medium">
                {regBad}
              </div>
            )}

            <form onSubmit={handelSubmit} className="space-y-4">
              <h2 className="text-xl font-bold text-center text-white mb-4">
                Create an Account
              </h2>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fromData.fullName}
                  name="fullName"
                  onChange={handelChange}
                  placeholder="Enter your fullName "
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={fromData.email}
                  name="email"
                  onChange={handelChange}
                  placeholder="name@example.com"
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showRegPassword ? "text" : "password"}
                    value={fromData.password}
                    name="password"
                    onChange={handelChange}
                    placeholder="Creat Password"
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-lg pl-3 pr-10 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowRegPassword(!showRegPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {showRegPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showRegConfirmPassword ? "text" : "password"}
                    value={fromData.confirmPassword}
                    name="confirmPassword"
                    onChange={handelChange}
                    placeholder="Same Password"
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-lg pl-3 pr-10 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowRegConfirmPassword(!showRegConfirmPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {showRegConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-md mt-2"
              >
                Register
              </button>
            </form>
          </div>
        )}

        {/* 2. LOGIN FORM */}
        {activeTab === "login" && (
          <div className="message">
              {logSuc && (
              <div className="mb-4 text-center bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg text-sm font-medium">
                {logSuc}
              </div>
            )}

            {logBad && (
              <div className="mb-4 text-center bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm font-medium">
                {logBad}
              </div>
            )}

            <form onSubmit={handelSubmitL}  className="space-y-4">
              <h2 className="text-xl font-bold text-center text-white mb-4">
                Welcome Back
              </h2>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"

                  value={fromData1.email}
                  name="email"
                  onChange={handelChangeL}

                  placeholder="name@example.com"
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-medium text-slate-400">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setActiveTab("reset")}
                    className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showLoginPassword ? "text" : "password"}

                    value={fromData1.password}
                    name="password"
                    onChange={handelChangeL}

                    placeholder="••••••••"
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-lg pl-3 pr-10 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {showLoginPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"

                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-md mt-2"
              >
                Login
              </button>
            </form>
          </div>
        )}

        {/* 3. RESET PASSWORD FORM */}
        {activeTab === "reset" && (
          <form className="space-y-4">
            <h2 className="text-xl font-bold text-center text-white mb-2">
              Reset Password
            </h2>
            <p className="text-xs text-slate-400 text-center mb-4">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-md mt-2"
            >
              Send Reset Link
            </button>

            <div className="text-center mt-3">
              <button
                type="button"
                onClick={() => setActiveTab("login")}
                className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
              >
                ← Back to Login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}