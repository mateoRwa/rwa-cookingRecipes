import { Link } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
  return (
    <div className="main-menu">
      <h1>Recipes App</h1>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/add-recipe">Add recipe</Link>
      <Link to="/login">Account</Link>
    </div>
  );
};

export default Layout;
