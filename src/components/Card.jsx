import Title from "./Title";
import Carousel from "./Carousel";
import movies from "../assets/movies.json";

const Card = (props) => {
  //console.log(props.data);==> renvoie un tableau de 6 objets
  {
    props.data.map((elem, index) => {
      //console.log(elem);
      //console.log(elem.category);
      return (
        <div key={index}>
          <Title text={elem.category} />

          {elem.images.map((elemUrl, indexImg) => {
            //console.log(elemUrl);
            return <Carousel url={elemUrl} />;
          })}
        </div>
      );
    });
  }
};
export default Card;
