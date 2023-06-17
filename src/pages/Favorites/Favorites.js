import { useEffect, useState } from "react";
import MealItem from "../../components/MealItem/MealItem";
import "./Favorites.css";
import useStore from "../../store/useStore";
const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const recipes = useStore((state) => state.recipes);
  useEffect(() => {
    // dodat cemo favorite
    try {
      const storedFavorites = localStorage.getItem("favorites");
      setFavorites(storedFavorites ? JSON.parse(storedFavorites) : []);
    } catch (error) {}
  }, []);

  let filteredMeals = [];
  for (let index = 0; index < favorites.length; index++) {
    const elem = recipes.find((meal) => meal.id === favorites[index]);
    if (elem) {
      filteredMeals.push(elem);
    }
  }
  const favoriteHandler = (id) => {
    // Dodavanje u favorite na local storage
    let temporaryArray = [...favorites];
    const index = temporaryArray.findIndex((item) => item === id);
    if (index > -1) {
      temporaryArray = temporaryArray.filter((item) => item !== id);
    } else {
      temporaryArray.push(id);
    }
    setFavorites(temporaryArray);
    localStorage.setItem("favorites", JSON.stringify(temporaryArray));
  };
  return filteredMeals.length > 0 ? (
    <div className="meals">
      {filteredMeals?.map((meal) => (
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
            isFavorite={favorites?.includes(meal.id)}
          />
        </div>
        // );
      ))}
    </div>
  ) : (
    <div>
      <h2 className="empty-favorites">Your favorites list is empty!</h2>
    </div>
  );
};

export default Favorites;
