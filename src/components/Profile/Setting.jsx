import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import axiosInstance from "../../axiosConfig";
import { useLanguage } from "../Context/LanguageContext";

const Setting = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showReEnterPassword, setShowReEnterPassword] = useState(false);
  const { language } = useLanguage();
  const translations = {
    ru: {
      setting: "Настройки",
      account: "Аккаунт",
      name: "Имя",
      email: "E-mail",
      save: "Сохранить",
      currentPassword: "Текущий пароль",
      newPassword: "Новый пароль",
      confirmPassword: "Подтвердите пароль",
      forgotPassword: "Забыли пароль?",
      changePassword: "Смена пароля",
      dataUpdateSuccess: "Данные успешно обновлены!",
      dataUpdateError: "Ошибка при обновлении данных. Попробуйте еще раз.",
      passwordUpdateSuccess: "Пароль успешно обновлен!",
      passwordUpdateError: "Ошибка при обновлении пароля. Попробуйте еще раз.",
      dataPolicy: "Политика обработки данных",
      currentPassword: "Текущий пароль",
      NewPassword: "Новый пароль",
      Confirm: "подтвердите пароль",
    },
    uzb: {
      setting: "Sozlamalar",
      account: "Hisob",
      name: "Ism",
      email: "E-mail",
      save: "Saqlash",
      currentPassword: "Joriy parol",
      newPassword: "Yangi parol",
      confirmPassword: "Parolni tasdiqlang",
      forgotPassword: "Parolni unuttim?",
      changePassword: "Parolni o'zgartirish",
      dataUpdateSuccess: "Ma'lumotlar muvaffaqiyatli yangilandi!",
      dataUpdateError:
        "Ma'lumotlarni yangilashda xato. Iltimos, qaytadan urinib ko'ring.",
      passwordUpdateSuccess: "Parol muvaffaqiyatli yangilandi!",
      passwordUpdateError:
        "Parolni yangilashda xato. Iltimos, qaytadan urinib ko'ring.",
      dataPolicy: "Ma'lumotlarni qayta ishlash siyosati",
      currentPassword: "Hozirgi parolingiz",
      NewPassword: "Yangi parol",
      Confirm: "Parolni tasdiqlang",
    },
    en: {
      setting: "Setting",
      account: "Account",
      name: "Name",
      email: "E-mail",
      save: "Save",
      currentPassword: "Current Password",
      newPassword: "New Password",
      confirmPassword: "Confirm Password",
      forgotPassword: "Forgot Password?",
      changePassword: "Change Password",
      dataUpdateSuccess: "Data successfully updated!",
      dataUpdateError: "Error updating data. Please try again.",
      passwordUpdateSuccess: "Password successfully updated!",
      passwordUpdateError: "Error updating password. Please try again.",
      dataPolicy: "Data Processing Policy",
      currentPassword: "Current password",
      NewPassword: "New password",
      Confirm: "Confirm Password",
    },
  };

  const userData = JSON.parse(localStorage.getItem("userData"));
  const id = userData?.id;

  useEffect(() => {
    if (userData) {
      setName(userData.name);
      setEmail(userData.email);
    }
  }, []);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axiosInstance
        .put(`/update-name-email/${id}`, {
          newName: name,
          newEmail: email,
        })
        .then((res) => {
          localStorage.setItem(
            "userData",
            JSON.stringify(res.data.updatedUser)
          );
        });
      setSuccessMessage(translations[language].dataUpdateSuccess);
      setError(null);
    } catch (err) {
      setError(translations[language].dataUpdateError);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== reEnterPassword) {
      setError("Новый пароль и повторно введенный пароль не совпадают."); // You can also add translations for Uzbek and English here
    } else {
      try {
        await axiosInstance.put(`/update-password/${id}`, {
          oldPass: password,
          newPass: newPassword,
        });
        setSuccessMessage(translations[language].passwordUpdateSuccess);
        setError(null);
      } catch (err) {
        setError(translations[language].passwordUpdateError);
      } finally {
        setLoading(false);
        setPassword("");
        setNewPassword("");
        setReEnterPassword("");
      }
    }
  };

  return (
    <div className="bg-white p-6">
      <h2 className="text-2xl font-bold mb-6">
        {translations[language].setting}
      </h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMessage && (
        <p className="text-green-500 mb-4">{successMessage}</p>
      )}

      <form onSubmit={handleEmailSubmit} className="">
        <div>
          <h1 className="text-lg font-semibold mb-4">
            {translations[language].account}
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              {translations[language].name}
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 bg-[#F6F6F6] rounded"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              {translations[language].email}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 bg-[#F6F6F6] rounded"
              required
            />
            <Link
              to={"/#"}
              className="text-sm text-blue-500 hover:underline mt-2 block"
            >
              {translations[language].dataPolicy}
            </Link>
          </div>
        </div>
        <button
          type="submit"
          className={`bg-blue-500 text-white mb-2 px-6 py-3 hover:bg-blue-600 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Сохраняю..." : translations[language].save}
        </button>
      </form>

      <div>
        <h1 className="text-lg font-semibold mb-4">
          {translations[language].changePassword}
        </h1>
      </div>
      <form onSubmit={handlePasswordSubmit} className="">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1 relative">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              {translations[language].currentPassword}
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 bg-[#F6F6F6] rounded"
              placeholder={translations[language].currentPassword}
              required
            />
            <button
              type="button"
              className="absolute right-2 top-10"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <Link
              to="/forgot-password"
              className="text-sm mb-2 text-blue-500 hover:underline mt-2 block"
            >
              {translations[language].forgotPassword}
            </Link>
          </div>

          <div className="flex-1 relative">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="newPassword"
            >
              {translations[language].newPassword}
            </label>
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 bg-[#F6F6F6] rounded"
              placeholder={translations[language].NewPassword}
              required
            />
            <button
              type="button"
              className="absolute right-2 top-10"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex-1 relative">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="reEnterPassword"
            >
              {translations[language].confirmPassword}
            </label>
            <input
              type={showReEnterPassword ? "text" : "password"}
              id="reEnterPassword"
              value={reEnterPassword}
              onChange={(e) => setReEnterPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 bg-[#F6F6F6] rounded"
              placeholder={translations[language].Confirm}
              required
            />
            <button
              type="button"
              className="absolute right-2 top-10"
              onClick={() => setShowReEnterPassword(!showReEnterPassword)}
            >
              {showReEnterPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className={`bg-blue-500 text-white mb-2 px-6 py-3 hover:bg-blue-600 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Сохраняю..." : translations[language].save}
        </button>
      </form>
    </div>
  );
};

export default Setting;
