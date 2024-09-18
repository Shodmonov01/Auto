import React from "react";
import car from "../../src/assets/images/car.svg";

const StillSelecting = () => {
  return (
    <div className="p-4">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8"
        style={{
          background: "linear-gradient(90deg, #3593F3 50.44%, #0C74DF 80.16%)",
          borderRadius: "8px",
        }}
      >
        <div className="flex flex-col justify-center items-center md:items-start">
          <b className="text-2xl text-white mb-2">
            He можете определиться c выбором?
          </b>
          <p className="text-white mb-4 text-center md:text-left">
            Оставьте заявку, и наши менеджеры <br /> проконсультируют вас!
          </p>
          <button className="bg-[#71B2F7] text-white px-6 py-4 rounded">
            Оставить заявку
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img src={car} alt="car" />
        </div>
      </div>
    </div>
  );
};

export default StillSelecting;
