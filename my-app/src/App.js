import React from 'react'
import { Navbar } from './components/Navbar'
import { Body } from './components/Body'
import { Content } from './components/content'
export const App = () => {
  return (
    <div className='main'>
       <Navbar/>
       <Body/>
      <Content/>
    </div>
  );
}



