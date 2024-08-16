import React, { useState } from 'react'
import StartGame from './StartGame'
import Gameplay from '../components/Gameplay';

const HomePage = () => {
    const [gameplay ,setGameplay] =useState(false);

    const toggleGameplay = () =>{
        setGameplay(prev => !prev);
    
    }
  return (
    <>
       {
        gameplay ? <Gameplay/> : <StartGame toggle ={toggleGameplay}/>
       }
        
    
    </>
  )
}

export default HomePage