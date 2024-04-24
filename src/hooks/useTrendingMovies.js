import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";


const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const getTrendingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/trending/all/day?language=en-US",
            API_OPTIONS

        )
        const json = await data.json();
        console.log(json.results);
        dispatch(addTrendingMovies(json.results));
    }

    useEffect(() =>{
        getTrendingMovies();
    },[]);
} 

export default useTrendingMovies;