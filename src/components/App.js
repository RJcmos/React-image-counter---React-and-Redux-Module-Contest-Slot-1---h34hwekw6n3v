import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {
  const [size,setSize]=userState(300)
  const handleClick=()=>{
    setSize(size+2)
  }
  
  return (
    <div id="main">
      <img src={star}  
         height={'${size}px'}
         width={'${size}px'}
      />
    </div>
  )
}


export default App;
