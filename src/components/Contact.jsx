import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { useLanguage } from "./Context/LanguageContext";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaVk } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const center = [-3.745, -38.523];
const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

const Contact = () => {
  const { language } = useLanguage();
  const translations = {
    ru: { contact: "Контакты" },
    uzb: { contact: "Kontakt" },
    en: { contact: "Contact" },
  };
  return (
    <>
      <div className="flex">
        <aside className="w-72 p-5 flex flex-col items-center">
          <h1 className="font-semibold text-3xl text-center text-gray-700 mb-4">
            {translations[language].contact}
          </h1>
          <div className="space-y-10">
            <div className="flex space-x-4 cursor-pointer items-center justify-center">
              <div className="bg-[#F3F3F3] p-2 rounded-[3px]">
                <IoIosCall size={24} />
              </div>
              <p>+7 (777) 777-77-77</p>
            </div>
            <div className="flex space-x-4 cursor-pointer items-center justify-start">
              <div className="bg-[#F3F3F3] p-2 rounded-[3px]">
                <MdEmail size={24} />
              </div>
              <p>Info@mail.ru</p>
            </div>
            <div className="flex space-x-4 cursor-pointer pr-2 items-center justify-center">
              <div className="bg-[#F3F3F3] p-2 rounded-[3px]">
                <CiLocationOn size={24} />
              </div>
              <p>Санкт-Петербург</p>
            </div>
          </div>
          <div className="flex items-center mt-[50px] pr-[50px] space-x-[18px]">
            <FaVk size={30} className="text-[#2684E5] cursor-pointer" />
            <FaWhatsapp size={30} className="text-[#2684E5] cursor-pointer" />
            <FaInstagram size={30} className="text-[#2684E5] cursor-pointer" />
          </div>
        </aside>

        <div className="flex-1 p-6">
          <YMaps>
            <Map
              defaultState={{ center: center, zoom: 10 }}
              style={mapContainerStyle}
            >
              <Placemark geometry={center} />
            </Map>
          </YMaps>
        </div>
      </div>
    </>
  );
};
export default Contact;
