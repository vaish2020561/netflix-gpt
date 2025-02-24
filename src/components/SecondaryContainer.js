import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryConatiner = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black ">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.trendingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcommingMovies}
          />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
          <MovieList title={"TV Shows"} movies={movies.shows} />
          <MovieList title={"Popular Shows"} movies={movies.popularshows} />
          <MovieList title={"Top Rated Shows"} movies={movies.topRatedShows} />
        </div>
      </div>
    )
  );
};

export default SecondaryConatiner;
