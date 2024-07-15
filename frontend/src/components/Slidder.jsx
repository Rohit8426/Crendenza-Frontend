import React from 'react'
import "./Slidder.css"
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import protistafamily from "../assets/SLidder-image/Protista family.jpg"
import Atomicstructure from "../assets/SLidder-image/atomic structure.jpg"
import earthcore from "../assets/SLidder-image/earth core.jpg"
import pollination from "../assets/SLidder-image/Pollination.jpg"

function Slidder() {
  return (

    <>
    
    

      
    <div className='Slidder-first-portion'>
        <button className='left-right-icon'> <IoArrowBackCircleOutline />  </button>
        <div className='middle-heading'>
            <div className='tag-container'>
            <p className='tags'>Library </p>  
            </div>
     
      <h3 className='slidder-heading'> Our Sample Catalogue</h3>
      <p className='slidder-content'> Where Learning Unfolds like a story !</p>


        </div>
        <button className='left-right-icon'> <IoArrowForwardCircleOutline /> </button>

    </div>



    <div className="container">
      <div className="slider">
        <div className="item red">
          <img src={protistafamily} alt="protistafamily" />
          <div className="content">
          <p>PROTISTA FAMILY <br /><a href="#">Learn More <IoArrowForwardCircleOutline /> </a> </p>
          
          </div>
        </div>
        <div className="item ">
          <img src={Atomicstructure} alt="Atomicstructure" />
          <div className="content">
          <p> ATOMIC STRUCTURE <br /><a href="#">Learn More <IoArrowForwardCircleOutline /> </a> </p>
          </div>
        </div>
        <div className="item ">
          <img src={earthcore} alt="earthcore" />
          <div className="content">
            <p>EARTH CORE <br /><a href="#">Learn More <IoArrowForwardCircleOutline /> </a> </p>
            
          </div>
        </div>
        <div className="item ">
          <img src={pollination} alt="pollination" />
          <div className="content">
          <p>POLLINATION <br /><a href="#">Learn More  <IoArrowForwardCircleOutline />  </a> </p>
          </div>
        </div>
      
      </div>
    </div>


    </>


  
   


  )
}

export default Slidder