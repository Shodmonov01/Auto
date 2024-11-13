import React, { useState } from "react";
import imageOfPerson from "../../src/assets/images/imageOfPerson.svg";
import tires from "../../src/assets/images/tires.svg";
import bgOfPerson from "../../src/assets/images/bgOfPerson.svg";
import { useLanguage } from "./Context/LanguageContext";
import Rectangle from "../../src/assets/images/Rectangle.svg";

const AboutUs = () => {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
  });

  const translations = {
    ru: {
      aboutcompany: "O нашей компании",
      description:
        "Мы имеем огромный опыт работы с автомобильным рынком Кореи и тщательно отбираем автомобили для наших клиентов, учитывая их потребности и бюджет. Мы работаем только с надежными поставщиками и перевозчиками, чтобы обеспечить безопасность и надежность доставки.",
      contactUs: "Связаться с нами",
      name: "Имя",
      phone: "Номер телефона",
      send: "Oтпpaвлять",
      close: "закрывать",
    },
    uzb: {
      aboutcompany: "Kompaniyamiz haqida",
      description:
        "Biz Koreya avtomobil bozorida katta tajribaga egamiz va mijozlarimizning ehtiyojlari va byudjetini hisobga olgan holda avtomobillarni diqqat bilan tanlaymiz. Biz faqat ishonchli etkazib beruvchilar va tashuvchilar bilan ishlaymiz, shuning uchun yetkazib berish xavfsizligi va ishonchliligini ta'minlaymiz.",
      contactUs: "Biz bilan bog'laning",
      name: "Ism",
      phone: "Telefon raqamingiz",
      send: "Yuborish",
      close: "Yopish",
    },
    en: {
      aboutcompany: "About our company",
      description:
        "We have extensive experience in the Korean automotive market and carefully select vehicles for our clients, considering their needs and budget. We work only with reliable suppliers and carriers to ensure the safety and reliability of delivery.",
      contactUs: "Contact us",
      name: "Name",
      phone: "Phone Number",
      send: "Submit",
      close: "Close",
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("number", formData.number);

    // You can now send formDataObj to your backend or handle the form submission
    console.log("Form submitted:", formDataObj);
    setIsModalOpen(false); // Close modal after form submission
  };

  return (
    <>
      <div
        id="aboutus"
        className="mx-2 lg:mx-[72px] bg-[#F6F6F6] relative flex flex-col md:flex-row justify-around items-center"
      >
        <div className="relative md:w-1/3 mb-4 md:mb-0">
          <img
            src={bgOfPerson}
            alt="Background of person"
            className="absolute top-[53px] right-2 inset-0"
          />
          <img
            src={imageOfPerson}
            alt="Person"
            className="relative h-[452px]"
          />
        </div>

        <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center md:text-left relative">
          <b className="text-2xl">{translations[language].aboutcompany}</b>
          <p className="text-[#989898] mt-4">
            {translations[language].description}
          </p>
          <button
            className="bg-[#2684E5] hover:bg-blue-600 p-4 mt-4 text-white"
            onClick={() => setIsModalOpen(true)}
          >
            {translations[language].contactUs}
          </button>

          <div className="relative">
            <div className="absolute bottom-[-90px] right-[-10px] hidden lg:block">
              <img src={tires} alt="Tires" className="w-24 md:w-auto" />
              <img
                src={Rectangle}
                alt="Rectangle"
                className="absolute inset-0 bottom-4 m-auto w-[155px] h-[155px] left-[180px]"
              />
              <p className="absolute inset-0 left-[260px] font-semibold flex items-center justify-center text-white text-[35px]">
                №1
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              {translations[language].contactUs}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="name">
                  {translations[language].name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="number">
                  {translations[language].phone}
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-10 py-2 rounded-md hover:bg-blue-600"
                >
                  {translations[language].send}
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 bg-gray-200 hover:bg-gray-300 px-10 py-2 rounded-md"
                >
                  {translations[language].close}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutUs;
