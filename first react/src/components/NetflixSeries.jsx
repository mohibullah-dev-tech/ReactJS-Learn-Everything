import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <>
      {seriesData.map((curElem) => {
        return (
          <SeriesCard
            key={curElem.id}
            series={curElem}
            watchButton={
              <a href={curElem.watch_url} target="_blank" rel="noreferrer">
                <button>Watch Now</button>
              </a>
            }
          />
        );
      })}
    </>
  );
};

export default NetflixSeries;
