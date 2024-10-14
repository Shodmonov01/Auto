import React from "react";
import imageOfPerson from "../../src/assets/images/imageOfPerson.svg";
import tires from "../../src/assets/images/tires.svg";
import bgOfPerson from "../../src/assets/images/bgOfPerson.svg";
import { useLanguage } from "./Context/LanguageContext";
import Rectangle from "../../src/assets/images/Rectangle.svg"

const AboutUs = () => {
  const { language } = useLanguage();
  const translations = {
    ru: {
      aboutcompany: "O нашей компании",
      description:
        "Мы имеем огромный опыт работы с автомобильным рынком Кореи и тщательно отбираем автомобили для наших клиентов, учитывая их потребности и бюджет. Мы работаем только с надежными поставщиками и перевозчиками, чтобы обеспечить безопасность и надежность доставки.",
      contactUs: "Связаться с нами",
    },
    uzb: {
      aboutcompany: "Kompaniyamiz haqida",
      description:
        "Biz Koreya avtomobil bozorida katta tajribaga egamiz va mijozlarimizning ehtiyojlari va byudjetini hisobga olgan holda avtomobillarni diqqat bilan tanlaymiz. Biz faqat ishonchli etkazib beruvchilar va tashuvchilar bilan ishlaymiz, shuning uchun yetkazib berish xavfsizligi va ishonchliligini ta'minlaymiz.",
      contactUs: "Biz bilan bog'laning",
    },
    en: {
      aboutcompany: "About our company",
      description:
        "We have extensive experience in the Korean automotive market and carefully select vehicles for our clients, considering their needs and budget. We work only with reliable suppliers and carriers to ensure the safety and reliability of delivery.",
      contactUs: "Contact us",
    },
  };
  return (
    <div className="mx-2 lg:mx-[72px] bg-[#F6F6F6] relative p-4 flex flex-col md:flex-row justify-around items-center">
      <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
        <img
          src={bgOfPerson}
          alt="Background of person"
          className="absolute inset-0"
        />
        <img
          src={imageOfPerson}
          alt="Person"
          className="relative transition-transform duration-200 hover:scale-110"
        />
      </div>

      <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center md:text-left relative">
        <b className="text-2xl">{translations[language].aboutcompany}</b>
        <p className="text-[#989898] mt-4">
          {translations[language].description}
        </p>
        <button className="bg-[#2684E5] hover:bg-blue-600 p-4 mt-4 text-white">
          {translations[language].contactUs}
        </button>

        <div className="relative">
          <div className="absolute bottom-[-90px] right-[-10px] hidden sm:block">
            <img src={tires} alt="Tires" className="w-24 md:w-auto" />
            <img
              src={Rectangle}
              alt="Rectangle"
              className="absolute inset-0 m-auto w-[155px] h-[155px] left-[200px]"
            />
            <p className="absolute inset-0 left-[275px] font-semibold flex items-center justify-center text-white text-[35px]">
              №1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
