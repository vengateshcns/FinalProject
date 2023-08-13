import React from "react";
import {TextField} from "@mui/material";

const TextFieldComp = (props) => {
    const {label="", name="",type="", value="", onChange = () => "", error = ''} = props || {}
    return (
        <>
        <TextField label={label} name={name} type={type} value={value.Name} onChange={onChange}/>
        {error.label && <span style={{color:"red"}}>{error.label}</span>}
        </>
    )
}

export default TextFieldComp;