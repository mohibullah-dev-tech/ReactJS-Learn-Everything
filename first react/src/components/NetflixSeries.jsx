import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <>
      {seriesData.map((curElem) => {
        return <SeriesCard key={curElem.id} series={curElem} />;
      })}
    </>
  );
};

export default NetflixSeries;
