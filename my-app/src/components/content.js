import React from 'react'
import catt from './../images/catt.svg'
export const Content = () => {
  return (
    <div>
          
          <div className='content'>
            <div className='top'>
              <div className='one'>
                <div className='onee'>
                <input type='text' placeholder='Name'/>
                </div>
                <div className='oneee'>
                <input type='text' placeholder='Email'/>
                </div>
                <div className='oneeee'>
                  <div className='rbfs'>
                    <input type='radio' name='a' />Financial Services
                  </div>
                  <div className='rbrs'>
                    <input type='radio' name='a' />Real Estate
                  </div>
                </div>
              </div>
            <div className='twoo'>
              <textarea placeholder='Message..'></textarea>
             <button className='sub'>Submit</button>
              </div>
              <div className='cu'>
                <h1 className='cuu'>Contact us</h1>
                <p>Our Predictive Analytics utilize a <br></br>combination of evenet-driven data,<br></br>historical data.</p>
              </div>
            </div>
            <div className='bottom'>
            <div className='contents'>
                <div className='H'>
              <img src={catt}alt="catt"/>
              <div className='I'>
              info@catalyzeai.com<br></br>(941) 867-1761
              </div>
              <div className='J'>
              All rights reserved. © 2022 Catalyze AI
              </div>
                </div>
            </div>
            <div className='contentss'>
              <p className='K'>
                Financial Services
              </p>
              <p className='L'>Pricing </p>
              <p className='Ll'>Blog</p>
              <p className='M'>Donot sell my data</p>
            </div>
            <div className='N'>
            <p className='O'>
                Real Estate
              </p>
              <p className='P'>Pricing </p>
              <p className='Pp'>Blog</p>
            </div>
            <div className='Q'>
            <p className='R'>LinkedIn</p>
            <p className='S'>Terms & Conditions</p>
            </div>
            <div className='T'>
            Privacy Policy
            </div>
            <div className='U'>
            <ion-icon name="arrow-up-sharp"></ion-icon>
            </div>
            </div>
        </div>
    </div>
  );
 }   