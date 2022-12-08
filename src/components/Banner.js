import React,{useEffect, useState} from 'react'
import{API_KEY} from './constants'
import "./Banner.css"
import axios from 'axios'


function Banner() {
  const [Movie, setMovie] = useState()
  useEffect(() => {
  axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results[0])
    setMovie(response.data.results[0])

  })
  
  
 
}, [])

  return (
    <div className='banner'>
        <div className='contant'>
            <h1 className='tiltle'>{Movie.title}</h1>
         <div className='banner_buttons'>
            <button className='buttons'>Play</button>
            <button className='buttons'>My List</button>
         </div>
         <h1 className='discription' > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h1>
        </div>
        <div className="fade_bottom"></div>


        

    </div>
  )
}

export default Banner