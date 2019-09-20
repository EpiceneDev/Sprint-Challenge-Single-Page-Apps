import React, { useEffect, useState } from "react";
import { Link, Route } from 'react-router-dom';
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
          //  Add error handling for all async (axios/AJAX) calls. (Including some styled UI.)
    
  }, []);

  return (
    <section className="character-list grid-view">
        {characters.map(character => {
          return (
            <section className="character-card">
              <Link to={`/character/${character.name}`}>
                <CharacterCard key={character.id} character={character} />
              </Link>
              <Route path={`/character/${character.name}`} />
            </section>
          )
         })}
    </section>
  );
}
