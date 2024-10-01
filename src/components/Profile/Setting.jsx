import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import axiosInstance from "../../axiosConfig";

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
      setSuccessMessage("Данные успешно обновлены!");
      setError(null);
    } catch (err) {
      setError("Ошибка при обновлении данных. Попробуйте еще раз.");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== reEnterPassword) {
      setError("Новый пароль и повторно введенный пароль не совпадают.");
    } else {
      try {
        await axiosInstance.put(`/update-password/${id}`, {
          oldPass: password,
          newPass: newPassword,
        });
        setSuccessMessage("Пароль успешно обновлен!");
        setError(null);
      } catch (err) {
        setError("Ошибка при обновлении пароля. Попробуйте еще раз.");
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
      <h2 className="text-2xl font-bold mb-6">Настройки</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMessage && (
        <p className="text-green-500 mb-4">{successMessage}</p>
      )}

      <form onSubmit={handleEmailSubmit} className="">
        <div>
          <h1 className="text-lg font-semibold mb-4">Аккаунт</h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Имя
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
              E-mail
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
              Политика обработки данных
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
          {loading ? "Сохраняю..." : "Сохранить"}
        </button>
      </form>

      <div>
        <h1 className="text-lg font-semibold mb-4">Смена пароля</h1>
      </div>
      <form onSubmit={handlePasswordSubmit} className="">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1 relative">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Текущий пароль
            </label>
            <input
              type={showPassword ? "text" : "password"} 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 bg-[#F6F6F6] rounded"
              placeholder="текущий пароль"
              required
            />
            <button
              type="button"
              className="absolute  right-2 top-10"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />} 
            </button>
            <Link
              to="/forgot-password"
              className="text-sm mb-2 text-blue-500 hover:underline mt-2 block"
            >
              Забыли пароль?
            </Link>
          </div>

          <div className="flex-1 relative">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="newPassword"
            >
              Новый пароль
            </label>
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 bg-[#F6F6F6] rounded"
              placeholder="Введите новый пароль"
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
              Подтвердите пароль
            </label>
            <input
              type={showReEnterPassword ? "text" : "password"}
              id="reEnterPassword"
              value={reEnterPassword}
              onChange={(e) => setReEnterPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 bg-[#F6F6F6] rounded"
              placeholder="Повторите пароль"
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
          className="bg-blue-500 text-white px-6 py-3 hover:bg-blue-600 transition"
        >
          Сохранить
        </button>
      </form>
    </div>
  );
};

export default Setting;
