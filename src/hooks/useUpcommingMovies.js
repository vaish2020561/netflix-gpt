import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcommingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";


const useUpcommingMovies = () => {
    const dispatch = useDispatch();

    const getUpcommingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
            API_OPTIONS

        )
        const json = await data.json();
        console.log(json.results);
        dispatch(addUpcommingMovies(json.results));
    }

    useEffect(() =>{
        getUpcommingMovies();
    },[]);
} 

export default useUpcommingMovies;