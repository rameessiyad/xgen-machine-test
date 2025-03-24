import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (credentials) => {
    if (credentials.username === "admin" && credentials.password === "admin") {
      dispatch(login()); 
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
