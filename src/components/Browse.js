import { useEffect } from "react";
import { APP_OPTIONS } from "../utils/constants";
import Header from "./Header";

const Browse = () => {
  const getNowplayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      APP_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);
  };

  useEffect(() => {
     getNowplayingMovies();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
