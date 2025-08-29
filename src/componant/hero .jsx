import hero from '../assets/img/alone-.jpg'
import  hero2  from '../assets/img/14.jpg'
import Navbar from './navbar'
import Search from './inputsearch'


export default function Hero(){

///acordian
    return(
<>
 <Navbar/>
   <div  className="pb-8 h-[40vh] lg:h-[50vh] bg-cover bg-center  flex flex-col justify-center  " 
        style={{  backgroundImage: `linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0.35) 49%, rgba(0, 0, 26, 1) 100%), url(${hero2})` }}>
        
   
        <h2 className='text-white text-center pb-5 text-shadow-lg/40 text-2xl lg:font-bold  lg:text-4xl '>Millions of movies, TV shows to discover. <br /> Explore <span className='text-yellow-500 '>now</span> .</h2>
            <Search/> 
     
        
      </div>




</>
    )
}