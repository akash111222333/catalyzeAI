import React from 'react'
import one from './../images/one.svg'
import three from './../images/three.svg'
import four from './../images/four.svg'
import five from './../images/five.svg'
import six from './../images/six.svg'
import seven from './../images/seven.svg'
export const Body = () => {
  return (
    <div>
         <div className='submain'>
          <div className='one'>
            <div className='images'>
              <img className="mihali"src={one}alt="on"/>
              <img className="jordan"src={three}alt="on"/>
              <img className="ciera"src={four}alt="on"/>
              <img className="n"src={five}alt="on"/>
              <img className="m"src={six}alt="on"/>
              <img className="z"src={seven}alt="on"/>
            </div>
            <div className='texts'>
              <div className='A'>
                <h1 className='mm'>400mm+</h1>
                Data points used <br></br>for analytics
               
              </div>
              <div className='B'>
              <h1 className='nn'>$3Tn</h1>
               Investable assets <br></br>predicted per year
              </div>
              <div className='C'>
                 
                <h1 className='oo'>$77Bn</h1>
                predicted home <br></br>value transacted<br></br>per year
              </div>
          </div>
          </div>
          <div className='two'>
          <div className='textss'>
          <h1 className='G'>Grow your business<br></br> with Event-Driven<br></br> Predictive Analytics</h1>
          <p>Catalyze AI is a predictive analytics business development<br></br> platform used by Financial Services and Real Estate<br></br> profrssionals to identify their target market and grow their<br></br> business rapidly.</p>
          </div>
          <div className='photos'>
          <div className='FS'>
            <p className='bo'>boost your</p>
            <h1 className='fi'>Financial Services</h1>
            <p className='le'>Learn more  <ion-icon name="arrow-forward-sharp"></ion-icon> </p>
          </div>
         <div className='RS'>
            <p className='boo'>boost your</p>
            <h1 className='re'>Real Estate</h1>
            <p className='lee'>Learn more  <ion-icon name="arrow-forward-sharp"></ion-icon> </p>
          </div>
          </div>
          </div>
        </div>
    </div>
  );
}
