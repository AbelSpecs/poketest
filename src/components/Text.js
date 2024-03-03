import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function Text(props) {
  const { label, newPokemon, setNewPokemon } = props;
  const checkField = label === 'description' ? true : false;

  const handleChange = (e) => {
    setNewPokemon({...newPokemon, [e.target.name]: e.target.value});
  }

  return (
    <div
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch"},
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column", width: "25%", margin: "0 auto"}}>
        <TextField
          label={label}
          name={label}
          helperText={`Enter ${label}`}
          // defaultValue={newPokemon.name}
          variant="standard"
          value={checkField ? newPokemon.description : newPokemon.name}
          onChange={handleChange}
          rows={checkField ? 5 : 1}
          multiline={checkField}
        />
        
      </div>
    </div>
  );
}
