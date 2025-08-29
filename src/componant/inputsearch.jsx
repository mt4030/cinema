import { useState ,useContext} from "react"
import{moviecontext} from './movie-api' 
export default function Search(){
    //from global query
 const { setQuery, data } = useContext(moviecontext)
 const [inputValue, setInputValue] = useState('');
const handelchange=(e)=>{
      setInputValue(e.target.value)
}
const handelsubmit=(e)=>{
    e.preventDefault()
   setQuery(inputValue)
   setInputValue('')
  
      }
    return(
       <form onSubmit={handelsubmit}className="  text-5xl mx-7 ">
     
    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input onChange={handelchange} value={inputValue} type="search" id="search" className="block w-full p-5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for a movie ,tv seres" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Search</button>
    </div>
</form>

    )
}