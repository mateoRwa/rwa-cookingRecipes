import Meals from "../../components/Meals/Meals";
import "./Home.css";
import useStore from "../../store/useStore";

const Home = ({ isLoading }) => {
  const recipes = useStore((state) => state.recipes);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="home-page">
      <ul>
        {recipes.length > 0 ? (
          <Meals meals={recipes} />
        ) : (
          <h3 style={{ color: "red" }}>Still no recipes? Add some.</h3>
        )}
      </ul>
    </div>
  );
};

export default Home;
