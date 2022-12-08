import React,{useEffect, useState} from 'react'
import{API_KEY,imageUrl} from './constants'
import axios from './Axios'
import "./Banner.css"



function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
  axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    
    setMovie(response.data.results[16])
    

  })
  
 
}, [])

  return (
    <div style={{backgroundImage: `url(${movie ? imageUrl+ movie.backdrop_path : ""})`}}
     className='banner'>
        <div className='contant'>
            <h1 className='tiltle'>{movie ? movie.title:"" }</h1>
         <div className='banner_buttons'>
            <button className='buttons'>Play</button>
            <button className='buttons'>My List</button>
         </div>
         <h1 className='discription' >{movie ? movie.overview: ""}</h1>
        </div>
        <div className="fade_bottom"></div>


        

    </div>
  )
}

export default Banner