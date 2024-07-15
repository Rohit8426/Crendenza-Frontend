import React from 'react'
import "./Credenza.css"

function Credenza() {
    return (
      
       <div className='credenza-body'>    
        <div className='credenza-container' >


        <h2 className='credenza-heading'>The future of  learning with <span>Credenza ! </span></h2>
          
            <h6 className='credenza-subheading'>
                Our visual Approach fosters critical thinking, creativity, <br /> <span>and a true passion of learning.  </span>
            </h6>
            <div className='email-box'>
            <input type="email" placeholder='Enter your email' />
            <button>Let's Talk</button>

            </div>
            <p className='Privacy'>
                we can about your data in our  <a href=""> Privacy Policy </a>
            </p>

        </div>
        </div>

    
    )
}

export default Credenza