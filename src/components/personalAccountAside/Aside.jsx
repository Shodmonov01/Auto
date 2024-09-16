import { Link, useNavigate, useLocation } from "react-router-dom";
import "./aside.scss";
import { useEffect, useState } from "react";

const Aside = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle dropdown
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://668b0ea52c68eaf3211e8742.mockapi.io/api/v1/cars/1"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/savedCards");
    }
  }, [location, navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const getInitials = (name) => {
    const names = name?.split(" ");
    const initials = names?.map((name) => name.charAt(0)).join("");
    return initials?.toUpperCase();
  };

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <aside
      className="personalAccountAside"
      style={dropdownOpen ? { height: "65rem" } : {}}
    >
      <div className="asideProfileInf flex-class">
        <div className="profileImg">
          <h1>{getInitials(user.name)}</h1>
        </div>
        <div className="profileTexts">
          <h1>{user.name}</h1>
          <h3>Рейтинг 5.0</h3>
        </div>
      </div>
      <div className="asideProfileLinks">
        <ul>
          <li>
            E-mail
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </li>
          <li className="flex-class">
            Тариф
            <div className="asideTarif">
              <a href="#">
                <img src="/i.svg" alt="Error" />
                {user.tariff}
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="asideProfileBtns">
        <Link to={"/savedCards"}>
          <button>
            <img src="/star.svg" alt="Error" /> Избранное
          </button>
        </Link>
        <Link to={"/message"}>
          <button>
            <img src="/message.svg" alt="Error" /> Сообщения
          </button>
        </Link>
        <button onClick={toggleDropdown}>
          <img src="/asideSelect.svg" alt="Error" /> Разместить объявление{" "}
          <span
            style={
              dropdownOpen
                ? { transform: "rotate(270deg) translateY(5px)" }
                : { transform: "rotate(90deg) translateY(-5px)" }
            }
          >
            &gt;
          </span>
        </button>
        {dropdownOpen && (
          <div className="dropdown">
            <button onClick={() => navigate("/placeAd")}>
              <img src="/asideSelect.svg" alt="Error" /> Мои Объявления
            </button>
          </div>
        )}
        <Link to={"/tariff"}>
          <button>
            <img src="/elec.svg" alt="Error" /> Тариф
          </button>
        </Link>
        <Link to={"/accauntSettings"}>
          <button>
            <img src="/settings.svg" alt="Error" /> Настройки аккаунта
          </button>
        </Link>
      </div>
      <button className="logout">Выйти</button>
    </aside>
  );
};

export default Aside;
