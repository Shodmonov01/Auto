import React from "react";
import { FaStar } from "react-icons/fa";
import yandeks from "../../src/assets/images/yandeks.svg";
import link from "../../src/assets/images/link.svg";
import { useLanguage } from "./Context/LanguageContext";

const Comments = () => {
  const { language } = useLanguage();
  const stars = new Array(5).fill(true);

  const translations = {
    ru: {
      comments: "Отзывы",
      review1:
        "Я очень доволен покупкой машины в данном автосалоне. Все сотрудники были приветливые и готовы помочь на каждом этапе выбора и приобретения авто. Мне предоставили отличные условия по кредитованию, а также сделали хорошую скидку на машину. Все документы оформили быстро и без лишних хлопот.",
      review2:
        "Я очень доволен покупкой машины в данном автосалоне. Сотрудники были приветливые и готовы помочь на каждом этапе выбора и приобретения авто. Мне предоставили отличные условия по кредитованию, также сделали хорошую скидку на машину. Документы оформили быстро и без лишних хлопот.",
    },
    uzb: {
      comments: "Sharhlar",
      review1:
        "Men ushbu avtoulov salonida mashina sotib olishdan juda mamnunman. Xodimlar juda samimiy va mashina tanlash va sotib olishning har bir bosqichida yordam berishga tayyor edi. Menga kredit bo'yicha ajoyib shart-sharoitlar taklif qilishdi va mashinaga yaxshi chegirma qilishdi. Barcha hujjatlar tez va ortiqcha qiyinchiliksiz rasmiylashtirildi.",
      review2:
        "Men ushbu avtoulov salonida mashina sotib olishdan juda mamnunman. Xodimlar samimiy va mashina tanlash va sotib olishning har bir bosqichida yordam berishga tayyor edi. Menga kredit bo'yicha yaxshi shart-sharoitlar taklif qilishdi va mashinaga yaxshi chegirma qilishdi. Hujjatlar tez va muammosiz rasmiylashtirildi.",
    },
    en: {
      comments: "Comments",
      review1:
        "I am very satisfied with purchasing a car at this dealership. All the staff were friendly and ready to assist at every stage of selecting and buying a car. They provided excellent loan conditions and also gave a good discount on the car. All documents were processed quickly and without any hassle.",
      review2:
        "I am very satisfied with purchasing a car at this dealership. The staff were friendly and ready to assist at every stage of selecting and buying a car. They provided excellent loan conditions and also gave a good discount on the car. All documents were processed quickly and without any hassle.",
    },
  };

  return (
    <div className="mx-2 my-2 lg:mx-[72px] lg:my-4">
      <div className="mb-4">
        <b className="text-2xl">{translations[language].comments}</b>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="shadow-lg rounded-lg p-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img src={yandeks} alt="yandeks" className="w-12 h-12 mr-4" />
                <div>
                  <div className="flex gap-4 items-center">
                    <p className="text-[#8C8C8C] text-sm">Яндекс</p>
                    <img src={link} alt="link" />
                  </div>
                  <p>Александра</p>
                  <p className="text-[#8C8C8C] text-sm">Апрель 2024</p>
                </div>
              </div>
              <div className="flex gap-1">
                {stars.map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
            </div>
          </div>
          <p>{translations[language].review1}</p>
        </div>

        <div className="shadow-lg rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <img src={yandeks} alt="yandeks" className="w-12 h-12 mr-4" />
              <div>
                <div className="flex gap-4 items-center">
                  <p className="text-[#8C8C8C] text-sm">Яндекс</p>
                  <img src={link} alt="link" />
                </div>
                <p>Александра</p>
                <p className="text-[#8C8C8C] text-sm">Апрель 2024</p>
              </div>
            </div>
            <div className="flex gap-1 mt-1">
              {stars.map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
          </div>
          <p>{translations[language].review2}</p>
        </div>

        <div className="shadow-lg rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <img src={yandeks} alt="yandeks" className="w-12 h-12 mr-4" />
              <div>
                <div className="flex gap-4 items-center">
                  <p className="text-[#8C8C8C] text-sm">Яндекс</p>
                  <img src={link} alt="link" />
                </div>
                <p>Александра</p>
                <p className="text-[#8C8C8C] text-sm">Апрель 2024</p>
              </div>
            </div>
            <div className="flex gap-1 mt-1">
              {stars.map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
          </div>
          <p>{translations[language].review2}</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
