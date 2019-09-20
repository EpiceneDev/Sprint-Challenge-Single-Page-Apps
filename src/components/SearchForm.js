import React, { useState } from "react";
import { setState } from "expect/build/jestMatchersObject";
import styled from 'styled-components';



export default function SearchForm({ onSearch }) {

  const [name, newName] = useState("")

  const handleInputChange = () => {
    setState(newName);
  };

  onSearch = () => {
    
  }

  const Input = styled.input`
  padding 0.5em;
  margin: 0.5 em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  boder-radius: 3px;
  
`

  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(name)}>
        <Input
          onChange={handleInputChange}
          placeholder="Character Name"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
