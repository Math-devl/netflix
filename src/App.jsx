import "./App.css";
import movies from "./assets/movies.json";

function App() {
  //console.log(movies[0]); // {category: 'Reprendre avec', images: Array(27)}
  return (
    <>
      {movies.map((elem, index) => {
        //1er tour de .map pour récupérer la 1ère catégorie
        console.log(elem.category);
        <h1 key={index}>{elem.category}</h1>;
        //2eme tour de .map pour récupérer les urls de chaque catégory
        {
          elem.images.map((elemUrl, indexImg) => {
            console.log("lien de chaque image ===>", elemUrl);
            <img key={indexImg} src={elemUrl} alt="" />;
          });
        }
      })}
    </>
  );
}

export default App;
