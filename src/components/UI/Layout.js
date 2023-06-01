import { Link } from "react-router-dom";
import "./Layout.css";
import useStore from "../../store/useStore";
import { useEffect } from "react";
const Layout = () => {
  const token = useStore((state) => state.token);
  const setToken = useStore((state) => state.setToken);
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken === "null" ? null : storedToken);
  }, []);
  const authHandler = () => {
    if (token) {
      setToken(null);
      localStorage.setItem("token", null);
      window.location.href = "/login";
    }
  };
  return (
    <div className="main-menu">
      <h1>Recipes App</h1>
      <Link to="/" className="layout-link">
        Home
      </Link>
      <Link to="/favorites" className="layout-link">
        Favorites
      </Link>
      {token && (
        <Link to="/add-recipe" className="layout-link">
          Add recipe
        </Link>
      )}
      <Link to="/login" className="layout-link" onClick={authHandler}>
        {token ? "Logout" : "Account"}
      </Link>
    </div>
  );
};

export default Layout;
