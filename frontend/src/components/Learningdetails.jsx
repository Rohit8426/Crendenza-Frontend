import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import image1 from '../assets/carouselimages/image.jpg';
import image2 from '../assets/carouselimages/image3.jpg';
import image3 from '../assets/carouselimages/image4.jpg';
import "./Learningdetail.css"

function Learningdetails() {
    return (
        <>
        <div className='learningdetail-body'>

       <div className='first-container'>

      <img src={image1} alt="" />


      <div className='detail-container'>
      <h2>Learning Science </h2>
      <p> Our approach involves delving into every science concept, meticulously crafting audio visual presentations that bring the subject matter to life. We are dedicated to transforming complex ideas into engaging visual experiences, ensuring that learners grasp the essence of each concept effortlessly. </p>

      <p className='readmore'>  Read more  <a href="">   <IoArrowForwardCircleOutline />    </a> </p>


      </div>

       </div>
  
       {/* first slide */}

       <hr /> 

       <div className='first-container'>




<div className='detail-container second-slide' >
<h2>Vedic math </h2>
<p> Our approach involves delving into every science concept, meticulously crafting audio visual presentations that bring the subject matter to life. We are dedicated to transforming complex ideas into engaging visual experiences, ensuring that learners grasp the essence of each concept effortlessly. </p>

<p className='readmore'>  Read more  <a href="">   <IoArrowForwardCircleOutline />    </a> </p>


</div>
<img src={image2} alt=""  className='second-image'/>
 </div>
 
  <hr />
  {/* seconds slide */}


 <div className='first-container'>

<img src={image3} alt="" />


<div className='detail-container'>
<h2>Bespoke </h2>
<p> Tailored Learning Solutions - Your Vision, Our Creation. where your unique educational vision takes center stage. At [Your Company Name], we understand that one size doesn't fit all in the world of education. That's why we specialize in crafting custom learning materials that align perfectly with your requirements. </p>

<p className='readmore'>  Read more  <a href="">   <IoArrowForwardCircleOutline />    </a> </p>


</div>

 </div>
 <hr />

 {/* Third slide */}
      





        </div>



        </>

    )
}

export default Learningdetails