import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";

const Katalog = () => {
  const carsPerPage = 6;
  const initialCars = [
    {
      id: 1,
      name: "Mercedes S-Class",
      year: 2020,
      image:
        "https://www.slashgear.com/img/gallery/12-most-expensive-mercedes-of-all-time/l-intro-1701212622.jpg",
      price: 45000,
      mileage: 5000,
      createdIn: "Germany",
      fuelConsumption: "5.6 L/100 km",
      engineType: "Hybrid",
      likes: 0,
      description: "A luxurious hybrid vehicle with state-of-the-art features.",
    },
    {
      id: 2,
      name: "Mercedes E-Class",
      year: 2019,
      image:
        "https://www.slashgear.com/img/gallery/10-most-luxurious-mercedes-benz-cars-ever-made-ranked/l-intro-1686086979.jpg",
      price: 40000,
      mileage: 8000,
      createdIn: "Germany",
      fuelConsumption: "6.8 L/100 km",
      engineType: "Fuel",
      likes: 0,
      description: "A fuel-powered car with excellent performance and comfort.",
    },
    {
      id: 3,
      name: "Mercedes AMG GT",
      year: 2021,
      image:
        "https://img.indianautosblog.com/2014/08/Rendering-Mercedes-AMG-GT.jpg",
      price: 60000,
      mileage: 2000,
      createdIn: "Germany",
      fuelConsumption: "8.3 L/100 km",
      engineType: "Hybrid",
      likes: 0,
      description: "An affordable hybrid car with a sleek design.",
    },
    {
      id: 4,
      name: "Mercedes GLE",
      year: 2018,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtdQGTnISBBzFxTL3_hIKovaA8WWbgVNs8Q&s",
      price: 38000,
      mileage: 12000,
      createdIn: "Germany",
      fuelConsumption: "7.5 L/100 km",
      engineType: "Fuel",
      likes: 0,
      description: "A stylish fuel car with a high-end finish.",
    },
    {
      id: 6,
      name: "Mercedes GLS",
      year: 2021,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkR3g7jwMjHtAGPiQMWCRPZ_b1DbqrEBRRYw&s",
      price: 75000,
      mileage: 3000,
      createdIn: "Germany",
      fuelConsumption: "10.2 L/100 km",
      engineType: "Fuel",
      likes: 0,
      description: "A premium fuel car with advanced technology and features.",
    },
    {
      id: 5,
      name: "Mercedes C-Class",
      year: 2022,
      image:
        "https://i.pinimg.com/originals/b9/05/3a/b9053a37387e8a6ec8da0bff568d9b3b.jpg",
      price: 50000,
      mileage: 4000,
      createdIn: "Germany",
      fuelConsumption: "5.3 L/100 km",
      engineType: "Hybrid",
      likes: 0,
      description:
        "A hybrid car that combines performance with fuel efficiency.",
    },
    {
      id: 1,
      name: "Mercedes S-Class",
      year: 2020,
      image:
        "https://www.slashgear.com/img/gallery/12-most-expensive-mercedes-of-all-time/l-intro-1701212622.jpg",
      price: 45000,
      mileage: 5000,
      createdIn: "Germany",
      fuelConsumption: "5.6 L/100 km",
      engineType: "Hybrid",
      likes: 0,
      description: "A luxurious hybrid vehicle with state-of-the-art features.",
    },
    {
      id: 2,
      name: "Mercedes E-Class",
      year: 2019,
      image:
        "https://www.slashgear.com/img/gallery/10-most-luxurious-mercedes-benz-cars-ever-made-ranked/l-intro-1686086979.jpg",
      price: 40000,
      mileage: 8000,
      createdIn: "Germany",
      fuelConsumption: "6.8 L/100 km",
      engineType: "Fuel",
      likes: 0,
      description: "A fuel-powered car with excellent performance and comfort.",
    },
    {
      id: 3,
      name: "Mercedes AMG GT",
      year: 2021,
      image:
        "https://img.indianautosblog.com/2014/08/Rendering-Mercedes-AMG-GT.jpg",
      price: 60000,
      mileage: 2000,
      createdIn: "Germany",
      fuelConsumption: "8.3 L/100 km",
      engineType: "Hybrid",
      likes: 0,
      description: "An affordable hybrid car with a sleek design.",
    },
    {
      id: 4,
      name: "Mercedes GLE",
      year: 2018,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtdQGTnISBBzFxTL3_hIKovaA8WWbgVNs8Q&s",
      price: 38000,
      mileage: 12000,
      createdIn: "Germany",
      fuelConsumption: "7.5 L/100 km",
      engineType: "Fuel",
      likes: 0,
      description: "A stylish fuel car with a high-end finish.",
    },
    {
      id: 5,
      name: "Mercedes C-Class",
      year: 2022,
      image:
        "https://i.pinimg.com/originals/b9/05/3a/b9053a37387e8a6ec8da0bff568d9b3b.jpg",
      price: 50000,
      mileage: 4000,
      createdIn: "Germany",
      fuelConsumption: "5.3 L/100 km",
      engineType: "Hybrid",
      likes: 0,
      description:
        "A hybrid car that combines performance with fuel efficiency.",
    },
    {
      id: 6,
      name: "Mercedes GLS",
      year: 2021,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkR3g7jwMjHtAGPiQMWCRPZ_b1DbqrEBRRYw&s",
      price: 75000,
      mileage: 3000,
      createdIn: "Germany",
      fuelConsumption: "10.2 L/100 km",
      engineType: "Fuel",
      likes: 0,
      description: "A premium fuel car with advanced technology and features.",
    },
    ,
    {
      id: 1,
      name: "Mercedes S-Class",
      year: 2020,
      image:
        "https://www.slashgear.com/img/gallery/12-most-expensive-mercedes-of-all-time/l-intro-1701212622.jpg",
      price: 45000,
      mileage: 5000,
      createdIn: "Germany",
      fuelConsumption: "5.6 L/100 km",
      engineType: "Hybrid",
      likes: 0,
      description: "A luxurious hybrid vehicle with state-of-the-art features.",
    },
    {
      id: 2,
      name: "Mercedes E-Class",
      year: 2019,
      image:
        "https://www.slashgear.com/img/gallery/10-most-luxurious-mercedes-benz-cars-ever-made-ranked/l-intro-1686086979.jpg",
      price: 40000,
      mileage: 8000,
      createdIn: "Germany",
      fuelConsumption: "6.8 L/100 km",
      engineType: "Fuel",
      likes: 0,
      description: "A fuel-powered car with excellent performance and comfort.",
    },
    {
      id: 3,
      name: "Mercedes AMG GT",
      year: 2021,
      image:
        "https://img.indianautosblog.com/2014/08/Rendering-Mercedes-AMG-GT.jpg",
      price: 60000,
      mileage: 2000,
      createdIn: "Germany",
      fuelConsumption: "8.3 L/100 km",
      engineType: "Hybrid",
      likes: 0,
      description: "An affordable hybrid car with a sleek design.",
    },
    {
      id: 4,
      name: "Mercedes GLE",
      year: 2018,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtdQGTnISBBzFxTL3_hIKovaA8WWbgVNs8Q&s",
      price: 38000,
      mileage: 12000,
      createdIn: "Germany",
      fuelConsumption: "7.5 L/100 km",
      engineType: "Fuel",
      likes: 0,
      description: "A stylish fuel car with a high-end finish.",
    },
    {
      id: 5,
      name: "Mercedes C-Class",
      year: 2022,
      image:
        "https://i.pinimg.com/originals/b9/05/3a/b9053a37387e8a6ec8da0bff568d9b3b.jpg",
      price: 50000,
      mileage: 4000,
      createdIn: "Germany",
      fuelConsumption: "5.3 L/100 km",
      engineType: "Hybrid",
      likes: 0,
      description:
        "A hybrid car that combines performance with fuel efficiency.",
    },
    {
      id: 6,
      name: "Mercedes GLS",
      year: 2021,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkR3g7jwMjHtAGPiQMWCRPZ_b1DbqrEBRRYw&s",
      price: 75000,
      mileage: 3000,
      createdIn: "Germany",
      fuelConsumption: "10.2 L/100 km",
      engineType: "Fuel",
      likes: 0,
      description: "A premium fuel car with advanced technology and features.",
    },
  ];
  axiosInstance
    .get("/cars")
    .then((response) => {
      console.log("Response data:", response.data);
    })
    .catch((error) => {
      console.error(
        "Error fetching data:",
        error.response ? error.response.data : error.message
      );
    });

  const [state, setState] = useState([]);
  const [cars, setCars] = useState(initialCars);
  const [likedCars, setLikedCars] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cars.length / carsPerPage);

  const handleLike = (id) => {
    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === id
          ? {
              ...car,
              likes: likedCars.has(id) ? car.likes - 1 : car.likes + 1,
            }
          : car
      )
    );
    setLikedCars((prevLikes) => {
      const newLikes = new Set(prevLikes);
      if (newLikes.has(id)) {
        newLikes.delete(id);
      } else {
        newLikes.add(id);
      }
      return newLikes;
    });
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return;
    }
    setCurrentPage(pageNumber);
  };

  const getCurrentPageCars = () => {
    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    return cars.slice(startIndex, endIndex);
  };
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="p-4">
      <div>
        <b className="text-2xl">АВТОМОБИЛЬНЫЙ КАТАЛОГ</b>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
          {getCurrentPageCars().map((car) => (
            <div key={car.id} className="border p-4 rounded-lg shadow-md">
              <Link to={`/about-cars/${car.id}`}>
                <button
                  onClick={() => handleLinkClick(`/about-cars/${car.id}`)}
                  className="w-full h-40"
                >
                  <img
                    src={car.image}
                    alt={`Car ${car.id}`}
                    className="w-full h-40 object-cover mb-2"
                  />
                </button>
              </Link>
              <p className="text-lg font-bold">{car.name}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">
                  ${car.price.toLocaleString()}
                </p>
                <p className="text-md text-gray-600">{car.year}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-md text-gray-600"> {car.mileage} km</p>
                <p className="text-md text-gray-600">{car.fuelConsumption}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-md text-gray-600">{car.createdIn}</p>
                <p className="text-md text-gray-600">{car.engineType}</p>
              </div>
              <p className="text-sm text-gray-800 mt-2">{car.description}</p>
              <div className="mt-2 flex justify-end items-center">
                <button
                  onClick={() => handleLike(car.id)}
                  className={`py-1 px-2 rounded ${
                    likedCars.has(car.id) ? "bg-gray-400" : ""
                  }`}
                >
                  {likedCars.has(car.id) ? (
                    <>
                      <IoHeartDislikeOutline className="mr-1" />
                    </>
                  ) : (
                    <>
                      <FcLike className="mr-1" />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        {/* Previous button */}
        {/* <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 mr-2 rounded-lg transition-all duration-300 ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:scale-105"
          }`}
        >
          Previous
        </button> */}

        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded-full transition-all duration-300 ease-in-out ${
              currentPage === index + 1
                ? "bg-[#293843] text-white shadow-lg transform scale-110"
                : "bg-slate-100 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:scale-105"
            } relative group`}
            style={{
              filter: currentPage === index + 1 ? "none" : "grayscale(100%)",
            }}
          >
            {/* <span className="absolute bottom-0 mb-8 hidden group-hover:block text-xs bg-black text-white rounded px-2 py-1">
              Go to page {index + 1}
            </span> */}
            {index + 1}
          </button>
        ))}

        {/* <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 ml-2 rounded-lg transition-all duration-300 ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:scale-105"
          }`}
        >
          Next
        </button> */}
      </div>

      <div className="flex items-center justify-end gap-2 m-4">
        <div>
          <b className="text-xl">
            <u>
              <button onClick={() => handleLinkClick("/about-cars")}>
                <Link className="text-[#293843]" to="/about-cars">
                  Перейти в каталог
                </Link>
              </button>
            </u>
          </b>
        </div>
        <div>
          <MdOutlineArrowRightAlt size={30} />
        </div>
      </div>
    </div>
  );
};

export default Katalog;

// import React, { useState, useEffect } from "react";
// import { FcLike } from "react-icons/fc";
// import { IoHeartDislikeOutline } from "react-icons/io5";
// import { MdOutlineArrowRightAlt } from "react-icons/md";
// import { Link, useNavigate } from "react-router-dom";
// import axiosInstance from "../axiosConfig";

// const Katalog = () => {
//   const carsPerPage = 6;
//   const [cars, setCars] = useState([]);
//   const [likedCars, setLikedCars] = useState(new Set());
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(cars.length / carsPerPage);

//   useEffect(() => {
//     axiosInstance
//       .get("/cars")
//       .then((response) => {
//         const apiCars = response.data.map((car) => ({
//           id: car.id,
//           name: `Sedan - ${car.drive}`,
//           year: car.year,
//           image: car.image[0],
//           price: car.cost,
//           mileage: car.milage,
//           createdIn: car.country,
//           fuelConsumption: `${car.volume} L`,
//           engineType: car.fuel,
//           likes: 0,
//           description: car.description,
//         }));
//         setCars(apiCars);
//       })
//       .catch((error) => {
//         console.error(
//           "Error fetching data:",
//           error.response ? error.response.data : error.message
//         );
//       });
//   }, []);

//   const handleLike = (id) => {
//     setCars((prevCars) =>
//       prevCars.map((car) =>
//         car.id === id
//           ? {
//               ...car,
//               likes: likedCars.has(id) ? car.likes - 1 : car.likes + 1,
//             }
//           : car
//       )
//     );
//     setLikedCars((prevLikes) => {
//       const newLikes = new Set(prevLikes);
//       if (newLikes.has(id)) {
//         newLikes.delete(id);
//       } else {
//         newLikes.add(id);
//       }
//       return newLikes;
//     });
//   };

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber < 1 || pageNumber > totalPages) {
//       return;
//     }
//     setCurrentPage(pageNumber);
//   };

//   const getCurrentPageCars = () => {
//     const startIndex = (currentPage - 1) * carsPerPage;
//     const endIndex = startIndex + carsPerPage;
//     return cars.slice(startIndex, endIndex);
//   };

//   const navigate = useNavigate();

//   const handleLinkClick = (path) => {
//     window.scrollTo(0, 0);
//     navigate(path);
//   };

//   return (
//     <div className="p-4">
//       <div>
//         <b className="text-2xl">АВТОМОБИЛЬНЫЙ КАТАЛОГ</b>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
//           {getCurrentPageCars().map((car) => (
//             <div key={car.id} className="border p-4 rounded-lg shadow-md">
//               <Link to={`/about-cars/${car.id}`}>
//                 <button
//                   onClick={() => handleLinkClick(`/about-cars/${car.id}`)}
//                   className="w-full h-40"
//                 >
//                   <img
//                     src={car.image}
//                     alt={`Car ${car.id}`}
//                     className="w-full h-40 object-cover mb-2"
//                   />
//                 </button>
//               </Link>
//               <p className="text-lg font-bold">{car.name}</p>
//               <div className="flex justify-between items-center">
//                 <p className="text-lg font-bold">
//                   ${car.price.toLocaleString()}
//                 </p>
//                 <p className="text-md text-gray-600">{car.year}</p>
//               </div>
//               <div className="flex justify-between items-center">
//                 <p className="text-md text-gray-600"> {car.mileage} km</p>
//                 <p className="text-md text-gray-600">{car.fuelConsumption}</p>
//               </div>
//               <div className="flex justify-between items-center">
//                 <p className="text-md text-gray-600">{car.createdIn}</p>
//                 <p className="text-md text-gray-600">{car.engineType}</p>
//               </div>
//               <p className="text-sm text-gray-800 mt-2">{car.description}</p>
//               <div className="mt-2 flex justify-end items-center">
//                 <button
//                   onClick={() => handleLike(car.id)}
//                   className={`py-1 px-2 rounded ${
//                     likedCars.has(car.id) ? "bg-gray-400" : ""
//                   }`}
//                 >
//                   {likedCars.has(car.id) ? (
//                     <>
//                       <IoHeartDislikeOutline className="mr-1" />
//                     </>
//                   ) : (
//                     <>
//                       <FcLike className="mr-1" />
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-center mt-8">
//         {Array.from({ length: totalPages }).map((_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => handlePageChange(index + 1)}
//             className={`px-4 py-2 mx-1 rounded-full transition-all duration-300 ease-in-out ${
//               currentPage === index + 1
//                 ? "bg-[#293843] text-white shadow-lg transform scale-110"
//                 : "bg-slate-100 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:scale-105"
//             }`}
//             style={{
//               filter: currentPage === index + 1 ? "none" : "grayscale(100%)",
//             }}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Katalog;
