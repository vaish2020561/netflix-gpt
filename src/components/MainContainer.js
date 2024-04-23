import { useSelector } from "react-redux";
import VedioTitle from "./VedioTitle";
import VedioBackground from "./VedioBackground";

const MainConatiner = () => {
  // calling data from appStore
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //early return
  if (!movies) return;

  const mainMovie = movies[0];
  console.log(mainMovie);

  const {original_title, overview, id} = mainMovie;

  return (
    <div>
      <VedioTitle title={original_title} overview={overview} />
      <VedioBackground movieId={id}/>
    </div>
  );
};

export default MainConatiner;
