import React from "react";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { useLanguage } from "./Context/LanguageContext";
import { Launch } from "@mui/icons-material";

const Footer = () => {
  const { language } = useLanguage();
  const translations = {
    ru: {
      chance: "© 1-й автоброкер Внесём качественные изменения в Вашу жизнь!",
      company: "Компания",
      catalog: "Каталог",
      about: "O нас",
      news: "Новости",
      contacts: "Контакты",
      favorites: "Избранные",
      cars: "автомобили",
      fromEurope: "Из Европы",
      fromUSA: "Из США",
      fromUAE: "Из ОАЭ",
      fromChina: "Из Китая",
      fromKorea: "Из Кореи",
      brands: "Марки",
      audi: "Audi",
      astonMartin: "Aston Martin",
      acura: "Acura",
      alfaRomeo: "Alfa Romeo",
      avatr: "Avatr",
      privacy: "Политика конфиденциальности",
      created: "Сделано в UserTech",
    },
    uzb: {
      chance:
        "© 1-avto broker Biz sizning hayotingizga sifatli o'zgarishlar kiritamiz!",
      company: "Kompaniya",
      catalog: "Katalog",
      about: "Biz haqimizda",
      news: "Yangiliklar",
      contacts: "Aloqa",
      favorites: "Sevimlilar",
      cars: "Avtomobillar",
      fromEurope: "Yevropadan",
      fromUSA: "AQShdan",
      fromUAE: "BAAdan",
      fromChina: "Xitoydan",
      fromKorea: "Koreyadan",
      brands: "Brendlar",
      audi: "Audi",
      astonMartin: "Aston Martin",
      acura: "Acura",
      alfaRomeo: "Alfa Romeo",
      avatr: "Avatr",
      privacy: "Maxfiylik siyosati",
      created: "UserTech tomonidan ishlab chiqarilgan",
    },
    en: {
      chance:
        "© 1st Autobroker We will bring qualitative changes to your life!",
      company: "Company",
      catalog: "Catalog",
      about: "About Us",
      news: "News",
      contacts: "Contacts",
      favorites: "Favorites",
      cars: "Cars",
      fromEurope: "From Europe",
      fromUSA: "From USA",
      fromUAE: "From UAE",
      fromChina: "From China",
      fromKorea: "From Korea",
      brands: "Brands",
      audi: "Audi",
      astonMartin: "Aston Martin",
      acura: "Acura",
      alfaRomeo: "Alfa Romeo",
      avatr: "Avatr",
      privacy: "Privacy Policy",
      created: "Made in UserTech",
    },
  };

  return (
    <>
      <div className="p-6">
        <hr className="my-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold mb-4">
              <span className="text-blue-600">You</span>Car
            </h1>
            <div className="flex gap-4 mb-4">
              <FaWhatsapp size={30} />
              <FaTelegramPlane size={30} />
              <FaInstagram size={30} />
            </div>
            <p>{translations[language].chance}</p>
          </div>
          <div className="flex flex-col">
            <b className="mb-2">{translations[language].company}</b>
            <a href="#" className="text-gray-400 mb-1">
              {translations[language].catalog}
            </a>
            <a href="#" className="text-gray-400 mb-1">
              {translations[language].about}
            </a>
            <a href="#" className="text-gray-400 mb-1">
              {translations[language].news}
            </a>
            <a href="#" className="text-gray-400">
              {translations[language].contacts}
            </a>
            <a href="#" className="text-gray-400">
              {translations[language].favorites}
            </a>
          </div>
          <div className="flex flex-col">
            <b className="mb-2">{translations[language].cars}</b>
            <a href="#" className="text-gray-400 mb-1">
              {translations[language].fromEurope}
            </a>
            <a href="#" className="text-gray-400 mb-1">
              {translations[language].fromUSA}
            </a>
            <a href="#" className="text-gray-400 mb-1">
              {translations[language].fromUAE}
            </a>
            <a href="#" className="text-gray-400">
              {translations[language].fromChina}
            </a>
            <a href="#" className="text-gray-400">
              {translations[language].fromKorea}
            </a>
          </div>
          <div className="flex flex-col">
            <b className="mb-2">{translations[language].brands}</b>
            <a href="#" className="text-gray-400 mb-1">
              {translations[language].audi}
            </a>
            <a href="#" className="text-gray-400 mb-1">
              {translations[language].astonMartin}
            </a>
            <a href="#" className="text-gray-400 mb-1">
              {translations[language].acura}
            </a>
            <a href="#" className="text-gray-400">
              {translations[language].alfaRomeo}
            </a>
            <a href="#" className="text-gray-400">
              {translations[language].avatr}
            </a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-gray-400 mb-1">
              bmw
            </a>
            <a href="#" className="text-gray-400 mb-1">
              baic
            </a>
            <a href="#" className="text-gray-400 mb-1">
              byd
            </a>
            <a href="#" className="text-gray-400">
              chery
            </a>
            <a href="#" className="text-gray-400">
              bentley
            </a>
            <a href="#" className="text-gray-400">
              dodge
            </a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-gray-400 mb-1">
              chery
            </a>
            <a href="#" className="text-gray-400 mb-1">
              cadillac
            </a>
            <a href="#" className="text-gray-400 mb-1">
              changan
            </a>
            <a href="#" className="text-gray-400">
              chevrolet
            </a>
            <a href="#" className="text-gray-400">
              citroen
            </a>
            <a href="#" className="text-gray-400">
              daewoo
            </a>
          </div>
          
        </div>
      </div>
      <div className="flex items-center justify-around p-4 text-black text-center">
        <p className="text-white">.</p>
        <p>{translations[language].privacy}</p>
        <p>{translations[language].created}</p>
      </div>
    </>
  );
};

export default Footer;
