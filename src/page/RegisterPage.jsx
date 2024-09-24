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
  };

  const HandleClick = () => {
    axiosInstance
      .post("/user-register", formData)
      .then((response) => {
        const token = response.data.token;
        const userData = response.data.userData;
        localStorage.setItem("token", token);
        localStorage.setItem("userData", JSON.stringify(userData));
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
    <div className="flex items-center justify-center min-h-[627px] bg-gray-100">
      <form
        className="bg-white p-10 rounded shadow-md w-[563px]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-[35px] font-bold mb-[10px] text-center">
          Регистрация
        </h2>
        <h4 className="text-[14px] text-center">
          Заполните поля ниже для создания аккаунта.
        </h4>

        <div className="my-8">
          <input
            placeholder="Имя"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className=" bg-[#F6F6F6] w-full border rounded px-3 py-2"
          />
        </div>

        <div className="my-8">
          <input
            placeholder="E-mail"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-[#F6F6F6] w-full border rounded px-3 py-2"
          />
        </div>

        <div className="my-8">
          <div className="relative">
            <input
              placeholder="Введите пароль"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className=" bg-[#F6F6F6] w-full border rounded px-3 py-2"
            />
            <span
              onClick={toggleShowPassword}
              className="absolute right-3 top-3 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <div className="my-8">
          <div className="relative">
            <input
              placeholder="Повторите пароль"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              className=" bg-[#F6F6F6] w-full border rounded px-3 py-2"
            />
            <span
              onClick={toggleShowConfirmPassword}
              className="absolute right-3 top-3 cursor-pointer"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700 text-[14px]">
            Согласен с политикой обработки данных
          </label>
        </div>

        <button
          onClick={() => HandleClick()}
          type="submit"
          disabled={!formData.agree || !passwordsMatch}
          className={`w-full py-2 rounded ${
            formData.agree && passwordsMatch
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Зарегистрироваться
        </button>

        <div className="flex items-center justify-center mt-4 p-2 space-x-2 text-gray-600">
          <p className="text-sm">Уже есть аккаунт?</p>
          <Link className="text-sm text-blue-500" to="/login">
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
