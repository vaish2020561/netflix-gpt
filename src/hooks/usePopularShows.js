import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularShows} from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const usePopularShows = () => {
  const dispatch = useDispatch();

  const getPopularShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularShows(json.results));
  };

  useEffect(() => {
    getPopularShows();
  }, []);
};

export default usePopularShows;
