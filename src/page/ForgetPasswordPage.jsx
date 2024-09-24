import React, { useState } from "react";
import axiosInstance from "../axiosConfig";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // use navigate to redirect the user

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

  return (
    <div className="flex items-center justify-center min-h-[437px] bg-gray-100">
      <form
        className="bg-white p-10 rounded shadow-md w-[563px]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Восстановление пароля
        </h2>

        {isSubmitted ? (
          <p className="text-green-600 text-center">Token sent to your email</p>
        ) : (
          <>
            <div className="my-8">
              <input
                placeholder="Введите ваш E-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {error && <p className="text-red-600 text-center">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
            >
              Отправить
            </button>
          </>
        )}

        <div className="flex items-center mt-4 p-2 space-x-2 text-gray-600">
          <p className="text-sm">Вспомнили пароль?</p>
          <Link className="text-sm text-blue-500" to="/login">
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgetPasswordPage;
