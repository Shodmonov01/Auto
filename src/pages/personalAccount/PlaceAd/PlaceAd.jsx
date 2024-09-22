import { useEffect, useState, useRef } from "react";
import axios from "axios";
import CardError from "../../../components/cardError/CardError";

const PlaceAd = () => {
  const [value, setValue] = useState(0);
  const [carsData, setCarsData] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState(null);

  const dropdownRef = useRef(null);

  const handleTabChange = (newValue) => {
    setValue(newValue);
  };

  const fetchCarsApi = async () => {
    try {
      const res = await axios.get(
        "https://668b0ea52c68eaf3211e8742.mockapi.io/api/v1/cars?page=1&limit=1"
      );
      const data = await res.data;
      setCarsData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCarsApi();
  }, []);

  const toggleDropdown = (carId) => {
    setOpenDropdown(openDropdown === carId ? null : carId);
  };

  const handleDeleteClick = (carId) => {
    setSelectedCarId(carId);
    setOpenModal(true);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  };

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <section className="w-full p-8 bg-white">
      <h1 className="text-2xl font-bold mb-8">Мои объявления</h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => handleTabChange(0)}
          className={`py-2 px-4 ${
            value === 0 ? "border-b-2 border-blue-500" : ""
          }`}
        >
          Активные
        </button>
        <button
          onClick={() => handleTabChange(1)}
          className={`py-2 px-4 ${
            value === 1 ? "border-b-2 border-blue-500" : ""
          }`}
        >
          Архив
        </button>
      </div>

      <div className={`${value !== 0 ? "hidden" : ""}`} id="tab-panel-0">
        {value === 0 && (
          <div className="p-6">
            {carsData ? (
              carsData.map((car) => (
                <div
                  className="flex flex-col md:flex-row items-start justify-between bg-gray-100 rounded-lg shadow p-4 mb-6"
                  key={car.id}
                >
                  <div className="flex items-start">
                    <img
                      src="/savedCardCar.svg"
                      alt="Error"
                      className="w-32 h-24 object-cover rounded-md mr-6"
                    />
                    <div>
                      <h2 className="text-xl font-semibold mb-2">
                        {car.company} {car.model}, {car.year}
                      </h2>
                      <b className="text-2xl mb-2 block">{car.price} $</b>
                      <p className="text-gray-600">{car.country}</p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col items-start space-y-4 md:space-x-4">
                    <div className="flex items-center space-x-2">
                      <img src="/eyeIcon.svg" alt="views" className="w-6 h-6" />
                      <h4>{car.views}</h4>
                    </div>
                    <div className="relative" ref={dropdownRef}>
                      <img
                        src="/threeMenu.svg"
                        alt="menu"
                        className="w-6 cursor-pointer"
                        onClick={() => toggleDropdown(car.id)}
                      />
                      {openDropdown === car.id && (
                        <div className="absolute right-0 bg-white shadow-lg rounded-lg p-2 mt-2 z-10">
                          <button className="block w-full text-left py-1 px-4 hover:bg-gray-100">
                            Редактировать
                          </button>
                          <button className="block w-full text-left py-1 px-4 hover:bg-gray-100">
                            Снять с публикации
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <CardError />
            )}
          </div>
        )}
      </div>

      <div className={`${value !== 1 ? "hidden" : ""}`} id="tab-panel-1">
        {value === 1 && (
          <div className="p-6">
            {carsData ? (
              carsData.map((car) => (
                <div
                  className="flex flex-col md:flex-row items-start justify-between bg-gray-100 rounded-lg shadow p-4 mb-6"
                  key={car.id}
                >
                  <div className="flex items-start">
                    <img
                      src="/arxivCar.svg"
                      alt="Error"
                      className="w-32 h-24 object-cover rounded-md mr-6"
                    />
                    <div>
                      <h2 className="text-xl font-semibold mb-2">
                        {car.company} {car.model}, {car.year}
                      </h2>
                      <b className="text-2xl mb-2 block">{car.price} $</b>
                      <p className="text-gray-600">{car.country}</p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col items-start space-y-4 md:space-x-4">
                    <h4 className="text-lg">Продал на YouCar</h4>
                    <div className="relative" ref={dropdownRef}>
                      <img
                        src="/threeMenu.svg"
                        alt="menu"
                        className="w-6 cursor-pointer"
                        onClick={() => toggleDropdown(car.id)}
                      />
                      {openDropdown === car.id && (
                        <div className="absolute right-0 bg-white shadow-lg rounded-lg p-2 mt-2 z-10">
                          <button className="block w-full text-left py-1 px-4 hover:bg-gray-100">
                            Редактировать
                          </button>
                          <button className="block w-full text-left py-1 px-4 hover:bg-gray-100">
                            Удалить
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <CardError />
            )}
          </div>
        )}
      </div>

      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex items-start space-x-4">
              <img
                src="/savedCardCar.svg"
                alt="Car"
                className="w-32 h-24 object-cover rounded-md"
              />
              <div>
                <h3 className="text-xl font-bold">Hyundai Solaris 2, 2022</h3>
                <p className="text-2xl font-semibold">19 000 $</p>
                <p className="text-gray-600">США</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Выберите причину</h4>
              <label className="block">
                <input type="radio" name="reason" className="mr-2" />
                Продал на YouCar
              </label>
              <label className="block">
                <input type="radio" name="reason" className="mr-2" />
                Продал где-то ещё
              </label>
              <label className="block">
                <input type="radio" name="reason" className="mr-2" />
                Другая причина
              </label>
            </div>
            <div className="flex space-x-4 mt-6">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
                Удалить
              </button>
              <button
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg w-full"
                onClick={() => setOpenModal(false)}
              >
                Оставить активным
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PlaceAd;
