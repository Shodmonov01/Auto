import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AccountSettings = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [originalUserData, setOriginalUserData] = useState({
    name: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        "https://668b0ea52c68eaf3211e8742.mockapi.io/api/v1/cars/1"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUserData({
        name: data.user.name || "",
        email: data.user.email || "",
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
      setOriginalUserData({
        name: data.user.name || "",
        email: data.user.email || "",
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAccountUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = {
        name:
          userData.name !== originalUserData.name
            ? userData.name
            : originalUserData.name,
        email:
          userData.email !== originalUserData.email
            ? userData.email
            : originalUserData.email,
      };

      if (
        updatedUser.name === originalUserData.name &&
        updatedUser.email === originalUserData.email
      ) {
        console.log("No changes detected.");
        return;
      }

      const response = await fetch(
        "https://668b0ea52c68eaf3211e8742.mockapi.io/api/v1/cars/1",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: updatedUser,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Account updated:", data);
      navigate("/personalAccount/message");
    } catch (error) {
      console.error("Failed to update account:", error);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (userData.newPassword !== userData.confirmNewPassword) {
      console.error("New passwords do not match.");
      return;
    }
    try {
      const response = await fetch(
        "https://668b0ea52c68eaf3211e8742.mockapi.io/api/v1/cars/1",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              password: userData.newPassword,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Password updated:", data);
      navigate("/personalAccount/message");
    } catch (error) {
      console.error("Failed to update password:", error);
    }
  };

  return (
    <section className="w-[105rem] h-auto rounded-[20px] p-12 bg-white">
      <h1 className="text-3xl">Настройки</h1>

      <form onSubmit={handleAccountUpdate}>
        <h2 className="capitalize mb-4 text-2xl">аккаунт</h2>
        <div className="flex gap-12 items-center mt-8">
          <div className="grid gap-4">
            <label htmlFor="name" className="text-base">
              Имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              placeholder="Введите свое имя"
              className="w-[30rem] h-[5rem] p-4 bg-gray-100 border-none"
            />
          </div>
          <div className="grid gap-4">
            <label htmlFor="email" className="text-base">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              placeholder="Введите адрес электронной почты"
              className="w-[30rem] h-[5rem] p-4 bg-gray-100 border-none"
            />
          </div>
        </div>
        <button className="px-16 py-7 mt-12 bg-blue-600 text-white border border-blue-600 hover:bg-white hover:text-black transition-all duration-100">
          Сохранить
        </button>
      </form>

      <form onSubmit={handlePasswordChange}>
        <h2 className="capitalize mb-4 text-2xl">Смена пароля</h2>
        <div className="flex gap-12 items-center mt-8">
          <div className="grid gap-4">
            <label htmlFor="oldPass" className="text-base">
              Текущий пароль
            </label>
            <input
              type="password"
              id="oldPass"
              name="oldPassword"
              value={userData.oldPassword}
              onChange={handleInputChange}
              placeholder="Текущий пароль"
              className="w-[30rem] h-[5rem] p-4 bg-gray-100 border-none"
            />
          </div>
          <div className="grid gap-4">
            <label htmlFor="newPass" className="text-base">
              Новый пароль
            </label>
            <input
              type="password"
              id="newPass"
              name="newPassword"
              value={userData.newPassword}
              onChange={handleInputChange}
              placeholder="Новый пароль"
              className="w-[30rem] h-[5rem] p-4 bg-gray-100 border-none"
            />
          </div>
          <div className="grid gap-4">
            <label htmlFor="confirmNewPass" className="text-base">
              Подтвердите пароль
            </label>
            <input
              type="password"
              id="confirmNewPass"
              name="confirmNewPassword"
              value={userData.confirmNewPassword}
              onChange={handleInputChange}
              placeholder="Подтвердите пароль"
              className="w-[30rem] h-[5rem] p-4 bg-gray-100 border-none"
            />
          </div>
        </div>
        <button className="px-16 py-7 mt-12 bg-blue-600 text-white border border-blue-600 hover:bg-white hover:text-black transition-all duration-100">
          Сохранить
        </button>
      </form>
    </section>
  );
};

export default AccountSettings;
