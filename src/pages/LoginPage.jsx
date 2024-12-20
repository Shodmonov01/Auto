import React, { useState, useEffect } from "react";
import axiosInstance from "../config/axiosConfig";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useLanguage } from "../components/Context/LanguageContext";
import { useUser } from "../components/Context/UserContext";
import { io } from "socket.io-client";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { language } = useLanguage();
  const { isLogged, setIsLogged } = useUser();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = new URLSearchParams(location.search);

  const navigate = useNavigate();

  const next_url = searchParams.get("next_url");
  const id = searchParams.get("user_id");
  const nextUrl = search.get("nextUrl");

  const translations = {
    ru: {
      enter: "Вход",
      emailPlaceholder: "Электронная почта",
      passwordPlaceholder: "Введите пароль",
      rememberMe: "Запомнить меня",
      forgotPassword: "Забыли пароль?",
      login: "Войти",
      noAccount: "Еще нет аккаунта?",
      register: "Зарегистрироваться",
      loginError: "Ошибка входа",
      invalidCredentials: "Неверный логин или пароль. Попробуйте снова.",
      loginSuccess: "Успешный вход!",
      welcome: "Добро пожаловать обратно!",
    },
    uzb: {
      enter: "Kirish",
      emailPlaceholder: "Elektron pochta",
      passwordPlaceholder: "Parolni kiriting",
      rememberMe: "Meni eslab qol",
      forgotPassword: "Parolni unuting?",
      login: "Kirish",
      noAccount: "Hali hisobingiz yo'qmi?",
      register: "Ro'yxatdan o'tish",
      loginError: "Kirish xatosi",
      invalidCredentials:
        "Noto'g'ri login yoki parol. Iltimos, qayta urinib ko'ring.",
      loginSuccess: "Muvaffaqiyatli kirish!",
      welcome: "Qaytib kelganingizdan xursandmiz!",
    },
    en: {
      enter: "Entrance",
      emailPlaceholder: "E-mail",
      passwordPlaceholder: "Enter password",
      rememberMe: "Remember me",
      forgotPassword: "Forgot password?",
      login: "Login",
      noAccount: "Don't have an account?",
      register: "Register",
      loginError: "Login Error",
      invalidCredentials: "Invalid login or password. Please try again.",
      loginSuccess: "Login Successful!",
      welcome: "Welcome back!",
    },
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/login", { email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userData", JSON.stringify(response.data.userData));
      setIsLogged(true);
      Toast.fire({
        icon: "success",
        title: translations[language].loginSuccess,
      });

      setIsLogged(true);
    } catch (error) {
      console.error("Ошибка входа:", error);

      Swal.fire({
        icon: "error",
        title: translations[language].loginError,
        text: translations[language].invalidCredentials,
        confirmButtonText: "Ок",
      });
    }
  };

  // const conncetWS = () => {
  //   socket.emit("join", { userId: 2 });
  // };

  useEffect(() => {
    if (isLogged) {
      next_url ? navigate(`/message?user_id=${id}`) : navigate("/");
    }
  }, [isLogged]);

  useEffect(() => {
    if (isLogged) {
      if (nextUrl) {
        navigate(decodeURIComponent(nextUrl));
      } else {
        navigate("/");
      }
    }
  }, [isLogged, nextUrl, navigate]);

  return (
    <div className="flex items-center justify-center min-h-[480px] bg-gray-100">
      <form
        className="bg-white p-10 rounded shadow-md w-[563px]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {translations[language].enter}
        </h2>

        <div className="my-8">
          <input
            placeholder={translations[language].emailPlaceholder}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#F6F6F6] w-full border rounded px-3 py-2"
          />
        </div>

        <div className="my-8">
          <div className="relative">
            <input
              placeholder={translations[language].passwordPlaceholder}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-[#F6F6F6] w-full border rounded px-3 py-2"
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
            <label className="flex items-center text-gray-700">
              <input
                name="checkbox"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              {translations[language].rememberMe}
            </label>
          </div>
          <div>
            <Link to={"/forgot-password"} className="text-blue-500">
              {translations[language].forgotPassword}
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
          {translations[language].login}
        </button>
        <div className="flex items-center mt-4 p-2 space-x-2 text-gray-600">
          <p className="text-sm">{translations[language].noAccount}</p>
          <Link className="text-sm text-blue-500" to="/register">
            {translations[language].register}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
