import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <main className="series-page">
      <section className="series-section" aria-labelledby="series-heading">
        <div className="section-header">
          <p className="section-kicker">Streaming picks</p>
          <h1 id="series-heading">List of Best Netflix Series</h1>
        </div>

        <div className="series-grid">
          {seriesData.map((curElem) => {
            return (
              <SeriesCard
                key={curElem.id}
                series={curElem}
                watchButton={
                  <a
                    className="watch-link"
                    href={curElem.watch_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Watch Now
                  </a>
                }
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default NetflixSeries;
