import AFooter from './footer'
import Movielist from './movielist'
import Hero from './hero '
import FavoriteList from './FavoriteList'
import { useEffect, useState ,createContext} from 'react'
const apikey='6mNVDieWCHeGbQzE1O0RWYJxgIrfkyCkzxCyb9m7'
export const moviecontext=createContext()
export default function Movie(){

///global query

const [query, setQuery] = useState('');
const [data,setdata]=useState([])
const [favorites, setFavorites] = useState([]);
const [showFavorites, setShowFavorites] = useState(false)




  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const exists = prev.find(fav => fav.id === item.id);
      if (exists) return prev.filter(fav => fav.id !== item.id);
      return [...prev, item];
    });
  };


useEffect(()=>{
    
        if (!query) return;
const fetchMovie= async () =>{
    try{
    const response=await fetch(  `https://api.watchmode.com/v1/autocomplete-search/?apiKey=${apikey}&search_value=${encodeURIComponent(query)}&search_type=3`
)
    const json= await response.json()
      console.log('Full API response:', json);
   const newMovie = json.results[0];
  if(newMovie){
    setdata((pre)=>{
        return [newMovie,...pre].slice(0, 10)
    })
 
  }
}catch(e){
console.log(e);
    }
 
}
 fetchMovie()   
   
},[query])
  

  



    return(
        <>
        <moviecontext.Provider value={{ data, setdata, query, setQuery,favorites, setFavorites ,toggleFavorite,showFavorites, setShowFavorites }}>
        <div className='container mx-auto'>
             <Hero />
             <div className=' justify-items-center'>

   
  {showFavorites ? <FavoriteList /> : <Movielist data={data} setShowFavorites={setShowFavorites} />}

          
         </div>
         </div>
      
         <AFooter/> 
         </moviecontext.Provider>
        </>
    )
}