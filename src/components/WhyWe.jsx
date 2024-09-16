import React from "react";
import third from "../../src/assets/images/third.svg";
import deliver from "../../src/assets/images/deliver.svg";
import Vector from "../../src/assets/images/Vector.svg";
import chat from "../../src/assets/images/chat.svg";

const Section3 = () => {
  return (
    <div className="p-4">
      <div>
        <b className="text-2xl">Почему мы?</b>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        <div className="text-center w-[306px] h-[236px] p-[35px_0_22px_25px] bg-white rounded-tl-[5px] shadow-lg opacity-90 mx-auto">
          <img src={Vector} alt="" className="mx-auto mb-4" />
          <b className="text-xl">Работаем под ключ</b>
          <p className="text-[#989898]">
            y нас вы можете приобрести автомобиль напрямую y официального
            автодилера, без посредников и переводчиков.
          </p>
        </div>
        <div className="text-center w-[306px] h-[236px] p-[35px_0_22px_25px] bg-white rounded-tl-[5px] shadow-lg opacity-90 mx-auto">
          <img src={chat} alt="" className="mx-auto mb-4" />
          <b className="text-xl">онлайн-чат 24/7</b>
          <p className="text-[#989898]">
            Мы всегда на связи, чтобы ответить на ваши вопросы и помочь вам c
            выбором.
          </p>
        </div>
        <div className="text-center w-[306px] h-[236px] p-[35px_0_22px_25px] bg-white rounded-tl-[5px] shadow-lg opacity-90 mx-auto">
          <img src={third} alt="" className="mx-auto mb-4" />
          <b className="text-xl">Упрощенный выбор авто</b>
          <p className="text-[#989898]">
            Мы создали этот сайт, чтобы сделать поиск автомобиля по вашим
            критериям максимально простым и удобным.
          </p>
        </div>
        <div className="text-center w-[306px] h-[236px] p-[35px_0_22px_25px] bg-white rounded-tl-[5px] shadow-lg opacity-90 mx-auto">
          <img src={deliver} alt="" className="mx-auto mb-4" />
          <b className="text-xl">Доставка</b>
          <p className="text-[#989898]">
            Поставка в любой регион РФ, прямая связь без посредников.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
