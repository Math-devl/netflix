{
  movies.map((elem, index) => {
    return (
      <div key={index}>
        <h2>{elem.category}</h2>

        {elem.images.map((elemUrl, indexImg) => {
          return <img key={indexImg} src={elemUrl} alt="" />;
        })}
      </div>
    );
  });
}
