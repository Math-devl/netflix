import "./App.css";
import movies from "./assets/movies.json";

function App() {
  return (
    <>
      {movies.map((elem, index) => {
        return (
          <div key={index}>
            <h1>{elem.category}</h1>
            {elem.images.map((elemUrl, indexImg) => {
              return <img key={indexImg} src={elemUrl} alt="" />;
            })}
          </div>
        );
      })}
    </>
  );
}

export default App;
