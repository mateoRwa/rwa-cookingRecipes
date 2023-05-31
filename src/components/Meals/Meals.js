import { useEffect, useState } from "react";
import MealItem from "../MealItem/MealItem";
import "./Meals.css";
const Meals = ({ meals }) => {
  const [favoriteMeals, setFavoriteMeals] = useState([]);
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    setFavoriteMeals(storedFavorites ? JSON.parse(storedFavorites) : []);
  }, []);
  const favoriteHandler = (id) => {
    // Dodavanje u favorite na local storage
    let temporaryArray = [...favoriteMeals];
    const index = temporaryArray.findIndex((item) => item === id);
    if (index > -1) {
      temporaryArray = temporaryArray.filter((item) => item !== id);
    } else {
      temporaryArray.push(id);
    }
    setFavoriteMeals(temporaryArray);
    localStorage.setItem("favorites", JSON.stringify(temporaryArray));
  };
  return (
    <div className="meals">
      {meals?.map((meal) => (
        // return (
        <div key={meal.id}>
          <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            ingredients={meal.ingredients}
            preparationTime={meal.preparationTime}
            calories={meal.calories}
            mealPreparation={meal.mealPreparation}
            imageUrl={meal.image}
            favoriteHandler={favoriteHandler}
            isFavorite={favoriteMeals?.includes(meal.id)}
          />
        </div>
        // );
      ))}
    </div>
  );
};

export default Meals;
