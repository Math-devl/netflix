import "./App.css";
import movies from "./assets/movies.json";

import Card from "./components/Card";

function App() {
  return (
    <>
      <header>NETFLIX</header>
      <main>
        <Card obj={movies} />
      </main>
    </>
  );
}

export default App;
