import React from "react";
import { useState } from "react";
import { ingredientsArr } from "../../constants/ingredients";
import "./RecipeForm.css";
function NewRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeImageUrl, setRecipeImageUrl] = useState("");
  const [recipePreparation, setRecipePreparation] = useState("");
  const [calories, setCalories] = useState(0);
  const [preparationMinutes, setPreparationMinutes] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const [inputError, setInputError] = useState("");
  const [ingredientError, setIngredientError] = useState("");
  const submitRecipeHandler = () => {
    if (
      recipeName.length === 0 ||
      recipeDescription.length === 0 ||
      recipeImageUrl.length === 0 ||
      recipePreparation.length === 0 ||
      !calories ||
      calories <= 0 ||
      !preparationMinutes ||
      preparationMinutes <= 0
    ) {
      setInputError("All fields are required! Numbers cannot be less than 1!");
    } else {
      setInputError("");
    }
    if (ingredients.length < 3) {
      setIngredientError("Minimum 3 ingredients are required!");
    } else {
      setIngredientError("");
    }
  };
  const ingredientHandler = (ingredient) => {
    let tempIngredient = [...ingredients];
    const index = tempIngredient.findIndex((val) => val === ingredient);
    if (index > -1) {
      tempIngredient = tempIngredient.filter((val) => val !== ingredient);
    } else {
      tempIngredient.push(ingredient);
    }
    setIngredients(tempIngredient);
  };

  return (
    <div className="recipe-form-container">
      <div className="recipe-name">
        <label htmlFor="name">Recipe name *</label>
        <input
          id="name"
          type="text"
          onChange={(e) => setRecipeName(e.target.value)}
        />
      </div>
      <div className="recipe-description">
        <label htmlFor="description">Recipe description *</label>
        <input
          id="description"
          type="text"
          onChange={(e) => setRecipeDescription(e.target.value)}
        />
      </div>
      <div className="recipe-image">
        <label htmlFor="image">Recipe image url *</label>
        <input
          id="image"
          type="text"
          onChange={(e) => setRecipeImageUrl(e.target.value)}
        />
      </div>
      <div className="recipe-calories">
        <label htmlFor="calories">Recipe calories *</label>
        <input
          id="calories"
          type="number"
          onChange={(e) => setCalories(e.target.value)}
        />
      </div>
      <div className="recipe-minutes">
        <label htmlFor="minutes">Recipe preparation time *</label>
        <input
          id="minutes"
          type="number"
          onChange={(e) => setPreparationMinutes(e.target.value)}
        />
      </div>
      <div className="recipe-preparation">
        <label htmlFor="preparation">Recipe preparation *</label>
        <textarea
          id="preparation"
          onChange={(e) => setRecipePreparation(e.target.value)}
        />
      </div>
      {inputError && <h4 className="error-msg">{inputError}</h4>}

      <div className="ingredientss">
        {ingredientsArr.map((ingredient) => {
          return (
            <span
              key={Math.random()}
              onClick={() => ingredientHandler(ingredient)}
              className={`each-ingredient ${
                ingredients?.includes(ingredient) ? "selected" : ""
              }`}
            >
              {ingredient}
            </span>
          );
        })}
      </div>
      {ingredientError && <h4 className="error-msg">{ingredientError}</h4>}
      <button onClick={submitRecipeHandler}>Submit</button>
    </div>
  );
}

export default NewRecipe;
