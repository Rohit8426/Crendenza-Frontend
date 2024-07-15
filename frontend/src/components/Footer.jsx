import React from 'react'
import "./footer.css"
import footerlogo from "../assets/Logo/logo.png"

function Footer() {
    return (

        <>
            <div className='Footer-heading'>

                <h2> Connect with us to unveil a new <br /> world of learning. </h2>
                <div className='footer-email-box'>

                    <input type="email" placeholder='enter your email' />
                    <button>Let's Talk</button>
                </div>

            </div>



            <div className='footer'>
                <div className='footer-logo'>
                    <img src={footerlogo} alt="" />
                </div>
                <div className='footer-nav'>
                    <ul>
                        <li> <a href="">   Home   </a></li>
                        <li>   <a href="">     About us   </a>                     </li>
                        <li>    <a href="">          Learning Science </a>             </li>
                        <li>   <a href="">  Learning vedic Maths  </a>                     </li>
                        <li>   <a href="">Learning Bespoke     </a>                 </li>
                    </ul>
                </div >
                <hr className='footer-horizontal' />
                <div className='copyright-contain'>
                    <p>2023@Copyright by The Credenza | Developed by <a href=""> ValueThoughtz</a></p>

                    <ul>
                        <li>   <a href="" className='c-a'> Privacy Policy   </a>              </li>
                        <li>   <a href="" className='c-a'>  Terms   </a>              </li>
                        <li>   <a href="" className='c-a'>   Cookies      </a>      </li>
                    </ul>


                </div>



            </div>



        </>
    )
}

export default Footer