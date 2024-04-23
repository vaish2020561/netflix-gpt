
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainConatiner from "./MainContainer";
import SecondaryConatiner from "./SecondaryContainer";




/* main container
      - Background vedio
      - vedio title 
   secondary conatiner 
       - movie list    
 */


const Browse = () => {
 
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainConatiner/>
      <SecondaryConatiner/>
    </div>
  );
};

export default Browse;
