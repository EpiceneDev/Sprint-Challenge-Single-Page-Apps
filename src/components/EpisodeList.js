import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from './EpisodeCard.js';

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([]);
  // console.log("CharList props: ", props);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
      axios.get(`https://rickandmortyapi.com/api/episode`)
          .then(res => {
            console.log("Episodes returned from api: ", res.data.results);
            setEpisodes(res.data.results);
          })
          .catch(err => console.log("Error in obtaining Episodes from API"))
    
  }, []);

  return (
    <section className="character-list grid-view">
      {episodes.map(episode => <EpisodeCard episode={episode} />)}
    </section>
  );
}
