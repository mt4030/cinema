import { useContext } from "react";
import { moviecontext } from "./movie-api";
import Cards from "./card";



export default function FavoriteList() {
  const {  setShowFavorites } = useContext(moviecontext);
  const { favorites } = useContext(moviecontext);



  return (

    
    <div className="my-13 w-full mx-auto">
<div className="flex gap-2 justify-center my-4">
    <button
          onClick={() => setShowFavorites(false)}
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          All
        </button>
        <button
          onClick={() => setShowFavorites(true)}
          className="px-4 py-2 rounded bg-yellow-500 text-white"
        >
          Favorites
        </button>
</div>

{favorites.length===0?<p className="text-amber-50 text-center">No favorite movie added</p>:favorites.map((movie, index) => (
        <Cards key={movie.id || index} data={movie} />
      ))}

      
    </div>
  );
}
