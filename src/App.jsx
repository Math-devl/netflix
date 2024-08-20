import "./App.css";
import movies from "./assets/movies.json";

import Card from "./components/Card";

function App() {
  return (
    <>
      <Card data={movies} />;
    </>
  );
}

export default App;
