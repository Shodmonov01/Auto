import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./accauntSettings.scss";

const AccauntSettings = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    password: "",
    tariff: "",
  });

  const [originalUserData, setOriginalUserData] = useState({
    name: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    password: "",
    tariff: ""
  });

  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      const response = await fetch("https://668b0ea52c68eaf3211e8742.mockapi.io/api/v1/cars/1"); // ID 2 uchun o'zgartiring
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
        password: "",
        tariff: "",    
      });
      setOriginalUserData({
        name: data.user.name || "",
        email: data.user.email || "",
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
        password: "",
        tariff: ""    
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
        name: userData.name !== originalUserData.name ? userData.name : originalUserData.name,
        email: userData.email !== originalUserData.email ? userData.email : originalUserData.email,
      };

      if (updatedUser.name === originalUserData.name && updatedUser.email === originalUserData.email) {
        console.log("No changes detected.");
        return;
      }

      const response = await fetch("https://668b0ea52c68eaf3211e8742.mockapi.io/api/v1/cars/1", { // ID 2 uchun o'zgartiring
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: updatedUser,
        }),
      });

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
      const response = await fetch("https://668b0ea52c68eaf3211e8742.mockapi.io/api/v1/cars/1", { 
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            password: userData.newPassword,
          },
        }),
      });

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
    <section className="accountSettigns-section">
      <h1>Настройки</h1>

      <form onSubmit={handleAccountUpdate}>
        <h2>аккаунт</h2>
        <div className="flex-class">
          <div className="input grid-class">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              placeholder="Введите свое имя"
            />
          </div>
          <div className="input grid-class">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              placeholder="Введите адрес электронной почты"
            />
            <label htmlFor="email" className="extraLabel">
              <span>Политика обработки данных</span>
            </label>
          </div>
        </div>
        <button type="submit">Сохранить</button>
      </form>

      <form onSubmit={handlePasswordChange}>
        <h2>Смена пароля</h2>
        <div className="flex-class">
          <div className="input grid-class">
            <label htmlFor="oldPass">Текущий пароль</label>
            <input
              type="password"
              id="oldPass"
              name="oldPassword"
              value={userData.oldPassword}
              onChange={handleInputChange}
              placeholder="Текущий пароль"
            />
            <label htmlFor="oldPass" className="extraLabel">
              <span>Забыли пароль?</span>
            </label>
          </div>
          <div className="input grid-class">
            <label htmlFor="newPass">Новый пароль</label>
            <input
              type="password"
              id="newPass"
              name="newPassword"
              value={userData.newPassword}
              onChange={handleInputChange}
              placeholder="Новый пароль"
            />
          </div>
          <div className="input grid-class">
            <label htmlFor="confirmNewPass">Подтвердите пароль</label>
            <input
              type="password"
              id="confirmNewPass"
              name="confirmNewPassword"
              value={userData.confirmNewPassword}
              onChange={handleInputChange}
              placeholder="Подтвердите пароль"
            />
          </div>
        </div>
        <button type="submit">Сохранить</button>
      </form>
    </section>
  );
};

export default AccauntSettings;
