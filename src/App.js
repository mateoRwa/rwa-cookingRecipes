import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import RecipeForm from "./pages/RecipeForm/RecipeForm";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Layout from "./components/UI/Layout";
import { useEffect, useState } from "react";
import useStore from "./store/useStore";
function App() {
  const [loading, setLoading] = useState(false);
  const setRecipes = useStore((state) => state.setRecipes);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://recipe-react-app-96377-default-rtdb.firebaseio.com/recipes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        let recipeTempArr = [];
        for (const key in data) {
          recipeTempArr.push({ ...data[key], recipeId: key });
        }
        setLoading(false);
        setRecipes(recipeTempArr);
      });
  }, []);
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" exact element={<Home isLoading={loading} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-recipe" element={<RecipeForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
