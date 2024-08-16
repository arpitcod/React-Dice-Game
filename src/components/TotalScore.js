import React from 'react'
import './css/TotalScore.css'
const TotalScore = ({score}) => {
  return (
    <div className='score_container'>
        <h1>{score}</h1>
        <p>Total TotalScore</p>
    </div>
  )
}

export default TotalScore