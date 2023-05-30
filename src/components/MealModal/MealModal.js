import "./MealModal.css";
import { BiTime } from "react-icons/bi";
import { FaBurn } from "react-icons/fa";
import Tag from "../UI/Tag";
import "./MealModal.css";
const MealModal = (props) => {
  const closeModalHandler = () => {
    // Zatvara modal
    props.setIsMealDetailShowed(false);
  };
  return (
    <div id="modal" className="modal-overlay">
      <div className="modal-content">
        <div className="main-container">
          <div className="image-div">
            <img src={props.meal.imageUrl} />
          </div>
          <div className="heading">
            <span className="title">{props.meal.name}</span>
            <span className="subtitle">{props.meal.description}</span>
          </div>
          <div className="meal-detail">
            <div className="calories">
              <span className="icon">
                <FaBurn />
              </span>
              <span>{props.meal.calories} Cal</span>
            </div>
            <div className="preparationTime">
              <span className="icon">
                <BiTime />
              </span>
              <span>{props.meal.preparationTime} Min</span>
            </div>
          </div>
          <div className="ingredients">
            {props.meal.ingredients.map((ingredient) => {
              return <Tag key={ingredient} name={ingredient} />;
            })}
          </div>
          <div className="preparation">
            <p>{props.meal.mealPreparation}</p>
          </div>
        </div>
        <div className="closeModal" onClick={closeModalHandler}>
          <span>Close</span>
        </div>
      </div>
    </div>
  );
};
export default MealModal;
