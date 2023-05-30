import MealItem from "../MealItem/MealItem";
import "./Meals.css";
const Meals = ({ meals }) => {
  return (
    <div className="meals">
      {meals?.map((meal) => {
        return (
          <div>
            <MealItem
              key={meal.id}
              name={meal.name}
              description={meal.description}
              ingredients={meal.ingredients}
              preparationTime={meal.preparationTime}
              calories={meal.calories}
              mealPreparation={meal.mealPreparation}
              imageUrl={meal.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Meals;
