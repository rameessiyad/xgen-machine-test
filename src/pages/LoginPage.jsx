import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const handleLogin = (credentials) => {
    if (credentials.username === "admin" && credentials.password === "admin") {
      alert("Login Successful!");
      window.location.href = "/dashboard"; // Temporary redirection, Redux will replace this
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
