import { Card } from "flowbite-react";
import { useContext } from "react";
import movie from '../assets/img/a_ma.png'
import { Badge } from "flowbite-react";
import{moviecontext} from './movie-api' 

export default function Cards({data}){
 const { favorites, toggleFavorite } = useContext(moviecontext);
 const isFav = favorites?.some(fav => fav.id === data.id);
    return(
<div className="w-full max-w-xs py-2 shadow-xl hover:scale-105 transition duration-200 ease-in-out ">
   <Card
      className=""
      imgAlt=""
      imgSrc={data.image_url || movie}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
{data.name}      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
  {data.year}      </p>
    
    <div className="flex justify-between ">
<Badge color="warning" className="">{data.type}</Badge>


<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  onClick={() => toggleFavorite(data) }  className={`w-7 ${
            isFav ? "text-red-600" : "text-white"
          }`}>
  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
</svg>

    </div>
       

    </Card>
     
    </div>

    
    
    
   )
}