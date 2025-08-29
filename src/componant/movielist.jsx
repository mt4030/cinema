import Cards from "./card"
import seedmovies from './seeds'
import {useContext} from 'react'
import{moviecontext} from './movie-api' 
export default function Movielist({data}){
  const {  setShowFavorites } = useContext(moviecontext);

    return(
        <div >
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
       
    <div className="my-13 w-full grid gap-6 justify-items-center
                grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

    {data.map((movie,index)=>{
        return   <Cards key={movie.id|| index} data={movie}/>
    }
  
    )}
  {seedmovies.map((movie,index)=>{
        return   <Cards key={movie.id|| index} data={movie}/>
    }
  
    )}
    
    </div> </div>
    )
}