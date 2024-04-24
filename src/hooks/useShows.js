import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addShows } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";


const useShows = () => {
    const dispatch = useDispatch();

    const getShows = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
            API_OPTIONS

        )
        const json = await data.json();
        console.log(json.results);
        dispatch(addShows(json.results));
    }

    useEffect(() =>{
        getShows();
    },[]);
} 

export default useShows;