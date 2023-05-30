import Meals from "../../components/Meals/Meals";
import "./Home.css";
const meals = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    description: "Classic Italian pasta dish with meat sauce",
    ingredients: ["spaghetti", "ground beef", "tomatoes", "onions", "garlic"],
    preparationTime: 30,
    calories: 500,
    mealPreparation:
      "Cook the spaghetti according to package instructions. In a separate pan, cook the ground beef with onions and garlic. Add tomatoes and simmer for 20 minutes. Serve the meat sauce over cooked spaghetti.",
    image:
      "https://uploads-ssl.webflow.com/63c46648a9b6a02edf77d5c4/63c87a7cfa26fda77ecdee40_bolognese-recipe-image.png",
  },
  {
    id: 2,
    name: "Caprese Salad",
    description: "Refreshing salad with tomatoes, mozzarella, and basil",
    ingredients: ["tomatoes", "mozzarella cheese", "basil", "olive oil"],
    preparationTime: 15,
    calories: 250,
    mealPreparation:
      "Slice the tomatoes and mozzarella cheese. Arrange them on a plate, alternating tomato and mozzarella slices. Sprinkle with fresh basil leaves. Drizzle with olive oil and season with salt and pepper.",
    image: "https://picsum.photos/200/300/?random",
  },
  {
    id: 3,
    name: "Vegetable Stir-Fry",
    description: "Quick and healthy stir-fried vegetables",
    ingredients: ["broccoli", "carrots", "bell peppers", "snow peas"],
    preparationTime: 20,
    calories: 200,
    mealPreparation:
      "Heat oil in a pan or wok. Add the vegetables and stir-fry for a few minutes until tender-crisp. Season with soy sauce or other desired seasonings. Serve hot.",
    image: "https://picsum.photos/200/300/?random",
  },
  {
    id: 4,
    name: "Spaghetti Bolognese",
    description: "Classic Italian pasta dish with meat sauce",
    ingredients: ["spaghetti", "ground beef", "tomatoes", "onions", "garlic"],
    preparationTime: 30,
    calories: 500,
    mealPreparation:
      "Cook the spaghetti according to package instructions. In a separate pan, cook the ground beef with onions and garlic. Add tomatoes and simmer for 20 minutes. Serve the meat sauce over cooked spaghetti.",
    image: "https://picsum.photos/200/300/?random",
  },
];

const Home = () => {
  return (
    <div className="home-page">
      <ul>
        <Meals meals={meals} />
      </ul>
    </div>
  );
};

export default Home;
