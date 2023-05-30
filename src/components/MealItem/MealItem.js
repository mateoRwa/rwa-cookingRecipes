import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./MealItem.css";
import MealModal from "../MealModal/MealModal";
const MealItem = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isMealDetailShowed, setIsMealDetailShowed] = useState(false);
  const favoriteHandler = (e) => {
    e.preventDefault();
    setIsFavorite((prev) => !prev);
  };
  const showMealModal = () => {
    setIsMealDetailShowed(true);
  };
  return (
    <>
      {isMealDetailShowed && (
        <MealModal meal={props} setIsMealDetailShowed={setIsMealDetailShowed} />
      )}
      <div className="meal-item">
        <div className="image-box" onClick={showMealModal}>
          <img src={props.imageUrl} />
        </div>
        <div className="meal-bio">
          <h3 onClick={showMealModal}>{props.name}</h3>
          <span onClick={favoriteHandler}>
            {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </span>
        </div>
      </div>
    </>
  );
};

export default MealItem;
