import React from "react";
import imageOfPerson from "../../src/assets/images/imageOfPerson.svg";
import tires from "../../src/assets/images/tires.svg";
import bgOfPerson from "../../src/assets/images/bgOfPerson.svg";

const AboutUs = () => {
  return (
    <div className="bg-[#F6F6F6] relative p-4 flex flex-col md:flex-row justify-around items-center">
      <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
        <img
          src={bgOfPerson}
          alt="Background of person"
          className="absolute inset-0"
        />
        <img src={imageOfPerson} alt="Person" className="relative" />
      </div>

      <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center md:text-left relative">
        <b className="text-2xl">О нашей компании</b>
        <p className="text-[#989898] mt-4">
          Мы имеем огромный опыт работы с автомобильным рынком Кореи и тщательно
          отбираем автомобили для наших клиентов, учитывая их потребности и
          бюджет. Мы работаем только с надежными поставщиками и перевозчиками,
          чтобы обеспечить безопасность и надежность доставки.
        </p>
        <button className="bg-[#2684E5] p-4 mt-4 text-white">
          Связаться с нами
        </button>

        <div className="absolute bottom-[-50px] right-[-50px]">
          <img src={tires} alt="Tires" className="w-24 md:w-auto" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
