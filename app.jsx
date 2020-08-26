import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function AddPersonForm() {
  const [person, setPerson] = useState("");
  function handleChange(e) {
    setPerson(e.target.value);
  } 
  
  function handleSubmit(e) {
    e.preventDefault();
  } 
  
  return (
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Add New Contact" onChange={handleChange} value={person} />
    <button type="submit">Add</button>
    </form>
    );
} 


ReactDOM.render(
 
);
