import React, { useState } from 'react'
import './css/RoleDice.css'
const RoleDice = ({currentDice,generateRandomNumber}) => {



  return (
    <div className='roledice_container'>
        <div onClick={generateRandomNumber}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt="img not found"/>
        
        </div>
        <p>Click On Dice To Roll</p>

    </div>
  )
}

export default RoleDice