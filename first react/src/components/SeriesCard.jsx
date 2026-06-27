const SeriesCard = (props) => {
  const { series, watchButton } = props;

  return (
    <div>
      <div>
        <img
          src={series.img_url}
          alt={series.name}
          width="40%"
          height="40%"
        />
      </div>

      <h2>Name: {series.name}</h2>
      <h3>Rating: {series.rating}</h3>
      <p>Summary: {series.description}</p>
      <p>Genre: {series.genre.join(", ")}</p>
      <p>Cast: {series.cast.join(", ")}</p>

      {watchButton}
    </div>
  );
};

export default SeriesCard;
