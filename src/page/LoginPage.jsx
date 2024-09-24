import React, { useState } from "react";
import axiosInstance from "../axiosConfig";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/login", { email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userData", JSON.stringify(response.data.userData));
      navigate("/");
    } catch (error) {
      console.error("Ошибка входа:", error);
    }
  };

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-[480px] bg-gray-100">
      <form
        className="bg-white p-10 rounded shadow-md w-[563px]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Вход</h2>

        <div className="my-8">
          <input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="my-8">
          <div className="relative">
            <input
              placeholder="Введите пароль"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border rounded px-3 py-2"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <div>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            <label className="text-gray-700">Запомнить меня</label>
          </div>
          <div className="">
            <Link to={"/forgot-password"} className="text-blue-500">
              Забыли пароль?
            </Link>
          </div>
        </div>

        <button
          type="submit"
          disabled={!rememberMe} // Disable button if rememberMe is false
          className={`w-full py-2 rounded ${
            rememberMe
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Войти
        </button>
        <div className="flex items-center mt-4 p-2 space-x-2 text-gray-600">
          <p className="text-sm">Еще нет аккаунта?</p>
          <Link className="text-sm text-blue-500" to="/register">
            Зарегистрироваться
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
