import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/Context/LanguageContext";

export default function PageNotFound() {
  const { language } = useLanguage();
  const translations = {
    ru: {
      notfound: "Упс! Страница не найдена",
      description:
        "Запрашиваемая страница была удалена или временно недоступна.",
      button: "Вернуться на главную",
    },
    uzb: {
      notfound: "Voy! Sahifa topilmadi",
      description:
        "Qidirayotgan sahifangiz o'chirilgan yoki vaqtincha mavjud emas.",
      button: "Bosh sahifaga qaytish",
    },
    en: {
      notfound: "Oops! Page Not Found",
      description:
        "The page you are looking for might have been removed or is temporarily unavailable.",
      button: "Go Back to Home",
    },
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-3xl md:text-4xl font-medium mt-4 text-gray-600">
          {translations[language].notfound}
        </h2>
        <p className="text-lg mt-2 text-gray-500">
          {translations[language].description}
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 transition duration-200"
        >
          {translations[language].button}
        </Link>
      </div>
    </div>
  );
}
