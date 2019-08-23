import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard.js';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState("");
  // console.log("CharList props: ", props);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
      axios.get(`https://rickandmortyapi.com/api/character`)
          .then(res => {
            console.log("Characters returned from api: ", res.data.results);
            setCharacterList(res.data.results);
          })
          .catch(err => console.log("Error in obtaining Characters from API"))
    
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
      {characterList.map(character => <CharacterCard character={character} />)} 
      {/* <CharacterCard character={characterList} /> */}
    </section>
  );
}
