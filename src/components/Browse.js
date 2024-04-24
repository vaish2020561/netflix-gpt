import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainConatiner from "./MainContainer";
import SecondaryConatiner from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useShows from "../hooks/useShows";
import usePopularShows from "../hooks/usePopularShows";
import useTopRatedShows from "../hooks/useTopRatedShows";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcommingMovies();
  useTopRatedMovies();
  useTrendingMovies();
  useShows();
  usePopularShows();
  useTopRatedShows();
  return (
    <div>
      <Header />
      <MainConatiner />
      <SecondaryConatiner />
    </div>
  );
};

export default Browse;
