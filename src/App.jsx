import "./App.css";
import movies from "./assets/movies.json";

function App() {
  //console.log(movies[0]); // {category: 'Reprendre avec', images: Array(27)}
  const moviesArr = movies.map((elem, index) => {
    // console.log(elem);
    // console.log(elem.category);
    return <h1 key={index}>{elem.category}</h1>;
  });
  return <>{moviesArr}</>;
}

export default App;
