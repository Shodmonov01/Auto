import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axiosInstance from "../axiosConfig";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
    agree: false,
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }

    if (!formData.agree) {
      alert("Вы должны согласиться c политикой обработки данных!");
      return;
    }

    // Call the registration API only if the validation passes
  };

  const HandleClick = () => {
    axiosInstance
      .post("/user-register", formData)
      .then((response) => {
        // Save the token to localStorage
        const token = response.data.token;
        localStorage.setItem("token", token);
        alert("Регистрация успешна!");
        navigate("/");
      })
      .catch((error) => {
        console.error(error.response.data.error);
        alert(error.response.data.error);
      });
  };

  const passwordsMatch = formData.password === confirmPassword;

  return (
    <div className="max-w-md mx-auto m-6 p-8 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Регистрация</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            placeholder="Имя"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <input
            placeholder="E-mail"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="relative">
          <input
            placeholder="Введите пароль"
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <span
            className="absolute inset-y-0 right-3 top-3 cursor-pointer"
            onClick={toggleShowPassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className="relative">
          <input
            placeholder="Повторите пароль"
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <span
            className="absolute inset-y-0 right-3 top-3 cursor-pointer"
            onClick={toggleShowConfirmPassword}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="agree"
            id="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label htmlFor="agree" className="ml-2 block text-sm text-gray-900">
            Согласен с политикой обработки данных
          </label>
        </div>
        <button
          onClick={() => HandleClick()}
          type="submit"
          disabled={!formData.agree || !passwordsMatch}
          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            formData.agree && passwordsMatch
              ? "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          <Link to={"/"}>Зарегистрироваться</Link>
        </button>
      </form>
      <p className="mt-4 text-center">
        Уже есть аккаунт?
        <Link to={"/login"} className="text-indigo-600 hover:text-indigo-500">
          Войти
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
