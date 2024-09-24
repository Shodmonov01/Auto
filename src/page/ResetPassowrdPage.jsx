import React, { useState } from "react";
import axiosInstance from "../axiosConfig";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import the icons

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For confirm password visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const token = localStorage.getItem("resetToken");
      const response = await axiosInstance.post(`/reset-password/${token}`, {
        password,
        token,
      });

      if (response.status === 200) {
        setSuccess(true);
        setError("");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setError("Failed to reset password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[437px] bg-gray-100">
      <form
        className="bg-white p-10 rounded shadow-md w-[563px]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-[10px] text-center">Забыли пароль?</h2>
        <h4 className="text-xl text-center" >Введите e-mail для восстановления</h4>
 
        {success ? (
          <p className="text-green-600 text-center">
            Password reset successful! Redirecting to login...
          </p>
        ) : (
          <>
            <div className="my-8 relative">
              <input
                placeholder="Введите новый пароль"
                type={showPassword ? "text" : "password"} // Toggle input type
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border rounded px-3 py-2"
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)} // Toggle visibility
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="my-8 relative">
              <input
                placeholder="Подтвердите новый пароль"
                type={showConfirmPassword ? "text" : "password"} // Toggle input type
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full border rounded px-3 py-2"
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle visibility
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {error && <p className="text-red-600 text-center">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
            >
              Восстановить
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ResetPasswordPage;
