const SeriesCard = (props) => {
  const { series, watchButton } = props;
  const ratingValue = Number(series.rating);
  const ratingClass =
    Number.isNaN(ratingValue) || ratingValue < 8.5 ? "rating-good" : "rating-top";

  return (
    <article className="series-card">
      <div className="poster-wrap">
        <img className="poster" src={series.img_url} alt={series.name} />
      </div>

      <div className="card-body">
        <h2>
          <span>Name:</span> {series.name}
        </h2>

        <p className="rating-row">
          <span>Rating:</span>
          <strong className={`rating-badge ${ratingClass}`}>{series.rating}</strong>
        </p>

        <p>
          <span>Summary:</span> {series.description}
        </p>
        <p>
          <span>Genre:</span> {series.genre.join(", ")}
        </p>
        <p>
          <span>Cast:</span> {series.cast.join(", ")}
        </p>

        <div className="card-actions">{watchButton}</div>
      </div>
    </article>
  );
};

export default SeriesCard;
