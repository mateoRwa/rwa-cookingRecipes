import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./MealItem.css";
import MealModal from "../MealModal/MealModal";
const MealItem = (props) => {
  const [isMealDetailShowed, setIsMealDetailShowed] = useState(false);
  const favoriteHandler = () => {
    // Okida funkciju u roditeljskoj komponenti i salje joj id , za favorite, da moze vidit ima li id u nizu ili nema
    props.favoriteHandler(props.id);
  };
  const showMealModal = () => {
    //Otvara detalje o receptu
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
          <div onClick={favoriteHandler}>
            <span>
              {props.isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealItem;
