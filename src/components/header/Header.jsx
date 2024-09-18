import axios from "axios";
import { useEffect, useState } from "react";
import Badge from "@mui/joy/Badge";
import "./header.scss";

const Header = () => {
  const [carsData, setCarsData] = useState([]);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

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

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (!event.target.closest(".profileInf")) {
      setShowProfileDropdown(false);
    }
  };

  const getInitials = (name) => {
    const names = name?.split(" ");
    const initials = names?.map((name) => name.charAt(0)).join("");
    return initials?.toUpperCase();
  };

  const handleProfileClick = (e) => {
    e.stopPropagation();
    setShowProfileDropdown((prev) => !prev);
  };

  return (
    <div>
      <header className="headerTop">
        <div className="container">
          <nav className="flex-class">
            <div className="headerTop-left">
              <ul className="flex-class">
                <li>
                  <a href="#">Главная</a>
                </li>
                <li>
                  <a href="#">Каталог</a>
                </li>
                <li>
                  <a href="#">О нас</a>
                </li>
                <li>
                  <a href="#">Новости</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
              </ul>
            </div>
            <div className="headerTop-right flex-class">
              <div className="socailMediaImg flex-class">
                <a href="https://vk.com/youcarr">
                  <img src="/wk.svg" className="wk" alt="Error" />
                </a>
                <a href="">
                  <img src="/whatsapp.svg" alt="Error" />
                </a>
                <img src="/instagramm.svg" alt="Error" />
              </div>
              <div className="phoneBox">
                <img src="/phone.svg" alt="Error" />
                <a href="tel:+7 968 053-14-77">+7 968 053-14-77</a>
              </div>
              <div className="mailBox">
                <img src="/email.svg" alt="Error" />
                <a href="mailto:Info@mail.ru">Info@mail.ru</a>
              </div>
              <select>
                <option value="RU &#709;" defaultChecked>
                  RU
                </option>
                <option value="EN">EN</option>
                <option value="UZ">UZ</option>
              </select>
            </div>
          </nav>
        </div>
      </header>

      <header className="headerMain">
        <div className="container">
          <nav className="flex-class">
            <img
              src="/logo.svg"
              onClick={() => location.reload()}
              alt="Error"
            />
            <div className="headerMain-links">
              <ul className="flex-class">
                <li>
                  <a href="#">Автомобили</a>
                  <span>&gt;</span>
                </li>
                <li>
                  <a href="#">Коммерческий транспорт</a>
                  <span>&gt;</span>
                </li>
                <li>
                  <a href="#">Мотоциклы</a>
                  <span>&gt;</span>
                </li>
              </ul>
            </div>
            <div className="headerMain-input flex-class">
              <img src="/search-1.svg" alt="Error" />
              <input type="text" placeholder="Поиск автомобилей" />
            </div>
            <Badge badgeContent="3+">
              <img src="/notification.svg" alt="Error" />
            </Badge>
            <div className="profileInf flex-class">
              <div className="logoImg" onClick={handleProfileClick}>
                <h3 className="defaultLogoImg">
                  {carsData
                    ? carsData.map((car) => getInitials(car.user.name))
                    : null}
                </h3>
              </div>
              <div className="profileText">
                <h2>{carsData ? carsData.map((car) => car.user.name) : null}</h2>
                <p>Базовый тариф</p>
              </div>
              {showProfileDropdown && (
                <div className="profileDropdown">
                  <div className="profileDropdown-header">
                    <div className="profile-img">
                      <h3 className="defaultLogoImg">
                        {carsData
                          ? carsData.map((car) => getInitials(car.user.name))
                          : null}
                      </h3>
                    </div>
                    <div className="profile-info">
                      <p>{carsData[0]?.user.email || "user@mail.ru"}</p>
                      <p className="profileTarif">Базовый тариф</p>
                    </div>
                  </div>
                  <ul className="profile-links">
                    <li>
                      <img src="/star.svg" alt="Избранное" /> Избранное
                    </li>
                    <li>
                      <img src="/email.svg" alt="Мои уведомления" /> Мои уведомления
                    </li>
                    <li>
                      <img src="/asideSelect.svg" alt="Разместить объявление" /> Разместить объявление
                    </li>
                    <li>
                      <img src="/settings.svg" alt="Настройки аккаунта" /> Настройки аккаунта
                    </li>
                  </ul>
                  <button>Выйти</button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
