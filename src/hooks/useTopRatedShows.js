import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedShows } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";


const useTopRatedShows = () => {
    const dispatch = useDispatch();

    const getTopRatedShows = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
            API_OPTIONS

        )
        const json = await data.json();
        console.log(json.results);
        dispatch(addTopRatedShows(json.results));
    }

    useEffect(() =>{
        getTopRatedShows();
    },[]);
} 

export default useTopRatedShows;