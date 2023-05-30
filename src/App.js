import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import RecipeForm from "./pages/RecipeForm/RecipeForm";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Layout from "./components/UI/Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-recipe" element={<RecipeForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
