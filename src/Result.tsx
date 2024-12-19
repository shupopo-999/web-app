import React from 'react'
import Finish from './images/Finish.png'

export const Result = () => {
const finishImagePath = process.env.PUBLIC_URL + '/Finish.png';
  return (
    <img src={finishImagePath } alt="Finish"/>
  )
}
