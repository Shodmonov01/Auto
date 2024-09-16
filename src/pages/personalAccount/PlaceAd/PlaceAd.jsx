import "./placeAd.scss";
import { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import CardError from "../../../components/cardError/CardError";

const PlaceAd = () => {
  const [value, setValue] = useState(0); // Tanlangan tab indexini kuzatib borish uchun
  const [carsData, setCarsData] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null); // Dropdownni boshqarish uchun state
  const [openModal, setOpenModal] = useState(false); // Modalni boshqarish uchun state
  const [selectedCarId, setSelectedCarId] = useState(null); // Tanlangan mashina id

  const dropdownRef = useRef(null);

  const handleTabChange = (newValue) => {
    setValue(newValue); // Tab indexini yangilash
  };
  console.log(selectedCarId)
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
    if (openDropdown === carId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(carId);
    }
  };

  const handleDeleteClick = (carId) => {
    setSelectedCarId(carId); // Set car ID to be deleted
    setOpenModal(true); // Open modal
  };

  // const handleDeleteCar = () => {
  //   // Perform delete logic here, then close modal
  //   setOpenModal(false);
  //   setSelectedCarId(null);
  //   console.log(`Deleting car with ID: ${selectedCarId}`);
  // };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
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
    <section className="placeAd-section">
      <h1>Мои объявления</h1>

      <div className="tabs">
        <button
          onClick={() => handleTabChange(0)}
          className={value === 0 ? "active" : ""}
        >
          Активные
        </button>
        <button
          onClick={() => handleTabChange(1)}
          className={value === 1 ? "active" : ""}
        >
          Архив
        </button>
      </div>

      <div
        role="tabpanel"
        hidden={value !== 0}
        id="simple-tabpanel-0"
        aria-labelledby="simple-tab-0"
      >
        {value === 0 && (
          <Box sx={{ p: 3 }}>
            {carsData ? (
              carsData.map((car) => (
                <div className="activeBox grid-class" key={car.id}>
                  <div className="activeBox-left">
                    <img src="/savedCardCar.svg" alt="Error" />
                    <div className="activeBoxLeftTxts">
                      <h2>
                        {car.company} {car.model}, {car.year}
                      </h2>
                      <b>{car.price} $</b>
                      <p>{car.country}</p>
                    </div>
                  </div>
                  <div className="activeBox-right activeBox-right1 flex-class">
                    <div className="flex-class">
                      <div className="eyeBox flex-class">
                        <img src="/eyeIcon.svg" alt="Error" />
                        <h4>{car.views}</h4>
                      </div>

                      <div className="dropdown" ref={dropdownRef}>
                        <img
                          src="/threeMenu.svg"
                          alt="menu"
                          className="three-dots"
                          onClick={() => toggleDropdown(car.id)}
                        />
                        {openDropdown === car.id && (
                          <div className="dropdown-content">
                            <button>Редактировать</button>
                            <button>Снять с публикации</button>
                            {/* <button onClick={() => handleDeleteClick(car.id)}>
                              Удалить
                            </button> */}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex-class">
                      <img src="/personIcon.svg" alt="Error" />
                      <h4>{car.id}</h4>
                    </div>
                    <div className="flex-class">
                      <img src="/heartIcon.svg" alt="Error" />
                      <h4>{car.likes}</h4>
                    </div>
                    <div className="flex-class">
                      <img src="/messageIcon.svg" alt="Error" />
                      <h4>
                        {car.message.content
                          ? car.message.content
                          : "Нет новый сообщений"}
                      </h4>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <CardError />
            )}
          </Box>
        )}
      </div>

      <div
        role="tabpanel"
        hidden={value !== 1}
        id="simple-tabpanel-1"
        aria-labelledby="simple-tab-1"
      >
        {value === 1 && (
          <Box sx={{ p: 3 }}>
            {carsData ? (
              carsData.map((car) => (
                <div className="activeBox grid-class">
                  <div className="activeBox-left">
                    <img src="/arxivCar.svg" alt="Error" />
                    <div className="activeBoxLeftTxts">
                      <h2>
                        {car.company} {car.model}, {car.year}
                      </h2>
                      <b>{car.price} $</b>
                      <p>{car.country}</p>
                    </div>
                  </div>
                  <div className="activeBox-right">
                    <div className="flex-class">
                      <h4 className="activeCarH4">Продал на YouCar</h4>
                      <div className="dropdown" ref={dropdownRef}>
                        <img
                          src="/threeMenu.svg"
                          alt="menu"
                          className="three-dots"
                          onClick={() => toggleDropdown(car.id)}
                        />
                        {openDropdown === car.id && (
                          <div className="dropdown-content">
                            <button>Редактировать</button>
                            <button>Снять с публикации</button>
                            <button onClick={() => handleDeleteClick(car.id)}>
                              Удалить
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex-class">
                      <img src="/eyeIcon.svg" alt="Error" />
                      <h4>{car.views}</h4>
                    </div>
                    <div className="flex-class">
                      <img src="/personIcon.svg" alt="Error" />
                      <h4>{car.id}</h4>
                    </div>
                    <div className="flex-class">
                      <img src="/heartIcon.svg" alt="Error" />
                      <h4>{car.likes}</h4>
                    </div>
                    <div className="flex-class">
                      <img src="/messageIcon.svg" alt="Error" />
                      <h4>
                        {car.message.content
                          ? car.message.content
                          : "Нет новый сообщений"}
                      </h4>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <CardError />
            )}
          </Box>
        )}
      </div>

      {/* Modal */}
      {openModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <img src="/savedCardCar.svg" alt="Car" className="modal-image" />
              <div className="modal-details">
                <h3>Hyundai Solaris 2 Рестайлинг, 2022</h3>
                <p className="price">19 000 $</p>
                <p className="country">США</p>
              </div>
            </div>

            <div className="modal-reason">
              <h4>Выберите причину</h4>
              <label>
                <input type="radio" name="reason" value="youcar" /> Продал на
                YouCar
              </label>
              <label>
                <input type="radio" name="reason" value="elsewhere" /> Продал
                где-то ещё
              </label>
              <label>
                <input type="radio" name="reason" value="other" /> Другая
                причина
              </label>
            </div>

            <div className="modal-buttons">
              <button className="delete-btn">Удалить</button>
              <button
                className="cancel-btn"
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
