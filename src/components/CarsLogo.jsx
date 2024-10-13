import React, { useState, useEffect } from "react";
import axiosInstance from "../axiosConfig";

const CarsLogo = () => {
  const [logo, setLogo] = useState([]);
  const page = 1;
  const pageSize = 6;

  useEffect(() => {
    const fetchLogos = async () => {
      const storedLogos = localStorage.getItem("carLogos");

      if (storedLogos) {
        setLogo(JSON.parse(storedLogos));
      } else {
        try {
          const response = await axiosInstance.get("/marks", {
            params: { page, pageSize },
          });
          console.log(response.data);

          localStorage.setItem("carLogos", JSON.stringify(response.data));

          setLogo(response.data);
        } catch (error) {
          console.error("Error fetching the car logos:", error);
        }
      }
    };

    fetchLogos();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mx-2 my-2 lg:mx-[72px] lg:my-4">
      {logo.map((item, index) => (
        <div
          key={index}
          className="flex justify-center items-center border border-gray-300 shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-32 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default CarsLogo;
