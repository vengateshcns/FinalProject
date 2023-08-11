import React, {useState}from 'react'
import Signup from './Signup'
import { Button } from '@mui/material'


export default function Signupbutton() {
  const[signup, setSignup] = useState(false);

  const handleSignup = () => {
    setSignup(signup?false:true)
  }

  return (
    <div>
      <div>
      <Button variant="contained" size="large" onClick={handleSignup}>First time? Please Signup</Button>
      {signup && <Signup/>}
      </div>   
    </div>
  )
}
