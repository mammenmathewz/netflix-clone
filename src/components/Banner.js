import React,{useEffect} from 'react'
import "./Banner.css"
import Axios from './Axios'


function Banner() {useEffect(() => {
 
}, [])

  return (
    <div className='banner'>
        <div className='contant'>
            <h1 className='tiltle'>Movie Name</h1>
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