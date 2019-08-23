import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard.js';

export default function CharacterList() {
  
  const [characters, setCharacters] = useState([]);
  // console.log("CharList props: ", props);

  useEffect(() => {
    
      axios.get(`https://rickandmortyapi.com/api/character`)
          .then(res => {
            console.log("Characters returned from api: ", res.data.results);
            setCharacters(res.data.results);
          })
          .catch(err => console.log("Error in obtaining Characters from API", err))
    
  }, []);

  return (
    <section className="character-list grid-view">
        {characters.map(character => {
          return <CharacterCard key={character.id} character={character} />;
         })}
      
      {/* <CharacterCard character={characterList} /> */}
    </section>
  );
}
