import React, { useState } from "react";
import axiosInstance from "../axiosConfig";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import the icons
import { useLanguage } from "../components/Context/LanguageContext";

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For confirm password visibility
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const token = localStorage.getItem("resetToken");
      const response = await axiosInstance.post(`/reset-password/${token}`, {
        newPassword,
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

  const translations = {
    ru: {
      resetTitle: "Сброс пароля",
      enterNewPassword: "Введите новый пароль",
      confirmNewPassword: "Подтвердите новый пароль",
      resetButton: "Восстановить",
      passwordResetSuccess:
        "Сброс пароля выполнен успешно! Перенаправление на страницу входа...",
      passwordsDoNotMatch: "Пароли не совпадают",
    },
    uzb: {
      resetTitle: "Parolni tiklash",
      enterNewPassword: "Yangi parolni kiriting",
      confirmNewPassword: "Yangi parolni tasdiqlang",
      resetButton: "Qayta tiklash",
      passwordResetSuccess:
        "Parol muvaffaqiyatli tiklandi! Kirish sahifasiga o'tkazilyapti...",
      passwordsDoNotMatch: "Parollar mos kelmayapti",
    },
    en: {
      resetTitle: "Reset Password",
      enterNewPassword: "Enter new password",
      confirmNewPassword: "Confirm new password",
      resetButton: "Reset",
      passwordResetSuccess:
        "Password reset successful! Redirecting to login...",
      passwordsDoNotMatch: "Passwords do not match",
    },
  };

  return (
    <div className="flex items-center justify-center min-h-[437px] bg-gray-100">
      <form
        className="bg-white p-10 rounded shadow-md w-[563px]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-[35px] font-bold mb-[10px] text-center">
          {translations[language].resetTitle}
        </h2>

        {success ? (
          <p className="text-green-600 text-center">
            {translations[language].passwordResetSuccess}
          </p>
        ) : (
          <>
            <div className="my-8 relative">
              <input
                placeholder={translations[language].enterNewPassword}
                type={showPassword ? "text" : "password"} // Toggle input type
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="bg-[#F6F6F6] w-full border rounded px-3 py-2"
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
                placeholder={translations[language].confirmNewPassword}
                type={showConfirmPassword ? "text" : "password"} // Toggle input type
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="bg-[#F6F6F6] w-full border rounded px-3 py-2"
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
              {translations[language].resetButton}
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ResetPasswordPage;
