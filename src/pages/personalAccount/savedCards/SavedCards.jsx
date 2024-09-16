import "./savedCards.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import CardError from "../../../components/cardError/CardError";
const SavedCards = () => {
  const [isSavedCards, setIsSavedCards] = useState(false);
  const [carsData, setCarsData] = useState([]);

  const fetchCarsApi = async () => {
    try {
      const res = await axios.get("https://668b0ea52c68eaf3211e8742.mockapi.io/api/v1/cars?page=1&limit=4");
      const data = await res.data;
      setCarsData(data);
      setIsSavedCards(true);
    } catch (error) {
      console.log(error);
      setIsSavedCards(false);
    }
  };

  useEffect(() => {
    fetchCarsApi();
  }, []);

  console.log(carsData);

  return (
    <div>
      <section className="savedCards-section">
        <h1>Избранное</h1>
        {isSavedCards ? (
          <div className="savedCards grid-class">
            {carsData.map((car) => (
              <div key={car.id} className="savedCard">
                <img
                  src="/savedCardCar.svg"
                  className="cardCarImg"
                  alt="Error"
                />
                <div className="carInfo">
                  <h2>
                    {car.company} {car.model}, {car.year}
                  </h2>
                  <h3>{car.price} $</h3>
                  <div className="savedCardFlex1 flex-class">
                    <h4>{car.mileage} км</h4>
                    <h4>{car.color}</h4>
                  </div>
                  <div className="savedCardFlex2 flex-class">
                    <h4>{car.model}</h4>
                    <h4>ID: {car.id}</h4>
                  </div>
                  <div className="savedCardFlex3 flex-class">
                    <h4>{car.country}</h4>
                    <img src="/hearth.svg" alt="Error" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <CardError />
        )}
      </section>
    </div>
  );
};

export default SavedCards;
