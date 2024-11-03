import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { useLanguage } from "./Context/LanguageContext";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaVk, FaWhatsapp, FaInstagram } from "react-icons/fa";

const center = [-3.745, -38.523];
const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

const translations = {
  ru: { contact: "Контакты" },
  uzb: { contact: "Kontakt" },
  en: { contact: "Contact" },
};

const ContactItem = ({ icon: Icon, text, ariaLabel }) => (
  <div className="flex items-center space-x-4 cursor-pointer">
    <div className="bg-[#F3F3F3] p-2 rounded-md">
      <Icon size={24} aria-hidden="true" />
    </div>
    <p className="text-gray-700" aria-label={ariaLabel}>
      {text}
    </p>
  </div>
);

const Contact = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col lg:flex-row">
      <aside className="w-72 pt-10 p-5 flex flex-col items-center">
        <h1 className="font-semibold text-3xl text-center text-gray-700 mb-6">
          {translations[language].contact}
        </h1>
        <div className="space-y-10">
          <ContactItem
            icon={IoIosCall}
            text="+7 (777) 777-77-77"
            ariaLabel="Phone number"
          />
          <ContactItem
            icon={MdEmail}
            text="Info@mail.ru"
            ariaLabel="Email address"
          />
          <ContactItem
            icon={CiLocationOn}
            text="Санкт-Петербург"
            ariaLabel="Location"
          />
        </div>
        <div className="flex items-center mt-12 space-x-4 mr-[55px]">
          {[FaVk, FaWhatsapp, FaInstagram].map((Icon, index) => (
            <Icon
              key={index}
              size={30}
              className="text-[#2684E5] cursor-pointer"
            />
          ))}
        </div>
      </aside>

      <div className=" pl-10 p-6" style={{ width: "100%", height: "400px" }}>
        <iframe
          src="https://yandex.ru/map-widget/v1/-/CCU4R1F"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          title="Yandex Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
