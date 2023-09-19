import "./MealModal.css";
import { BiTime } from "react-icons/bi";
import { FaBurn, FaTrash } from "react-icons/fa";
import Tag from "../UI/Tag";
import "./MealModal.css";
import useStore from "../../store/useStore";
const MealModal = (props) => {
  const token = useStore((state) => state.token);
  const recipes = useStore((state) => state.recipes);
  const closeModalHandler = () => {
    // Zatvara modal
    props.setIsMealDetailShowed(false);
  };
  const deleteRecipe = () => {
    const filteredRecipes = recipes.filter(
      (recipe) => recipe.recipeId !== props.meal.recipeId
    );
    fetch(
      "https://recipe-react-app-96377-default-rtdb.firebaseio.com/recipes.json",
      {
        method: "PUT",
        body: JSON.stringify(filteredRecipes),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        window.location.href = "/";
      }
    });
  };
  return (
    <div id="modal" className="modal-overlay">
      <div className="modal-content">
        <div className="main-container">
          <div className="image-div">
            <img src={props.meal.imageUrl} />
          </div>
          <div className="main-desc">
            <div className="heading">
              <span className="title">{props.meal.name}</span>
              <span className="subtitle">{props.meal.description}</span>
              <div className="closeModal" onClick={closeModalHandler}>
                <span>Close</span>
              </div>
            </div>
            <span className="garbage-icon">
              {token && <FaTrash onClick={deleteRecipe} />}
            </span>
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
      </div>
    </div>
  );
};
export default MealModal;
