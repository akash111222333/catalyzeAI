import React from 'react'
import cat from './../images/cat.png'
export const Navbar = () => {
  return (
    <div>
         <div className='navbar'>
        <div className='left'>
            <div className='c'>
            <img src={cat}alt="cat"/>
            </div>
            <div className='f'>
           <ion-icon name="card-sharp"></ion-icon> Financial Services
            </div>
            <div className='r'>
            <ion-icon name="home-sharp"></ion-icon>Real Estate
            </div>
         </div>
            <div className='right'>
            <button className='s'>
                Sign up
            </button>
            <button className='l'>
                Log in<ion-icon name="log-in-sharp"></ion-icon>
            </button>
            </div>
        </div>  
    </div>
  );
}
