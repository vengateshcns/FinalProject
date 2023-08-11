import React from 'react'
import {Button, TextField, Stack} from '@mui/material'

export default function Login() {
  return (
    <Stack>
    
        <div>
        <TextField label="Email" type="text"/>
        </div>
        <div>
        <TextField label="Password" type="passsword"/>
        </div>
        <div>
            <Button>Submit</Button>
        </div>
        
    </Stack>
  )
}
