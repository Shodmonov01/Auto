import React, { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig";
import imageOfCars from "../../assets/images/imageOfCars.svg";
import Swal from "sweetalert2";

const Favorite = () => {
  const [cars, setCars] = useState([]);
  const [commerce, setCommerce] = useState([]);
  const [moto, setMoto] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("cars");
  const [likedId, setLikedId] = useState([]);
  const storedUserData = localStorage.getItem("userData");
  const userData = storedUserData ? JSON.parse(storedUserData) : null;
  const navigate = useNavigate();

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedCars")) || [];
    setLikedId(savedLikes);
  }, []);

  const toggleLike = (id) => {
    let ids = [...likedId];
    if (!likedId.includes(id)) {
      ids.push(id);
    } else {
      ids = ids.filter((item) => item !== id);
      setCars((prevCars) => prevCars.filter((car) => car.id !== id));
    }
    localStorage.setItem("likedCars", JSON.stringify(ids));
    setLikedId(ids);
    const isLiked = ids.includes(id) ? 1 : -1;
    if (!storedUserData) {
      navigate("/login");
    }

    axiosInstance.post(
      `/liked-car/${id}?user_id=${userData.id}&count=${isLiked}`
    );
  };

  useEffect(() => {
    if (!userData?.email) {
      console.error("No user email found in localStorage.");
      return;
    }

    const fetchFavorites = async () => {
      try {
        const response = await axiosInstance.get(
          `/favourite?user_email=${userData.email}`
        );

        if (response.data?.cars) {
          setCars(
            response.data.cars.map((car) => ({
              id: car.id,
              name: `Sedan - ${car.drive}`,
              year: car.year,
              image: car.image[0],
              price: car.cost,
              mileage: car.milage,
              createdIn: car.country,
              fuelConsumption: `${car.volume} L`,
              engineType: car.fuel,
            }))
          );
        }

        if (response.data?.commerce) {
          setCommerce(
            response.data.commerce.map((car) => ({
              id: car.id,
              name: `Commerce - ${car.drive}`,
              year: car.year,
              image: car.image[0],
              price: car.cost,
              mileage: car.milage,
              createdIn: car.country,
              fuelConsumption: `${car.volume} L`,
              engineType: car.fuel,
            }))
          );
        }

        if (response.data?.moto) {
          setMoto(
            response.data.moto.map((car) => ({
              id: car.id,
              name: `Moto - ${car.drive}`,
              year: car.year,
              image: car.image[0],
              price: car.cost,
              mileage: car.milage,
              createdIn: car.country,
              fuelConsumption: `${car.volume} L`,
              engineType: car.fuel,
            }))
          );
        }
      } catch (error) {
        console.error(
          "Error fetching data:",
          error.response?.data || error.message
        );
      }
    };

    fetchFavorites();
  }, [userData?.email]);
  const filterData =
    selectedCategory === "cars"
      ? cars.filter((car) => likedId.includes(car.id))
      : selectedCategory === "commerce"
      ? commerce.filter((item) => likedId.includes(item.id))
      : selectedCategory === "moto"
      ? moto.filter((bike) => likedId.includes(bike.id))
      : [];

  const handleUnLikeButton = () => {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "warning",
      title: "Unfortunately unliked!",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };

  const handleLinkClick = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Избранное</h2>
      <button onClick={() => setSelectedCategory("cars")}>cars</button>
      <button onClick={() => setSelectedCategory("commerce")}>commerce</button>
      <button onClick={() => setSelectedCategory("moto")}>moto</button>
      {filterData.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <img src={imageOfCars} alt="imageOfCars" className="mb-6" />
          <div className="text-center">
            <h1 className="text-[20px] text-[#989898] mb-4">
              Нет сохраненных объявлений
            </h1>
            <p className="text-[#293843] mb-6">
              Чтобы добавить авто в избранное, нажмите на сердечко <br /> на
              карточке машины!
            </p>
            <Link to="/about-cars">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-[17px] px-[43px] rounded text-sm">
                Перейти в каталог
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
          {filterData.map((car) => (
            <div key={car.id} className="h-[450px] border rounded-lg shadow-md">
              <Link to={`/about-cars/${car.id}`}>
                <button
                  onClick={() => handleLinkClick(`/about-cars/${car.id}`)}
                  className="w-full h-48 sm:h-52 md:h-60 lg:h-64"
                >
                  <img
                    src={car.image}
                    alt={`Car ${car.id}`}
                    className="w-full h-full rounded object-cover mb-2"
                  />
                </button>
              </Link>
              <div className="px-4 py-2">
                <p className="text-lg">
                  {car.name}, {car.year}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold">
                    ${car.price.toLocaleString()}
                  </p>
                  <p>{car.drive}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-md text-gray-600">{car.mileage} km</p>
                  <p className="text-md text-gray-600">{car.fuelConsumption}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-md text-gray-600">{car.createdIn}</p>
                  <p className="text-md text-gray-600">{car.engineType}</p>
                </div>
              </div>
              <div className="mt-2 flex justify-end items-center">
                <button
                  onClick={() => toggleLike(car.id)}
                  className={`py-1 px-2 rounded`}
                >
                  {likedId.includes(car.id) ? (
                    <FcLike onClick={handleUnLikeButton} size={24} />
                  ) : (
                    <span className="material-symbols-outlined text-[#989898]">
                      favorite
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;
