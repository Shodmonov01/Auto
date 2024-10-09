import React from "react";
import third from "../../src/assets/images/third.svg";
import deliver from "../../src/assets/images/deliver.svg";
import Vector from "../../src/assets/images/Vector.svg";
import chat from "../../src/assets/images/chat.svg";
import { useLanguage } from "./Context/LanguageContext";

const Section3 = () => {
  const { language } = useLanguage();

  const translations = {
    ru: {
      whywe: "Почему мы?",
      work: {
        title: "Работаем под ключ",
        description:
          "У нас вы можете приобрести автомобиль напрямую у официального автодилера, без посредников и переводчиков.",
      },
      chat: {
        title: "Онлайн-чат 24/7",
        description:
          "Мы всегда на связи, чтобы ответить на ваши вопросы и помочь вам с выбором.",
      },
      choice: {
        title: "Упрощенный выбор авто",
        description:
          "Мы создали этот сайт, чтобы сделать поиск автомобиля по вашим критериям максимально простым и удобным.",
      },
      delivery: {
        title: "Доставка",
        description:
          "Поставка в любой регион РФ, прямая связь без посредников.",
      },
    },
    uzb: {
      whywe: "Nimaga biz?",
      work: {
        title: "Kalit topshirish bo'yicha ishlar",
        description:
          "Bizda siz rasmiy dilerdan avtomobilni vositachilarsiz va tarjimonlarsiz sotib olishingiz mumkin.",
      },
      chat: {
        title: "Onlayn chat 24/7",
        description:
          "Savollaringizga javob berish va tanlovingizda yordam berish uchun biz doimo aloqadamiz.",
      },
      choice: {
        title: "Soddalashtirilgan avtomobil tanlovi",
        description:
          "Ushbu saytni sizning mezonlaringiz bo'yicha avtomobilni izlashni iloji boricha sodda va qulay qilish uchun yaratdik.",
      },
      delivery: {
        title: "Yetkazib berish",
        description:
          "Rossiyaning istalgan mintaqasiga yetkazib berish, vositachilarsiz to'g'ridan-to'g'ri bog'lanish.",
      },
    },
    en: {
      whywe: "Why we?",
      work: {
        title: "Turnkey Work",
        description:
          "With us, you can purchase a car directly from an official dealer without intermediaries and translators.",
      },
      chat: {
        title: "Online Chat 24/7",
        description:
          "We are always available to answer your questions and assist with your choice.",
      },
      choice: {
        title: "Simplified Car Selection",
        description:
          "We created this website to make finding a car based on your criteria as simple and convenient as possible.",
      },
      delivery: {
        title: "Delivery",
        description:
          "Delivery to any region of the Russian Federation, direct contact without intermediaries.",
      },
    },
  };

  return (
    <div className="p-4">
      <div>
        <b className="text-2xl">{translations[language].whywe}</b>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        <div className="flex flex-col justify-center items-start w-[306px] h-[236px] p-[35px_0_22px_25px] bg-white rounded-tl-[5px] shadow-lg opacity-90 mx-auto">
          <img src={Vector} alt="Vector" className="mb-4" />
          <b className="text-xl">{translations[language].work.title}</b>
          <p className="text-[#989898]">
            {translations[language].work.description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start w-[306px] h-[236px] p-[35px_0_22px_25px] bg-white rounded-tl-[5px] shadow-lg opacity-90 mx-auto">
          <img src={chat} alt="chat" className="mb-4" />
          <b className="text-xl">{translations[language].chat.title}</b>
          <p className="text-[#989898]">
            {translations[language].chat.description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start w-[306px] h-[236px] p-[35px_0_22px_25px] bg-white rounded-tl-[5px] shadow-lg opacity-90 mx-auto">
          <img src={third} alt="third" className="mb-4" />
          <b className="text-xl">{translations[language].choice.title}</b>
          <p className="text-[#989898]">
            {translations[language].choice.description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start w-[306px] h-[236px] p-[35px_0_22px_25px] bg-white rounded-tl-[5px] shadow-lg opacity-90 mx-auto">
          <img src={deliver} alt="deliver" className=" mb-4" />
          <b className="text-xl">{translations[language].delivery.title}</b>
          <p className="text-[#989898]">
            {translations[language].delivery.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
