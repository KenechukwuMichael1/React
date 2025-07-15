import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import '../App.css'
import {Button} from '../components/button'

function Home() {
  
  return <>
      <Button buttonTitle = 'Subscribe' />
      <Button buttonTitle = 'Log In' />
      <Button buttonTitle = 'Sign Up' />
      <p>This is our first react lesson</p>
      
    </>
}

export default Home