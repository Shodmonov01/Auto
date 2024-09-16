import "./cardError.scss"
import { Link } from "react-router-dom";

const CardError = () => {
  return (
    <div className="errorsavedCards flex-class">
      <div className="errorsavedCards2">
        <img src="/errorsavedCardsImg.svg" alt="Error" />
        <h3>Нет сохраненных объявлений</h3>
        <p>
          Чтобы добавить авто в избранное, нажмите на сердечко на карточке
          машины!
        </p>
        <Link to={"/catalog"}>
          <button>Перейти в каталог</button>
        </Link>
      </div>
    </div>
  );
};

export default CardError;
