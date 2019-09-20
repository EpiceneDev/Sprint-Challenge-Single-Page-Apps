import React, { useState } from "react";
import styled from 'styled-components';
import axios from 'axios';
import CharacterCard from './CharacterCard';



export default function SearchForm({ onSearch }) {

  const [name, setName] = useState("")

  // Persist search form field(s) by using the custom hook useLocalStorage.

  const handleInputChange = () => {
    setName(name);
  };

  onSearch = (name) => {
    //To search for rick, you would request /api/character/?name=rick
   // useEffect(() => {
    
      axios.get(`https://rickandmortyapi.com/api/character/${name}`)
          .then(res => {
            console.log("Character returned from QUERY: ", res.data.results);
            setName(res.data.results);
            return(
              <CharacterCard name={name} />
            )
          })
          .catch(err => console.error("Error in obtaining Characters from API", err))
            
          //  Add error handling for all async (axios/AJAX) calls. (Including some styled UI.)
    
   // }, [name]);
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
