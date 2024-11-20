import React, { useState } from "react";
import axiosInstance from "../config/axiosConfig";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/Context/LanguageContext";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // use navigate to redirect the user
  const { language } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/forgot-password", { email });

      const { token } = response.data;
      if (token) {
        localStorage.setItem("resetToken", token);
        setIsSubmitted(true);
        setError("");
        navigate("/reset-password");
      }
    } catch (error) {
      console.error("Error sending reset password email:", error);
      setError("Failed to send reset password email.");
    }
  };

  const translations = {
    ru: {
      forgotYourPassword: "Забыли пароль?",
      enterEmail: "Введите ваш E-mail",
      resetButton: "Восстановить",
      rememberedPassword: "Вспомнили пароль?",
      loginLink: "Войти",
      tokenSent: "Токен отправлен на ваш email",
    },
    uzb: {
      forgotYourPassword: "Parolingiz esingizdan chiqdimi?",
      enterEmail: "E-mailingizni kiriting",
      resetButton: "Qayta tiklash",
      rememberedPassword: "Parolni esladingizmi?",
      loginLink: "Kirish",
      tokenSent: "Tokeningiz elektron pochtangizga yuborildi",
    },
    en: {
      forgotYourPassword: "Forgot your password?",
      enterEmail: "Enter your E-mail",
      resetButton: "Reset",
      rememberedPassword: "Remembered your password?",
      loginLink: "Login",
      tokenSent: "Token sent to your email",
    },
  };

  return (
    <div className="flex items-center justify-center min-h-[437px] bg-gray-100">
      <form
        className="bg-white p-10 rounded shadow-md w-[563px]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-[35px] font-bold mb-[10px] text-center">
          {translations[language].forgotYourPassword}
        </h2>
        <h4 className="text-[14px] text-center">
          {translations[language].enterEmail}
        </h4>

        {isSubmitted ? (
          <p className="text-green-600 text-center">
            {translations[language].tokenSent}
          </p>
        ) : (
          <>
            <div className="my-8">
              <input
                placeholder={translations[language].enterEmail}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[#F6F6F6] w-full border rounded px-3 py-2"
              />
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

        <div className="flex items-center mt-4 p-2 space-x-2 text-gray-600">
          <p className="text-sm">{translations[language].rememberedPassword}</p>
          <Link className="text-sm text-blue-500" to="/login">
            {translations[language].loginLink}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgetPasswordPage;
