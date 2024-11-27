import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Automobile from "./UpdatedCars.jsx/Automobile";
import ElectricCar from "./UpdatedCars.jsx/ElectricCar";
import MotorBike from "./UpdatedCars.jsx/MotorBike";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdPhotoCamera } from "react-icons/md";
import axiosInstance from "../../config/axiosConfig";
import { FaDollarSign, FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Update = () => {
  const [error, setError] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const storedUserData = JSON.parse(localStorage.getItem("userData")) || [];
  const [endpoint, setEndpoint] = useState("/add-car");
  const { id } = useParams();
  const [formData, setFormData] = useState({
    color: "",
    country: "",
    year: null,
    cost: null,
    engine: "",
    milage: null,
    volume: "",
    horsepower: null,
    drive: "",
    checkpoint: "",
    doors: null,
    body: "",
    statement: "",
    description: "",
    stock: 0,
    authoremail: storedUserData?.email,
    rate: "",
    model: "",
    mark: "BMW",
  });
  useEffect(() => {
    const controller = new AbortController();

    const fetchCar = async () => {
      try {
        const response = await axiosInstance.get(`/cars/${id}`, {
          signal: controller.signal,
        });
        console.log(response.data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error(error.message);
        }
      }
    };

    fetchCar();

    return () => {
      controller.abort();
    };
  }, [id]);

  // useEffect(() => {
  //   const fetchCarToUPdate = async () => {
  //     const res = axiosInstance.put(`update-car${id}`);
  //   };
  //   fetchCarToUPdate;
  //   f;
  // }, []);

  const handleNavClick = (path) => {
    let newEndpoint;
    switch (path) {
      case "automobile":
        newEndpoint = "/add-car";
        break;
      case "electric":
        newEndpoint = "/add-commerce-car";
        break;
      case "motorbike":
        newEndpoint = "/add-motorcycle";
        break;
      default:
        newEndpoint = "/add-car";
    }

    setEndpoint(newEndpoint);
  };

  const handleOptionChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);

    const maxFileSize = 2 * 1024 * 1024;

    const validFiles = files.reduce((acc, file) => {
      if (file.size > maxFileSize) {
        setError("Rasm hajmi 2 MB dan kam bo'lishi kerak");
        return acc;
      } else {
        setError("");
        acc.push({
          url: URL.createObjectURL(file),
          file,
        });
        return acc;
      }
    }, []);

    setImageFiles((prevFiles) => [...prevFiles, ...validFiles]);
  };

  const deletePhoto = (index) => {
    setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    const data = new FormData();
    imageFiles.forEach((file) => data.append("image", file.file));
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axiosInstance.post(endpoint, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Item added successfully:", response.data);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <>
      <div className="flex justify-end px-4 pt-4">
        <Link
          to={"/profile"}
          className="text-[#2684E5] cursor-pointer hover:underline"
        >
          Закрыть
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="w-full max-w-[792px] p-6 md:p-10 lg:p-14 rounded-[10px] shadow">
          <div className="flex justify-center items-center">
            <h1 className="text-[35px] font-bold">Разместите объявление</h1>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-[15px]">
              Укажите данные oб автомобиле для размещения объявления
            </p>
          </div>
          <br />
          <nav className="flex bg-[#F4F4F4] justify-between items-center border rounded-l-[50px] rounded-r-[50px]">
            <Link
              onClick={() => handleNavClick("automobile")}
              to={"automobile"}
              className="font-bold py-2 px-4 rounded-full hover:bg-white transition duration-300 ease-in-out transform hover:scale-102"
            >
              Automobile
            </Link>
            <Link
              onClick={() => handleNavClick("electric")}
              to={"electric"}
              className="font-bold py-2 px-4 rounded-full hover:bg-white transition duration-300 ease-in-out transform hover:scale-102"
            >
              Electric Car
            </Link>
            <Link
              onClick={() => handleNavClick("motorbike")}
              to={"motorbike"}
              className="font-bold py-2 px-4 rounded-full hover:bg-white transition duration-300 ease-in-out transform hover:scale-102"
            >
              Motorbike
            </Link>
          </nav>
          <div className="relative w-full">
            <select
              value={formData.mark}
              onChange={(e) => handleOptionChange("mark", e.target.value)}
              className="w-full bg-[#F6F6F6] p-4 rounded-[5px] my-[20px] text-[#989898] appearance-none"
            >
              <option value="Марка">Марка</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="BMW">BMW</option>
            </select>
            <IoMdArrowDropdown
              className="absolute top-[50px] right-4 transform -translate-y-1/2 pointer-events-none"
              size={16}
            />
          </div>
          <div className="relative w-full">
            <select
              value={formData.model}
              onChange={(e) => handleOptionChange("model", e.target.value)}
              className="w-full bg-[#F6F6F6] p-4 rounded-[5px] text-[#989898] appearance-none"
            >
              <option value="Модель">Модель</option>
              <option value="Tahoe">Tahoe</option>
              <option value="BMW">BMW m5 cs</option>
              <option value="Ducati">Ducati</option>
              <option value="Yamaha">Yamaha</option>
              <option value="Kawasaki">Kawasaki</option>
              <option value="Suzuki">Suzuki</option>
              <option value="Honda">Honda</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
            </select>
            <IoMdArrowDropdown
              className="absolute top-[28px] right-4 transform -translate-y-1/2 pointer-events-none"
              size={16}
            />
          </div>
          <br />
          <div>
            <h1 className="text-[25px] font-bold">Характеристики</h1>
          </div>
          <div className="flex justify-between items-center border-t py-4 mt-2">
            <p className="text-[15px] text-[#989898]">Год выпуска</p>
            <select
              value={formData.year}
              onChange={(e) => handleOptionChange("year", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Пробег</p>
            <select
              value={formData.milage}
              onChange={(e) => handleOptionChange("milage", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="15000">15000</option>
              <option value="16000">16000</option>
              <option value="17000">17000</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Страна</p>
            <select
              value={formData.country}
              onChange={(e) => handleOptionChange("country", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="США">США</option>
              <option value="Russia">Russia</option>
              <option value="Uzbekistan">Uzbekistan</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Топливо</p>
            <select
              value={formData.engine}
              onChange={(e) => handleOptionChange("engine", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="petrol">petrol</option>
              <option value="electric">electric</option>
              <option value="diesel">diesal</option>
              <option value="hybrid">hybrid</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Объем</p>
            <select
              value={formData.volume}
              onChange={(e) => handleOptionChange("volume", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="1.8">1.8 л</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Мощность</p>
            <select
              value={formData.power}
              onChange={(e) => handleOptionChange("power", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="133">133 л.c</option>
              <option value="200">200 л.c</option>
              <option value="300">300 л.c</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4 ">
            <p className="text-[15px] text-[#989898]">Привод</p>
            <select
              value={formData.drive}
              onChange={(e) => handleOptionChange("drive", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="AWD">AWD</option>
              <option value="chain">chain</option>
              <option value="belt">belt</option>
              <option value="shaft">shaft</option>
              <option value="FWD">FWD</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">КПП</p>
            <select
              value={formData.checkpoint}
              onChange={(e) => handleOptionChange("checkpoint", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="automatic">automatic</option>
              <option value="manual">manual</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Кузов</p>
            <select
              value={formData.body}
              onChange={(e) => handleOptionChange("body", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="hatchback">hatchback</option>
              <option value="sport">sport</option>
              <option value="crossover">crossover</option>
              <option value="sedan">sedan</option>
              <option value="convertible">convertible</option>
              <option value="coupe">coupe</option>
              <option value="pickup">pickup</option>
              <option value="suv">suv</option>
              <option value="van">van</option>
              <option value="mpv">mpv</option>
              <option value="jeep">jeep</option>
              <option value="wagon">wagon</option>
              <option value="cabriolet">cabriolet</option>
              <option value="roadster">roadster</option>
              <option value="touring">touring</option>
              <option value="standart">standart</option>
              <option value="dual-sport">dual-sport</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Колличество дверей</p>
            <select
              value={formData.doors}
              onChange={(e) => handleOptionChange("doors", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Состояние</p>
            <select
              value={formData.statement}
              onChange={(e) => handleOptionChange("statement", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="C пробегом">C пробегом</option>
              <option value="used">used</option>
              <option value="new">new</option>
            </select>
          </div>
          <div className="flex justify-between items-center border-t py-4">
            <p className="text-[15px] text-[#989898]">Цвет</p>
            <select
              value={formData.color}
              onChange={(e) => handleOptionChange("color", e.target.value)}
              className="bg-[#F6F6F6] p-2 rounded-[5px]"
            >
              <option value="Белый">Белый</option>
              <option value="red">Red</option>
              <option value="black">Black</option>
              <option value="white">White</option>
            </select>
          </div>
          <div className="flex gap-6 itmes-center">
            <div className="flex items-center gap-2 mt-[25px]">
              <input
                name="rate"
                value="cash"
                checked={formData.rate === "cash"}
                type="radio"
                onChange={(e) => handleOptionChange("rate", e.target.value)}
              />
              <p>cash</p>
            </div>
            <div className="flex items-center gap-2 mt-[25px]">
              <input
                type="radio"
                value="credit"
                name="rate"
                checked={formData.rate === "credit"}
                onChange={(e) => handleOptionChange("rate", e.target.value)}
              />
              <p>credit</p>
            </div>
          </div>
        </div>
        <br />

        <div className="w-full max-w-[792px] flex flex-col p-6 sm:p-8 md:p-12 lg:p-24 shadow-lg justify-center rounded-[10px] items-center bg-white">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 self-start">
            Фото
          </h1>
          <p className="self-start text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
            Загрузите фото вашего автомобиля четко с разных ракурсов!
          </p>

          <div className="w-full max-w-[692px]">
            <label className="flex flex-col items-center justify-center w-full h-32 sm:h-40 md:h-48 bg-gray-100 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out">
              <MdPhotoCamera className="text-3xl sm:text-4xl md:text-5xl text-[#2684E5] mb-2" />
              <span className="text-[#2684E5] font-semibold text-xs sm:text-sm md:text-base">
                Нажмите для выбора фото
              </span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>

            {error && <p className="text-red-500">{error}</p>}

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 mt-4 sm:mt-6">
              {imageFiles.map((imgUrl, index) => (
                <div key={index} className="relative group">
                  <img
                    src={imgUrl.url}
                    alt={`uploaded preview ${index + 1}`}
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-md"
                  />
                  <button
                    onClick={() => deletePhoto(index)}
                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <br />

        <div className="w-full max-w-[792px] flex flex-col p-6 sm:p-8 md:p-12 lg:p-24 shadow-lg justify-center rounded-[10px] items-center bg-white">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 self-start">
            Описание
          </h1>
          <p className="self-start text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
            He указывайте ссылки на источники, цены, контакты и не предлагайте
            другие услуги! объявление не пройдет модерацию
          </p>
          <div className="w-full">
            <textarea
              value={formData.description}
              onChange={(e) =>
                handleOptionChange("description", e.target.value)
              }
              className="w-full bg-[#F6F6F6] h-32 sm:h-40 md:h-[178px] p-2 border border-gray-300 rounded-md"
              placeholder="Введите описание..."
            />
          </div>
        </div>

        <br />

        <div className="w-full max-w-[792px] flex flex-col p-6 sm:p-8 md:p-12 lg:p-24 shadow-lg justify-center rounded-[10px] items-center bg-white">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 self-start">
            Цена
          </h1>
          <br />
          <div className="w-full">
            <div className="flex items-center w-full max-w-[637px] bg-[#F6F6F6] h-12 sm:h-14 md:h-[48px] border border-gray-300 rounded-md p-2">
              <select
                value={formData.cost}
                onChange={(e) => handleOptionChange("cost", e.target.value)}
                className="appearance-none bg-transparent flex-1 outline-none mx-2"
              >
                <option value="1 850 000">1 850 000</option>
                <option value="2 000 000">2 000 000</option>
                <option value="3 000 000">3 000 000</option>
                <option value="4 000 000">4 000 000</option>
              </select>

              <FaDollarSign />
              <FaCaretDown />
            </div>
          </div>
        </div>

        <br />

        <button
          className="w-full max-w-[792px] text-[#2684E5] bg-[#D7EAFF] rounded-[5px] py-3 sm:py-4 md:py-[17px] px-4 sm:px-6 md:px-[43px] hover:bg-[#2684E5] hover:text-white transition duration-100"
          onClick={() => handleSubmit()}
        >
          Опубликовать объявление
        </button>

        <div className="mt-8 w-full flex justify-center ">
          <Routes>
            <Route path="automobile/:id" element={<Automobile />} />
            <Route path="electric/:id" element={<ElectricCar />} />
            <Route path="motorbike/:id" element={<MotorBike />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Update;
