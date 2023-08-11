import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import {TextField} from "@mui/material";


export default function Signup() {
    const [data, setData] = useState({
        Name : "",
        Email: "",
        Password:"",
        Phone:parseInt("")
    })
    const [error, setError] = useState({})

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setData({...data,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(data);
        if (Object.keys(validationErrors).length > 0) {
          setError(validationErrors);
        } else {
          setError({});
          localStorage.setItem('user', JSON.stringify(data));
        }
      };

      

    const validateForm = () =>{

        let error = {};

        if(!data.Name.trim()){
            error.Name = "The name is required"
        }

        if(!data.Email){
            error.Email = "The email is required"
        } else if(!/\S+@\S+\.\S+/.test(data.Email)){
            error.Email = "Invalid email format" 
        }

        if(!data.Phone){
            error.Phone = "Phone Number Required"
        } else if(data.Phone.length<10 || data.Phone.length>10){
            error.Phone = "Invalid Phone Number." 
        }
        
        if(!data.Password){
            error.Password = "Password is required"
        } else if(data.Password.length<7){
            error.Password = "Password need minimum 7 characters"
        }

        return error;
    }
    
  return (
    
        <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
        <div>
        <TextField label="Name" name="Name" type="text" value={data.Name} onChange={handleChange}  />
        {error.Name && <span style={{color:"red"}}>{error.Name}</span>}
        </div>
        <div>
        <TextField label="Email" name="Email" type="text" value={data.Email} onChange={handleChange}/>
        {error.Email && <span style={{color:"red"}}>{error.Email}</span>}
        </div>
        <div>
        <TextField label="PhoneNumber" name="Phone" type="number" value={data.Phone} onChange={handleChange}/>
        {error.Phone && <span style={{color:"red"}}>{error.Phone}</span>}
        </div>
        <div>
        <TextField label="Password" name="Password" type="password" value={data.Password} onChange={handleChange}/>
        {error.Password && <span style={{color:"red"}}>{error.Password}</span>}
        </div>
        <div>
        <Button variant="contained" type="submit">Submit</Button>
        </div>
        </Stack>
        </form>
        
  
  )
}

