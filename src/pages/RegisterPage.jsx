import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axiosInstance from "../axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLanguage } from "../components/Context/LanguageContext";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
    agree: false,
    userrate: "yearly",
  });

  const { language } = useLanguage();
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

  const translations = {
    ru: {
      register: "Регистрация",
      fillFields: "Заполните поля ниже для создания аккаунта.",
      name: "Имя",
      email: "E-mail",
      enterPassword: "Введите пароль",
      repeatPassword: "Повторите пароль",
      agree: "Согласен с политикой обработки данных",
      registerButton: "Зарегистрироваться",
      alreadyHaveAccount: "Уже есть аккаунт?",
      login: "Войти",
      passwordsDoNotMatch: "Пароли не совпадают",
      agreeToPolicy: "Вы должны согласиться с политикой обработки данных",
      successfulRegistration: "Успешная регистрация",
    },
    uzb: {
      register: "Registratsiya",
      fillFields: "Hisob yaratish uchun quyidagi maydonlarni to'ldiring.",
      name: "Ism",
      email: "E-mail",
      enterPassword: "Parolni kiriting",
      repeatPassword: "Parolni takrorlang",
      agree: "Shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozi",
      registerButton: "Ro'yxatdan o'tish",
      alreadyHaveAccount: "Allaqachon hisobingiz bormi?",
      login: "Kirish",
      passwordsDoNotMatch: "Parollar mos kelmaydi",
      agreeToPolicy:
        "Ma'lumotlar qayta ishlash siyosatiga rozilik bildirishingiz kerak",
      successfulRegistration: "Muvaffaqiyatli ro'yxatdan o'tish",
    },
    en: {
      register: "Register",
      fillFields: "Fill in the fields below to create an account.",
      name: "Name",
      email: "E-mail",
      enterPassword: "Enter Password",
      repeatPassword: "Repeat Password",
      agree: "Agree to the data processing policy",
      registerButton: "Register",
      alreadyHaveAccount: "Already have an account?",
      login: "Login",
      passwordsDoNotMatch: "Passwords do not match",
      agreeToPolicy: "You must agree to the data processing policy",
      successfulRegistration: "Successful registration",
    },
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== confirmPassword) {
      Toast.fire({
        icon: "error",
        title: translations[language].passwordsDoNotMatch,
      });
      return;
    }

    if (!formData.agree) {
      Toast.fire({
        icon: "error",
        title: translations[language].agreeToPolicy,
      });
      return;
    }

    HandleClick();
  };

  const HandleClick = () => {
    axiosInstance
      .post("/user-register", formData)
      .then((response) => {
        const token = response.data.token;
        const userData = response.data.userData;
        localStorage.setItem("token", token);
        localStorage.setItem("userData", JSON.stringify(userData));

        Toast.fire({
          icon: "success",
          title: translations[language].successfulRegistration,
        });

        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error.response.data.error);
        Toast.fire({
          icon: "error",
          title: error.response.data.error,
        });
      });
  };

  const passwordsMatch = formData.password === confirmPassword;

  return (
    <div className="flex items-center justify-center min-h-[670px] bg-gray-100">
      <form
        className="bg-white p-10 rounded shadow-md w-[563px]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-[35px] font-bold mb-[10px] text-center">
          {translations[language].register}
        </h2>
        <h4 className="text-[14px] text-center">
          {translations[language].fillFields}
        </h4>

        <div className="my-8">
          <input
            placeholder={translations[language].name}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-[#F6F6F6] w-full border rounded px-3 py-2"
          />
        </div>

        <div className="my-8">
          <input
            placeholder={translations[language].email}
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
              placeholder={translations[language].enterPassword}
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="bg-[#F6F6F6] w-full border rounded px-3 py-2"
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
              placeholder={translations[language].repeatPassword}
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              className="bg-[#F6F6F6] w-full border rounded px-3 py-2"
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
            {translations[language].agree}
          </label>
        </div>

        <button
          type="submit"
          disabled={!formData.agree || !passwordsMatch}
          className={`w-full py-2 rounded ${
            formData.agree && passwordsMatch
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {translations[language].registerButton}
        </button>

        <div className="flex items-center justify-center mt-4 p-2 space-x-2 text-gray-600">
          <p className="text-sm">{translations[language].alreadyHaveAccount}</p>
          <Link className="text-sm text-blue-500" to="/login">
            {translations[language].login}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
