import { Link } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
  return (
    <div className="main-menu">
      <h1>Recipes App</h1>
      <Link to="/" className="layout-link">
        Home
      </Link>
      <Link to="/favorites" className="layout-link">
        Favorites
      </Link>
      <Link to="/add-recipe" className="layout-link">
        Add recipe
      </Link>
      <Link to="/login" className="layout-link">
        Account
      </Link>
    </div>
  );
};

export default Layout;
